import type { MetadataRoute } from "next";
import { SITE_URL } from "~/utils/seo";

export const dynamic = "force-static";

// 단일 페이지 포트폴리오라 정식 주소 하나만 넣습니다.
// 실제 콘텐츠 수정일을 정확히 계산할 수 없으므로 lastModified 는 넣지 않습니다.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL }];
}
