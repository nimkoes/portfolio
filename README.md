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
- **activities.json**: `items`(활동/수상 문자열 배열), `articles`(배열). 각 아티클: `id`, `title`, `summary`(선택), `image`(선택).

**아티클 이미지**: `image`에 값이 있으면 리스트에서 해당 항목 클릭 시 이미지가 중앙 팝업으로 열린다. `public/` 기준 경로(예: `/images/thumbnail.jpg`) 또는 외부 URL. 바깥 클릭·Esc로 닫기.

## 참고

- [Next.js 문서](https://nextjs.org/docs)
- [Vercel 배포](https://vercel.com/docs/deployments/overview)
