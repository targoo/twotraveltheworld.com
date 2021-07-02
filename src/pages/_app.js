import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { GlobalStyle } from '../shared/global';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC:300,400,700" media="all" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
