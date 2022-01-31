import { GlobalStyles } from '../styles/GlobalStyles';

import { AppProps } from 'next/app';

import { Header } from '../components/Header';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
