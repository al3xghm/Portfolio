// pages/_app.jsx
import '../styles/globals.scss';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Theme from '../components/Theme/Theme.utils';


function MyApp({ Component, pageProps }) {
  return (
    <>
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
