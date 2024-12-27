// pages/_app.jsx
import '../styles/globals.scss';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Theme from '../components/Theme/Theme.utils';
import Template from '../template';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Theme />
      <Template>

        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
          <Footer />

      </Template>

    </>
  );
}

export default MyApp;
