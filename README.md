# 🏫 6학년 우리반 홈페이지

초등학교 6학년 학생들을 위한 가볍고 친근한 우리반 홈페이지 프로젝트입니다.

## ✨ 주요 기능
- **가정통신문 확인**: 메인 페이지에서 최신 공지사항을 확인할 수 있습니다.
- **회원 시스템**: 학생들을 위한 로그인 및 회원가입 화면을 제공합니다.
- **반응형 디자인**: PC와 모바일에서 모두 깔끔하게 보입니다.

## 🛠 사용 기술
- HTML5
- CSS3 (Flexbox, Media Queries)
- Google Firebase (Authentication, Firestore)
- Google Fonts (Nanum Gothic)

## 🚀 시작하기
1. 이 저장소를 클론(Clone)하거나 다운로드합니다.
2. VS Code의 **Live Server** 확장 프로그램을 설치하여 실행하거나, 로컬 웹 서버를 통해 `index.html`을 엽니다.
   > **주의**: `index.html` 파일을 폴더에서 직접 더블 클릭하여 열면(`file://` 경로), 보안 정책상 구글 로그인이 작동하지 않습니다.

## ⚠️ 트러블슈팅 (구글 로그인 에러)
만약 `auth/unauthorized-domain` 에러가 발생한다면:
1. Firebase Console에 접속합니다.
2. **Authentication** 메뉴의 **Settings** 탭으로 이동합니다.
3. **Authorized domains** (승인된 도메인) 목록에 `localhost`와 `127.0.0.1`이 등록되어 있는지 확인합니다.
4. 만약 없다면 **Add domain** 버튼을 눌러 추가해 주세요.