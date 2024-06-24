# 개인과제 - 타입스크립트1

<br />

## :cat2: 목차

|            [🐈 프로젝트 소개 🐈](#cat2-프로젝트-소개)             |
| :---------------------------------------------------------------: |
|            [🏠 프로젝트 구조 🏠](#house-프로젝트-구조)            |
|           [🍡 사용 기술 스택 🍡](#dango-사용-기술-스택)           |
| [🍵 기술적 고민과 트러블 슈팅 🍵](#tea-기술적-고민과-트러블-슈팅) |

<br />

---

<br />

# :cat2: 프로젝트 소개

### [🎉Vercel 배포 사이트](https://eunoh-type-countries.vercel.app/)

<br />

### 🐈🐕 국가를 선택해보세요~! 😻🐶

|   프로젝트명    |        최애 국가 선택하기         |
| :-------------: | :-------------------------------: |
|      분류       |        타입스크립트 스터디        |
|    개발 환경    |             React 18              |
| 사용 라이브러리 | react-router-dom, tailwind, axios |
|    개발 기간    |      2024.06.24 ~ 2024.06.28      |

<br />

[🌙 목차로 돌아가기](#cat2-목차)

<br />

---

<br />

## :house: 프로젝트 구조

```
📦src
 ┣ 📂api
 ┃ ┗ 📜api.ts
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂Layout
 ┃ ┃ ┗ 📜DefaultLayout.tsx
 ┃ ┣ 📜CountryCard.tsx
 ┃ ┣ 📜CountryCardSkeleton.tsx
 ┃ ┗ 📜CountryList.tsx
 ┣ 📂routes
 ┃ ┗ 📜router.tsx
 ┣ 📂types
 ┃ ┣ 📜country.types.ts
 ┃ ┣ 📜functions.types.ts
 ┃ ┗ 📜test.json
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

<br />

[🌙 목차로 돌아가기](#cat2-목차)

<br />

---

<br />

# :dango: 사용 기술 스택

![vite](https://img.shields.io/badge/vite-5.2.12-646CFF?style=for-the-badge&logo=vite&logoColor=white) \
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) \
![react](https://img.shields.io/badge/react-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white) \
![react-router-dom](https://img.shields.io/badge/react--router--dom-6.23.1-CA4245?style=for-the-badge&logo=react-router&logoColor=white) \
![React](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

<br />

[🌙 목차로 돌아가기](#cat2-목차)

<br />

---

<br />

# :tea: 기술적 고민과 트러블 슈팅

### 트러블 슈팅

1. API 레이어 타입 지정의 어려움:

    - API 레이어 타입 지정에 어려움이 있었습니다. 특히 Axios를 사용하여 API 호출 시, 반환되는 데이터의 타입을 지정하는 것이 어려웠습니다.
    - 제네릭과 axios 에서 제공하는 타입을 사용하여 해결하였습니다.

2. 응답 본문을 부분 배열화 하여 스크롤에 따라 보여주기:

    - 응답 본문을 부분 배열화 하여 보여주기 위해 사용자 스크롤 이벤트를 추가하였습니다.

<br />

[🌙 목차로 돌아가기](#cat2-목차)

<br />

---
