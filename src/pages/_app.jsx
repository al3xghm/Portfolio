// pages/_app.jsx
import '../styles/globals.scss';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
   <div className="noise"></div>
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
