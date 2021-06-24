import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Lash App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
