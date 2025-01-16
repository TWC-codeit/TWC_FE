# TWC_FE

## 🛠 기술 스택
| **역할** | **종류** | **선정 이유** |
| --- | --- | --- |
| Library | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> | 팀원 기술 수준 고려 및 강력한 생태계와 커뮤니티 지원을 통해 효율적인 컴포넌트 기반 UI 개발 가능 |
| Programming Language | <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/> | 쉬운 디버깅 및 유연한 코드 작성 가능 |
| Styling | <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> | CSS-in-JS 방식의 컴포넌트 기반 스타일링 방식으로 관리가 간편|
| Data Fetching | <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> | json 에티터 자동 변환 기능으로 사용 편의 |
| Routing | <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"> | 직관적인 라우팅 관리 및 다양한 옵션 제공 |
| Formatting | <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> | 코드 품질을 보장하고 일관된 코드 스타일을 유지 |
| Package Manager | <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> | 팀원의 기술 수준 고려 |
| Deployment | <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"> | 프로젝트의 빠르고 쉬운 배포를 지원 |
| Bundler | <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"> | 빠른 개발 환경 설정과 HMR을 지원하여 개발 생산성을 향상 |

## ✅ Project Run
### 프로젝트 실행 방법
- **명령어**: `npm run dev`
- **port 번호**: 3000

## 🔗 Git Convention
### 🔥 Commit Message Convention
| **커밋 유형** | **설명** |
| --- | --- |
| `Init` | 초기 세팅시 사용 |
| `Feat` | 새로운 기능 추가 |
| `Fix` | 버그 수정 |
| `Docs` | 문서 추가, 수정, 삭제 |
| `Style` |	코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| `Refactor` | 코드 리팩토링 |
| `Test` | 테스트 코드, 리팩토링 테스트 코드 추가 |
| `Chore` |	패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore |
| `Build` |	빌드 관련 파일 수정에 대한 커밋 |
| `Design` | CSS 등 사용자 UI 디자인 변경 |
| `Comment` | 필요한 주석 추가 및 변경 |
| `Rename` | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
| `Remove` | 파일을 삭제하는 작업만 수행한 경우 |

