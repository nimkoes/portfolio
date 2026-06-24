# Portfolio

Next.js 기반 포트폴리오. 콘텐츠는 `public/resources/` JSON으로 관리한다.

## 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속.

## AI 하네스와 루프

포트폴리오 콘텐츠 품질을 점검하는 로컬 하네스를 제공한다.
AI 지침, agent 역할, workflow는 `ai/` 폴더에서 관리한다.

```bash
npm run ai:harness
npm run ai:loop
```

- `ai:harness`: `public/resources/` 데이터를 읽고 점검 리포트를 만든다.
- `ai:loop`: 점검 리포트와 함께 컨텍스트, 프롬프트, 루프, 설정 manifest 문서를 만든다.
- `ai/project-profile.md`: 현재 프로젝트 분석과 운영 기준을 정리한다.
- `ai/agents/README.md`: 사용할 agent 목록과 선택 기준을 정리한다.
- 자세한 설명은 `docs/ai-engineering.md`를 참고한다.

## 데이터 필드 설명

- **careers.json**: 경력. 선택 필드: `techDecisions`(문자열 배열), `troubleshooting`(`{ title, problem, solution }[]`), `infra`(문자열 배열).
- **projects.json**: 프로젝트. 선택 필드: `techStack`(`{ name, layer? }[]`), `infra`(`{ name, layer? }[]`), `troubleshooting`. `details`, `links` 유지.
- **activities.json**: `activities`, `awards` 배열. 각 항목: `id`, `title`, `affiliation` 또는 `organizer`, `date`.

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
- [Next.js Static Exports](https://nextjs.org/docs/app/guides/static-exports)
- [GitHub Pages 문서](https://docs.github.com/pages)
