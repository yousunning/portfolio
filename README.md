# 플랫폼 개발 포트폴리오

CJ 플랫폼 개발 지원에 활용할 수 있는 React + Vite 단일 페이지 포트폴리오입니다. 지원 공고의 자격 요건과 회사명은 사이트 본문에 직접 기재하지 않아 재활용할 수 있습니다.

## 제출 전 수정

1. `src/content.js`의 `profile.name`을 본인 이름으로 바꾸세요.
2. 각 프로젝트의 담당 범위, 구현 기능, 결과를 실제 수행 내용과 대조하세요. 특히 AI 추천 기능의 구현 수준과 Kafka 담당 범위는 꼭 확인하세요.
3. 외부 공개 승인 여부를 확인하고 회사·고객사 내부 자료, 실데이터, 접속 주소, 코드, 화면 캡처, 계정 및 키를 넣지 마세요.
4. 연락처나 개인 GitHub 링크를 공개하려면 `profile.email`, `profile.github`에 입력하세요. 비워 두면 연락처 링크는 표시되지 않습니다.

## 로컬 실행

Node.js 22 이상을 권장합니다.

```bash
npm ci
npm run dev
```

빌드 확인: `npm run build`

## GitHub Pages 배포

1. 새 공개 GitHub 저장소를 만들고 이 폴더의 **내용물**을 저장소 루트에 올리세요. `main` 브랜치에 푸시합니다.
2. 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 지정하세요.
3. **Actions** 탭에서 `Deploy portfolio to GitHub Pages`의 배포 완료를 확인하세요.
4. 배포 주소는 `https://사용자명.github.io/저장소명/`입니다. 저장소가 `사용자명.github.io`이면 `https://사용자명.github.io/`입니다.
5. 시크릿 창과 모바일에서 링크, 글, 메뉴를 확인한 뒤 지원서에 URL을 제출하세요.

`vite.config.js`의 상대 경로 설정으로 저장소 이름을 코드에 적지 않아도 됩니다. 배포는 GitHub Pages 정적 사이트이며 백엔드 API나 민감 정보를 담지 않습니다.

## 지원서 입력 예시

```text
플랫폼 개발 포트폴리오: https://사용자명.github.io/저장소명/
프로젝트별 담당 범위, 기술 스택, 주요 구현 기능과 문제 해결 경험을 정리했습니다.
```
