import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-text: black;
    --color-background: white;
    --color-primary: #006064;
    --color-contrast: #b8a242;
    --font-weight-light: 100;
    --font-weight-medium: 500;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
