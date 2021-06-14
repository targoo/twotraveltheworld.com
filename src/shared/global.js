import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-text: black;
    --color-background: white;
    --color-primary: #006064;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
