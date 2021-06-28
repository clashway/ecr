import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lash App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="//fonts.googleapis.com/css?family=Raleway:100,200,300,400,600,700,800,400italic" rel="stylesheet" type="text/css"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
