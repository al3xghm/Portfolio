// pages/_app.jsx
import '../styles/globals.scss';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Theme from '../components/Theme/Theme.utils';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
<link rel="manifest" href="/favicon/site.webmanifest"/>
</Head>
   <div className="noise"></div>
   <Theme />
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MyApp;
