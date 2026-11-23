// 정적 export 결과(out/)에 검색엔진용 산출물이 제대로 들어갔는지 확인합니다.
// 사용: npm run build 후 npm run check:seo
import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const outDir = path.join(rootDir, "out");
// 기댓값은 src/utils/seo.ts 를 import 하지 않고 문자 그대로 적습니다.
// 제품 상수를 가져오면 상수가 잘못 바뀌어도 검사가 함께 통과하기 때문입니다.
const SITE_URL = "https://nimkoes.github.io/portfolio/";
const BASE_PATH = "/portfolio";
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true" || process.env.GITHUB_ACTIONS === "true";

const errors = [];
const fail = (message) => errors.push(message);

function readOut(relativePath) {
  const filePath = path.join(outDir, relativePath);
  if (!fs.existsSync(filePath)) {
    fail(`out/${relativePath} 파일이 없습니다.`);
    return "";
  }
  const content = fs.readFileSync(filePath, "utf8");
  // 빈 파일이면 아래 검사가 통째로 건너뛰어지므로 여기서 실패로 기록합니다.
  if (content.trim() === "") fail(`out/${relativePath} 파일이 비어 있습니다.`);
  return content;
}

function metaContent(html, attr, name) {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  const tag = tags.find((value) => new RegExp(`${attr}="${name}"`, "i").test(value));
  return tag?.match(/content="([^"]*)"/i)?.[1];
}

const html = readOut("index.html");
const sitemap = readOut("sitemap.xml");

if (html) {
  if (!/<title>[^<]+<\/title>/i.test(html)) fail("title 이 없습니다.");
  if (!metaContent(html, "name", "description")) fail("meta description 이 없습니다.");

  const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
  if (!canonical) fail("Canonical 이 없습니다.");
  else if (canonical !== SITE_URL) fail(`Canonical 이 ${SITE_URL} 가 아닙니다: ${canonical}`);

  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  if (h1Count !== 1) fail(`H1 은 1개여야 합니다. 현재 ${h1Count}개입니다.`);

  if (!metaContent(html, "property", "og:title")) fail("og:title 이 없습니다.");
  if (!metaContent(html, "property", "og:description")) fail("og:description 이 없습니다.");
  const ogImage = metaContent(html, "property", "og:image");
  if (!ogImage) fail("og:image 가 없습니다.");
  else if (!ogImage.startsWith(SITE_URL)) fail(`og:image 가 정식 주소 아래에 있지 않습니다: ${ogImage}`);
  const ogUrl = metaContent(html, "property", "og:url");
  if (ogUrl !== SITE_URL) fail(`og:url 이 Canonical 과 다릅니다: ${ogUrl}`);
  if (!metaContent(html, "name", "twitter:card")) fail("twitter:card 가 없습니다.");

  // 운영 페이지에 noindex 가 섞이면 다른 설정과 상관없이 검색 결과에서 빠집니다.
  for (const name of ["robots", "googlebot"]) {
    const value = metaContent(html, "name", name) ?? "";
    if (/noindex|none/i.test(value)) fail(`${name} 메타 태그가 색인을 막고 있습니다: ${value}`);
  }
  if (!metaContent(html, "name", "google-site-verification")) fail("Google 소유 확인 메타 태그가 없습니다.");

  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  if (jsonLdBlocks.length === 0) fail("JSON-LD 가 없습니다.");
  let hasProfilePage = false;
  for (const [, body] of jsonLdBlocks) {
    try {
      const data = JSON.parse(body);
      if (data["@type"] === "ProfilePage" && data.mainEntity?.["@type"] === "Person") hasProfilePage = true;
    } catch {
      fail("JSON-LD 를 JSON 으로 읽을 수 없습니다.");
    }
  }
  if (jsonLdBlocks.length > 0 && !hasProfilePage) fail("mainEntity 가 Person 인 ProfilePage JSON-LD 가 없습니다.");

  if (isGithubPagesBuild && !html.includes(`${BASE_PATH}/_next/`)) {
    fail(`GitHub Pages 빌드인데 정적 자원 경로에 ${BASE_PATH} 가 붙지 않았습니다.`);
  } else if (!isGithubPagesBuild) {
    console.log(`로컬 빌드라 정적 자원 경로의 ${BASE_PATH} 검사는 건너뜁니다. 배포 기준 검사는 GITHUB_PAGES=true 로 실행합니다.`);
  }
}

// 트립와이어: 지금은 단일 페이지라 canonical, og:url, JSON-LD 를 layout.tsx 에 둡니다.
// 페이지가 추가되면 새 페이지가 홈 canonical 을 물려받아 검색에서 빠지므로, 그 순간 검사를 실패시킵니다.
// 이 검사가 실패하면 페이지 고유 메타데이터를 각 page 로 옮기고 sitemap.ts 에 URL 을 추가한 뒤 아래 목록을 고칩니다.
const EXPECTED_HTML_FILES = ["404.html", "index.html"];
function listHtmlFiles(dir, prefix = "") {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const relative = path.posix.join(prefix, entry.name);
    if (entry.isDirectory()) return entry.name === "_next" ? [] : listHtmlFiles(path.join(dir, entry.name), relative);
    return entry.name.endsWith(".html") ? [relative] : [];
  });
}
if (fs.existsSync(outDir)) {
  const htmlFiles = listHtmlFiles(outDir).sort();
  const unexpected = htmlFiles.filter((file) => !EXPECTED_HTML_FILES.includes(file));
  if (unexpected.length > 0) {
    fail(`단일 페이지 전제가 깨졌습니다. 새 HTML: ${unexpected.join(", ")}. layout.tsx 의 페이지 고유 메타데이터를 page 로 옮겨야 합니다.`);
  }
}

if (sitemap) {
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, loc]) => loc);
  if (!locs.includes(SITE_URL)) fail(`사이트맵에 정식 주소 ${SITE_URL} 가 없습니다.`);
  if (new Set(locs).size !== locs.length) fail("사이트맵에 중복 URL 이 있습니다.");
  for (const loc of locs) {
    if (/localhost|127\.0\.0\.1/.test(loc)) fail(`사이트맵에 로컬 주소가 있습니다: ${loc}`);
    if (loc.includes(`${BASE_PATH}${BASE_PATH}`)) fail(`사이트맵에 base path 가 중복됐습니다: ${loc}`);
    if (!loc.startsWith("https://")) fail(`사이트맵 URL 이 HTTPS 절대 주소가 아닙니다: ${loc}`);
  }
}

// OG 이미지는 1200x630 PNG 여야 합니다. PNG IHDR 의 16~23번째 바이트에 폭과 높이가 있습니다.
const ogImagePath = path.join(outDir, "og-image.png");
if (!fs.existsSync(ogImagePath)) {
  fail("out/og-image.png 파일이 없습니다.");
} else {
  const png = fs.readFileSync(ogImagePath);
  const isPng = png.length >= 24 && png.toString("hex", 0, 8) === "89504e470d0a1a0a";
  if (!isPng) fail("out/og-image.png 가 PNG 파일이 아닙니다.");
  else if (png.readUInt32BE(16) !== 1200 || png.readUInt32BE(20) !== 630) {
    fail(`out/og-image.png 크기가 1200x630 이 아닙니다: ${png.readUInt32BE(16)}x${png.readUInt32BE(20)}`);
  }
}

if (errors.length > 0) {
  console.error("SEO artifact validation failed.");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("SEO artifact validation passed.");
