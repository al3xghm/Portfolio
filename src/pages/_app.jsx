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
      <div className="noise"></div>
      <Theme />
      <Template>

        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        <footer>
          <Footer />

        </footer>
      </Template>

    </>
  );
}

export default MyApp;
