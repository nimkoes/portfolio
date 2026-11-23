// 검색엔진과 SNS 미리보기에 쓰는 값을 한 곳에서 관리합니다.
// 운영 주소는 GitHub Pages 프로젝트 사이트(https://nimkoes.github.io/portfolio/) 기준입니다.

export const SITE_ORIGIN = "https://nimkoes.github.io";
// 서빙 base path(next.config.mjs, 워크플로 env)와 의도적으로 분리한 공개 정식 경로입니다.
// 로컬 빌드처럼 basePath 가 비어도 정식 주소는 바뀌지 않아야 합니다. 일치 여부는 scripts/check-seo-artifacts.mjs 가 검사합니다.
export const SITE_BASE_PATH = "/portfolio";
// 정식(Canonical) 주소는 항상 / 로 끝나는 절대 주소를 씁니다.
// 현재는 단일 페이지라 layout.tsx 에서 canonical 을 지정합니다. 페이지를 추가하면 canonical 을 페이지별 metadata 로 옮겨야 합니다.
export const SITE_URL = `${SITE_ORIGIN}${SITE_BASE_PATH}/`;

export const SITE_NAME = "nimkoes portfolio";
export const SITE_TITLE = "nimkoes | Backend Engineer 포트폴리오";
export const SITE_DESCRIPTION =
  "Backend Engineer nimkoes의 포트폴리오입니다. Java, Kotlin, Spring Boot 기반 백엔드 개발 경력과 프로젝트, 활동을 정리했습니다.";
export const AUTHOR_NAME = "nimkoes";
export const AUTHOR_JOB_TITLE = "Backend Engineer";

export const SITE_LANGUAGE = "ko-KR";
export const SITE_LOCALE = "ko_KR";

export const OG_IMAGE_URL = `${SITE_URL}og-image.png`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT = "nimkoes Backend Engineer 포트폴리오";

export const PROFILE_IMAGE_URL = `${SITE_URL}images/thumbnail.jpg`;

// Google Search Console HTML 태그 인증 값입니다. 계정 단위로 발급되는 공개 값이라 코드에 둡니다.
export const GOOGLE_SITE_VERIFICATION = "qjAYKAWDvi1a8R2WjIvp8VV8QmEiYymdpjXx5nBcyak";

// 화면에 실제로 표시되는 공개 프로필만 넣습니다.
export const SAME_AS_LINKS = [
  "https://github.com/nimkoes",
  "https://www.linkedin.com/in/wxpjegiysxlovzvhvjncev",
  "https://nimkoes.github.io/tech-blog/",
  "https://xxxelppa.tistory.com/",
];

export function serializeJsonLd(data: Record<string, unknown>) {
  // </script> 같은 문자열이 스크립트를 닫지 못하도록 < 를 이스케이프합니다.
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function getProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}#profilepage`,
    url: SITE_URL,
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    inLanguage: SITE_LANGUAGE,
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: AUTHOR_NAME,
      jobTitle: AUTHOR_JOB_TITLE,
      url: SITE_URL,
      image: PROFILE_IMAGE_URL,
      sameAs: SAME_AS_LINKS,
    },
  };
}