**Branch Naming 규칙**
- **형식**: [커밋유형/#issue 번호] 상세설명
- **예시**:
  - [Init/#1] 프로젝트 초기 세팅 
  - [Feat/#2] 메인페이지 개발

### 🌿 Branch Convention
**Branch Naming 규칙**
- **형식**: prefix/#issue 번호/상세기능
- **Prefix 목록**:
  - `Init`: 초기 세팅
  - `Feat`: 새로운 기능 개발
  - `Fix`: 버그 수정
  - `Docs`: 문서 추가, 수정, 삭제
  - `Style`: 코드 formatting, 세미콜론 누락 등 코드 자체 변경이 없는 작업
  - `Refactor`: 코드 리팩토링
  - `Test`: 테스트 코드 작성 및 리팩토링
  - `Chore`: 기타 작업 (패키지 매니저 수정, .gitignore 변경 등)
  - `Build`: 빌드 관련 파일 수정
  - `Design`: CSS 등 사용자 UI 디자인 변경
  - `Comment`: 주석 추가 및 변경
  - `Rename`: 파일 또는 폴더 이름 변경 및 이동
  - `Remove`: 파일 삭제 작업만 수행한 경우
- **예시**:
  - Feat/#1/loginPage
  - Fix/#2/headerBug

### 📋 Issue Convention
**Issue Title 규칙**
- **형식**: [태그] 제목
- **태그 목록**:
  - `Init`: 초기 세팅
  - `Feat`: 새로운 기능 개발
  - `Fix`: 버그 수정
  - `Docs`: 문서 추가, 수정, 삭제
  - `Style`: 코드 formatting, 세미콜론 누락 등 코드 자체 변경이 없는 작업
  - `Refactor`: 코드 리팩토링
  - `Test`: 테스트 코드 작성 및 리팩토링
  - `Chore`: 기타 작업 (패키지 매니저 수정, .gitignore 변경 등)
  - `Build`: 빌드 관련 파일 수정
  - `Design`: CSS 등 사용자 UI 디자인 변경
  - `Comment`: 주석 추가 및 변경
  - `Rename`: 파일 또는 폴더 이름 변경 및 이동
  - `Remove`: 파일 삭제 작업만 수행한 경우
- **예시**:
  - [Feat] Header 컴포넌트 구현
  - [Init] 프로젝트 초기 세팅

### Issue Template
- **제목**: [Feat] 간단한 요약
- **내용**:
```
## 📄 작업할 내용
- 작업할 기능에 대한 설명을 작성해주세요.

## ✅ 작업할 내용
- 작업할 내용을 최대한 세분화 하여 작성해주세요.
- [ ] todo
- [ ] todo

## 🎨 뷰 미리보기
- 작업하고자 하는 기능의 뷰를 첨부해주세요.
```
- **제목**: [Bug] 간단한 요약
- **내용**:
```
## 🐛 버그 설명
- 버그가 언제, 어떻게 발생했는지 작성해주세요.

## 👍 정상 동작
- 정상적인 동작에 대해 설명해주세요.
```

## 🔄 Pull Request (PR) Convention
### PR Title 규칙
- **형식**: [태그] 제목
- **태그 목록**:
  - `Init`: 초기 세팅
  - `Feat`: 새로운 기능 개발
  - `Fix`: 버그 수정
  - `Docs`: 문서 추가, 수정, 삭제
  - `Style`: 코드 formatting, 세미콜론 누락 등 코드 자체 변경이 없는 작업
  - `Refactor`: 코드 리팩토링
  - `Test`: 테스트 코드 작성 및 리팩토링
  - `Chore`: 기타 작업 (패키지 매니저 수정, .gitignore 변경 등)
  - `Build`: 빌드 관련 파일 수정
  - `Design`: CSS 등 사용자 UI 디자인 변경
  - `Comment`: 주석 추가 및 변경
  - `Rename`: 파일 또는 폴더 이름 변경 및 이동
  - `Remove`: 파일 삭제 작업만 수행한 경우
- **예시**:
  - [Feat] Header 컴포넌트 구현
  - [Fix] Header 컴포넌트의 버그 수정

### PR Template
- **PR 작성 규칙**:
```
## 📑 이슈 번호
<!-- 이슈 번호를 작성해주세요 ex) #11 -->
- close #

## ✨️ 작업 내용
<!-- 작업 내용을 간략히 설명해주세요 -->

## 💙 코멘트
<!-- 리뷰어가 중점적으로 봐주었으면 하는 부분이나 궁금한 점을 자유롭게 남겨주세요! -->

## 📸 구현 결과
<!-- 구현한 기능이 모두 결과물에 포함되도록 자유롭게 첨부해주세요 (스크린샷, gif, 동영상, 배포링크 등) -->

<!-- ⚠️⚠️⚠️⚠️⚠️⚠️ 잠깐 !!!! ⚠️⚠️⚠️⚠️⚠️ -->
<!-- PR 제목 컨벤션에 맞게 잘 작성했는지, assignee 및 reviewer 지정했는지 다시 한 번 체크하기 !! -->
```

## 📂 프로젝트 구조
```
📦TWC_FE
 ┣ 📁.github
 ┣ 📁node_modules
 ┣ 📁public
 ┣ 📂src
 ┃  ┣ 📂assets
 ┃  ┣ 📂components
 ┃  ┣ 📂pages
 ┃  ┣ 📂styles
 ┃  ┃ ┗ 📂components 
 ┃  ┣ 📜App.css
 ┃  ┣ 📜App.jsx
 ┃  ┣ 📜index.css
 ┃  ┗ 📜main.jsx
 ┣ 📜.gitignore
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜vite.config.js
```