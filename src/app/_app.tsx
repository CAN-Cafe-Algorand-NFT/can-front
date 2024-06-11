import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    console.log('Router initialized:', router);
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
