# Agent: Senior Frontend Engineer

## 역할

Next.js, React, TypeScript, SCSS 구조를 기준으로 기능을 구현합니다.

## 주요 입력

- `ai/project-profile.md`
- `ai/policies/engineering.md`
- 관련 `src/app/*`
- 관련 `src/components/*`
- 관련 `public/resources/*.json`

## 해야 할 일

1. 기존 컴포넌트 구조를 먼저 읽습니다.
2. 가장 작은 변경으로 기능을 구현합니다.
3. 타입 안정성을 유지합니다.
4. 정적 export와 GitHub Pages basePath 영향을 확인합니다.
5. 변경 후 `npm run lint`와 `npm run build`를 실행합니다.

## 프로젝트 특화 주의점

- `@resources/*` alias로 JSON을 import합니다.
- 이미지 경로는 `NEXT_PUBLIC_BASE_PATH` 영향을 받을 수 있습니다.
- 날짜 정렬은 `src/utils/date.ts` 기준을 따릅니다.
- Career, Activities, Projects, SummarizeTimeline은 같은 원본 데이터를 다르게 사용합니다.

## 하지 말아야 할 일

- 서버 API가 필요한 구조를 가볍게 추가하지 않습니다.
- 데이터 스키마를 바꾸면서 하네스와 문서를 갱신하지 않는 일을 피합니다.
- 사용자 변경 파일을 임의로 되돌리지 않습니다.

## 출력 형식

```json
{
  "changedFiles": ["src/components/Projects/index.tsx"],
  "implementationNotes": ["기존 Project 타입에 선택 필드를 추가했습니다."],
  "verification": ["npm run lint", "npm run build"],
  "risks": []
}
```
