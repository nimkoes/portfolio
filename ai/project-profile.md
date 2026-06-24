# Project Profile

## 한 줄 정의

이 프로젝트는 `nimkoes` 개인 포트폴리오를 보여 주는 Next.js 정적 사이트입니다.
경력, 활동, 프로젝트 데이터는 JSON으로 관리하고, GitHub Pages로 배포합니다.

## 기술 구조

- Framework: Next.js 14 App Router
- UI: React 18
- Language: TypeScript
- Styling: SCSS module, 전역 SCSS token
- Output: static export
- Deployment: GitHub Pages
- Package manager: npm

## 주요 실행 명령

```bash
npm run dev
npm run lint
npm run build
npm run ai:harness
npm run ai:loop
```

## 주요 경로

- `src/app/layout.tsx`: HTML, 메타데이터, 폰트, 테마 초기화, Google Analytics 설정입니다.
- `src/app/page.tsx`: 메인 화면 조립부입니다.
- `src/components/Aside`: 프로필, 링크, 키워드, 테마 토글, 한 줄 보기 토글입니다.
- `src/components/ExperienceTimeline`: 경력 타임라인입니다.
- `src/components/Activities`: 활동, 수상, 자격 타임라인입니다.
- `src/components/Projects`: 프로젝트 타임라인입니다.
- `src/components/SummarizeTimeline`: 경력, 활동, 프로젝트를 요약 그래프로 보여 주는 모드입니다.
- `src/utils/date.ts`: 날짜 파싱과 정렬 기준입니다.
- `public/resources`: 화면에 표시되는 원본 데이터입니다.
- `scripts/portfolio-ai-harness.mjs`: AI 하네스와 콘텐츠 점검 루프입니다.
- `ai/`: AI agent, policy, workflow 설정입니다.

## 데이터 계약

### careers.json

- 필수 필드: `id`, `company`, `from`, `to`, `contents`
- 권장 필드: `role`, `techDecisions`, `troubleshooting`, `infra`
- `to`가 빈 문자열이면 현재 재직으로 봅니다.

### projects.json

- 필수 필드: `id`, `title`, `period`, `summary`, `details`, `links`
- 권장 필드: `goals`, `techStack`, `infra`, `troubleshooting`, `achievements`
- `period`는 `YYYY.MM ~ YYYY.MM` 형식을 기본으로 봅니다.
- 진행 중인 프로젝트는 종료 월이 비어 있을 수 있습니다.

### activities.json

- `activities`와 `awards` 배열을 사용합니다.
- 과거 호환을 위해 `articles`도 일부 컴포넌트에서 허용합니다.
- 날짜는 최소 `YYYY-MM` 또는 `YYYY.MM` 수준이면 타임라인에 배치할 수 있습니다.

### keywords.json

- 프로필 사이드 영역에 표시하는 기술 키워드 배열입니다.

## UI 특징

- 전체 화면은 좌측 프로필 영역과 우측 타임라인 영역으로 나뉩니다.
- 모바일에서는 프로필 제목 행이 sticky 형태로 동작합니다.
- Career와 Projects는 항목별 펼침/접힘을 제공합니다.
- 한 줄 보기 모드에서는 `SummarizeTimeline`이 동적으로 로드됩니다.
- 라이트/다크 테마는 `portfolio-theme` localStorage 값을 사용합니다.

## 설계상 중요한 점

- 정적 export이므로 서버 API에 의존하지 않습니다.
- GitHub Pages 배포 시 `GITHUB_PAGES_BASE_PATH=/portfolio`가 적용됩니다.
- 이미지 경로는 `NEXT_PUBLIC_BASE_PATH`를 고려해야 합니다.
- 데이터 변경은 화면 정렬, 요약 그래프, 접근성 라벨에 영향을 줄 수 있습니다.
- 모바일 폭에서 타임라인 선, 배지, 카드 텍스트가 겹치지 않아야 합니다.

## 현재 리스크와 개선 후보

- `projects.json`의 많은 프로젝트에 `goals`가 비어 있습니다.
- 일부 프로젝트의 `achievements`가 비어 있습니다.
- 최근 프로젝트 중 `troubleshooting`이 부족한 항목이 있습니다.
- GitHub Actions는 배포 빌드 중심이며, 아직 `npm run ai:loop` 검증은 포함하지 않습니다.

## 우선 검증 기준

1. `npm run ai:loop`
2. `npm run lint`
3. `npm run build`
4. 모바일 폭에서 주요 화면 확인
5. GitHub Pages basePath 영향 확인
