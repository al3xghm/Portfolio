// pages/_app.jsx
import '../styles/globals.scss';
import Navbar from '../components/Navbar/Navbar';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className="noise">
   </div>

      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
