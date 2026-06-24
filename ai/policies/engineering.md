# Engineering Policy

## 기본 원칙

- Next.js App Router와 현재 폴더 구조를 유지합니다.
- TypeScript strict 설정을 깨지 않습니다.
- `~/*`와 `@resources/*` alias를 사용합니다.
- 데이터 구조 변경은 관련 컴포넌트와 하네스 규칙을 함께 봅니다.
- 서버 기능을 추가하기 전 정적 export와 GitHub Pages 배포 영향을 확인합니다.

## 코드 작성 기준

- 기존 컴포넌트 단위를 우선 사용합니다.
- 공통 로직은 `src/utils`나 가까운 컴포넌트 내부에 둡니다.
- 큰 리팩터링은 기능 변경과 분리합니다.
- 날짜 파싱은 `src/utils/date.ts` 기준을 우선 사용합니다.
- 외부 링크는 `target="_blank"`와 `rel="noopener noreferrer"`를 유지합니다.

## 검증 기준

```bash
npm run lint
npm run build
```

콘텐츠 데이터가 바뀌면 추가로 실행합니다.

```bash
npm run ai:loop
```
