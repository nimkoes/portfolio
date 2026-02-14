# Portfolio

Next.js 기반 포트폴리오. 콘텐츠는 `public/resources/` JSON으로 관리한다.

## 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속.

## 데이터 필드 설명

- **careers.json**: 경력. 선택 필드: `techDecisions`(문자열 배열), `troubleshooting`(`{ title, problem, solution }[]`), `infra`(문자열 배열).
- **projects.json**: 프로젝트. 선택 필드: `techStack`(`{ name, reason? }[]`), `troubleshooting`, `infra`. `details`, `links` 유지.
- **activities.json**: `items`(활동/수상 문자열 배열), `articles`(배열). 각 아티클: `id`, `title`, `summary`(선택), `organizer`(선택), `date`(선택).

## 경로 정책

- 로컬 개발(`npm run dev`)은 `basePath` 없이 `/` 기준으로 동작.
- GitHub Pages 배포 빌드는 `basePath=/portfolio`를 사용.
- 경로 설정은 `next.config.mjs`의 `GITHUB_PAGES`, `GITHUB_PAGES_BASE_PATH` 환경변수로 제어.

로컬에서 배포 경로로 검증하려면:

```bash
GITHUB_PAGES=true GITHUB_PAGES_BASE_PATH=/portfolio npm run build
```

## 참고

- [Next.js 문서](https://nextjs.org/docs)
- [Vercel 배포](https://vercel.com/docs/deployments/overview)
