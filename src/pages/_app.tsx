import { GlobalStyles } from '../styles/GlobalStyles';

import { AppProps } from 'next/app';

import { Header } from '../components/Header';
import { CartProvider } from '../hooks/useCart';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ToastContainer />
      <GlobalStyles />
      
      <Header />
      <Component {...pageProps} />
    </CartProvider>
  );
}
