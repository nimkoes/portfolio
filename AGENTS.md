# AGENTS.md

## 기본 응답 규칙

- 존댓말을 사용합니다.
- 쉬운 말로 설명합니다.
- 간결한 문장을 사용합니다.
- 공식 문서를 최우선 참고자료로 사용합니다.
- 추측으로 사실을 만들지 않습니다.

## 프로젝트 진입 순서

AI 작업을 시작할 때는 아래 파일을 순서대로 확인합니다.

1. `ai/README.md`
2. `ai/project-profile.md`
3. `ai/policies/global.md`
4. 작업에 맞는 `ai/workflows/*.md`
5. 작업에 맞는 `ai/agents/*.md`

## 프로젝트 핵심 규칙

- 이 프로젝트는 Next.js 기반 정적 포트폴리오입니다.
- 콘텐츠 원본은 `public/resources/*.json`입니다.
- 화면은 `src/components/*`와 `src/app/*`에서 구성합니다.
- 스타일은 SCSS module과 `src/styles`의 전역 토큰을 사용합니다.
- GitHub Pages 배포는 `next.config.mjs`와 `.github/workflows/nextjs.yml`을 함께 봅니다.
- 콘텐츠 수정 후에는 `npm run ai:loop`를 실행합니다.
- 코드 수정 후에는 `npm run lint`와 `npm run build`를 실행합니다.

## 금지 사항

- 확인되지 않은 경력, 성과, 수치, 회사명, 기간을 만들지 않습니다.
- 사용자 변경으로 보이는 파일을 임의로 되돌리지 않습니다.
- `public/resources/projects.json`의 기존 사용자 변경은 명시 요청 없이 덮어쓰지 않습니다.
- 디자인 변경 시 모바일 화면을 고려하지 않은 채 완료하지 않습니다.

## 주요 agent

- 작업 조율: `ai/agents/ai-orchestrator.md`
- 제품 판단: `ai/agents/senior-product-manager.md`
- 프론트엔드 구현: `ai/agents/senior-frontend-engineer.md`
- 디자인 검토: `ai/agents/senior-designer.md`
- QA 검증: `ai/agents/senior-qa-engineer.md`
- 콘텐츠 개선: `ai/agents/portfolio-content-strategist.md`
- 릴리스 검토: `ai/agents/release-engineer.md`
- AI 하네스 운영: `ai/agents/ai-harness-engineer.md`
