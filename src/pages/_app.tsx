import { GlobalStyles } from '../styles/GlobalStyles';

import { AppProps } from 'next/app';

import { Header } from '../components/Header';
import { CartProvider } from '../hooks/useCart';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </CartProvider>
  );
}
