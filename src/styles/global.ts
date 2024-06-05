"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Pretendard', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Pretendard (본문)
  @font-face {
    font-family: 'Pretendard';
    src: local('PretendardGOV-Regular'),
         url('/static/PretendardGOV/PretendardGOV-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('PretendardGOV-Bold'),
         url('/static/PretendardGOV/PretendardGOV-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('PretendardGOV-Light'),
         url('/static/PretendardGOV/PretendardGOV-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('PretendardGOV-Medium'),
         url('/static/PretendardGOV/PretendardGOV-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('PretendardGOV-SemiBold'),
         url('/static/PretendardGOV/PretendardGOV-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  // Righteous (로고)
  @font-face {
    font-family: 'Righteous';
    src: local('Righteous-Regular'),
         url('/static/Righteous/Righteous-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  .custom-style {
    color: var(--Color, #5B392E);
    font-family: 'Righteous', sans-serif;
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export default GlobalStyle;
