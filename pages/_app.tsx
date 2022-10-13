import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ConnectionProvider } from '../src/connectionProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConnectionProvider>
      <Component {...pageProps} />
    </ConnectionProvider>
  );
}

export default MyApp;
