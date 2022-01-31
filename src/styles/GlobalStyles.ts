import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --gray-50: #f8f8f8;
    --gray-300: #dfdfdf;
    --gray-500: #9c9c9c;
    --gray-600: #777777;
    --gray-800: #2e2e2e;

    --purple-100: #a31c76;
    --purple-500: #571881;

    --green-500: #18581b;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: var(--gray-50);
  }
`;
