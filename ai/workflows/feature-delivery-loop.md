# Workflow: Feature Delivery Loop

## 목적

새 기능을 추가하거나 기존 화면 동작을 바꿀 때 사용하는 workflow입니다.

## agent 순서

1. `senior-product-manager`
   - 목표와 범위를 정합니다.
2. `senior-designer`
   - 정보 구조와 화면 영향을 봅니다.
3. `senior-frontend-engineer`
   - 기능을 구현합니다.
4. `senior-qa-engineer`
   - 기능과 회귀를 검증합니다.
5. `release-engineer`
   - 배포 경로와 빌드 영향을 봅니다.

## 기본 입력

- 사용자 요청
- `ai/project-profile.md`
- 관련 컴포넌트
- 관련 JSON 데이터
- 관련 SCSS module

## 실행 기준

```bash
npm run lint
npm run build
```

콘텐츠 데이터가 바뀌면 추가로 실행합니다.

```bash
npm run ai:loop
```

## 완료 결과 형식

```json
{
  "goal": "무엇을 해결했는지",
  "changedFiles": ["수정 파일"],
  "verified": ["실행한 검증"],
  "remainingRisks": []
}
```
