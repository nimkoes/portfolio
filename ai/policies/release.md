# Release Policy

## 배포 구조

- 이 프로젝트는 GitHub Pages에 정적 export 결과물을 배포합니다.
- 배포 빌드에서는 `GITHUB_PAGES=true`와 `GITHUB_PAGES_BASE_PATH=/portfolio`를 사용합니다.
- `next.config.mjs`의 `basePath`와 `assetPrefix` 설정을 유지해야 합니다.

## 릴리스 전 확인

```bash
npm run ai:loop
npm run lint
npm run build
```

GitHub Pages 경로 기준 검증이 필요하면 아래 명령을 사용합니다.

```bash
GITHUB_PAGES=true GITHUB_PAGES_BASE_PATH=/portfolio npm run build
```

## 릴리스 리스크

- 이미지 경로가 `/portfolio` basePath를 타는지 확인합니다.
- 정적 export에서 동작하지 않는 서버 기능을 추가하지 않습니다.
- GitHub Actions에서 사용하는 Node 버전과 로컬 버전 차이를 고려합니다.
