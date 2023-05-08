# 하이메디 프론트엔드 개발자 온보딩 저장소

# 주요 프로젝트
### 1. DateTime
- datetime을 아랍어, 러시아어, 영어 등을 Javascript toLocale을 통해 구현
- Vue Router의 hash 태그를 이용해 특정 지점 이동
- 스터디내용 : https://ctaaaglog.vercel.app/I18n-datetime

### 2. I18n
- ar, en, ru **리소스** 파일의 내용을 읽어 화면에 표시   
- 선호하는 언어(ar, en, ru)를 선택하여 쿠키에 저장 하는 기능 추가
- 브라우저의 사용자 선호 언어 알아오기
- 스터디내용 : https://ctaaaglog.vercel.app/I18n-locale

### 3. L10n
- Currency : 아래 로케일 정보로 '3,000' 표시
- Plural  : 아래 로케일 정보로 입력한 숫자의 바나나 개수 표시
  - ar-AE (AED)
  - en-US (USD)
  - en-GB (GBP)
  - ru-RU (RUB)
- 스터디내용 : https://ctaaaglog.vercel.app/L10n-currency

### 4. RTL
- HTML dir, CSS dir 학습 및 비교
- RTLCSS 라이브러리 활용하기
- 특정 버튼 클릭시 모든 css 요소에 RTLCSS 파일 적용하기
- 스터디내용 : https://ctaaaglog.vercel.app/RTLCSS

### 5. Axios,Fetch
- HIMEDI dev api를 Proxy 설정 없이 Axios 만으로 구현
- vue.js에서 제공하는 Proxy 설정하여 구현
- 모든 API 호출시 아래 문서의 타임존 Header 정보 포함해야 함 
- 스터디내용 : https://ctaaaglog.vercel.app/Axios

### 6. Router, LifeCycle
- vue-router.vue
    - vue router 스터디
    - vue lifecycle 모든 메소드에 console.log(””)
    - vue-router의 기능을 활용해서, 아래 기능 구현
    1. 로그인 옵션 페이지
    2. 로그인 필수 페이지
- vue lifecycle + vue-router lifecycle 스터디
  - 모든 hook logging
- 스터디내용 : https://ctaaaglog.vercel.app/vue-lifecycle-login

### 7. Vue Composition API(Todo APP 구현)
- Composition API 스터디
- Example CRUD project
- TodoAPP 구현
- 스터디내용 : https://ctaaaglog.vercel.app/vue-composition

### 8. Sass, Apple 사이트 구현
- Sass(SCSS)만 사용해서 디자인 스타일 정의
- 하이메디닷컴과 애플사이트를 모두 표현할 수 있는 레이아웃 개발
- Phone의 portrait,  landscape 모드와 데스크톱 브라우저에서도 잘 동작해야 함
- 스터디내용 : https://ctaaaglog.vercel.app/sass

### 9. Webfont
- web-fonts에 대해 스터디 (MDN)
- 구글폰트 활용
- font.vue에 아래 기능 구현
  - en, ar 언어로 설정할 수 있는 버튼 추가
    클릭시 /font/en, /font/ar 형태로 URL에 lang 정보 포함하여 동작
  - en 버튼 클릭시 Noto Sans 폰트로 표시
  - ar 버튼 클릭시 Noto Sans Arabic 폰트로 표시
  - 폰트는 필요할 경우에만 다운로드 되어야 함
- 스터디내용 : https://ctaaaglog.vercel.app/webfont

### 10. Docker, Nginx
himedi-web의 Docker 파일을 참고하여 아래 기능을 만족하는 Docker 파일 작성
- NGINX나 OpenResty를 이용하여 File Serving
- Development, Production 모드 둘다 가능해야 함
- 빌드 명령을 스크립트 파일(.sh)로 작성
- 스터디내용 : https://ctaaaglog.vercel.app/docker


# 
https://ctaaaglog.vercel.app/

# 배포링크
https://hello-vuejs-steel.vercel.app
