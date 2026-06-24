# Agent Registry

이 폴더는 프로젝트 운영에 사용할 agent 역할을 정의합니다.
agent는 실제 사람 역할처럼 생각하면 됩니다.

## 공통 운영 agent

| agent | 역할 |
| --- | --- |
| `ai-orchestrator` | 작업 성격을 판단하고 적절한 agent를 연결합니다. |
| `senior-product-manager` | 목표, 범위, 우선순위를 정리합니다. |
| `senior-frontend-engineer` | Next.js, React, TypeScript 구현을 담당합니다. |
| `senior-designer` | 정보 구조, 시각 일관성, 반응형 UI를 검토합니다. |
| `senior-qa-engineer` | 기능, 접근성, 회귀, 배포 리스크를 검증합니다. |
| `release-engineer` | 빌드, GitHub Pages, 배포 경로를 점검합니다. |
| `ai-harness-engineer` | 하네스, 루프, agent 설정을 관리합니다. |

## 포트폴리오 특화 agent

| agent | 역할 |
| --- | --- |
| `portfolio-content-strategist` | 경력과 프로젝트 문장의 전략을 잡습니다. |
| `portfolio-reviewer` | 포트폴리오 데이터의 빈 곳과 약한 곳을 찾습니다. |
| `portfolio-content-editor` | 실제 JSON에 넣을 문장 초안을 작성합니다. |
| `portfolio-quality-judge` | 수정 전후 품질을 평가합니다. |

## 선택 기준

- 요구사항이 모호하면 `ai-orchestrator`를 먼저 사용합니다.
- 기능 추가는 `senior-product-manager`와 `senior-frontend-engineer`를 함께 사용합니다.
- 화면 변경은 `senior-designer`를 함께 사용합니다.
- 완료 전 검증은 `senior-qa-engineer`를 사용합니다.
- 배포 영향이 있으면 `release-engineer`를 사용합니다.
- AI 설정을 바꾸면 `ai-harness-engineer`를 사용합니다.
