import "../styles/globals.css";
import Naviation from "../components/Navigation";

function MyApp({Component, pageProps}) {
  return (
    <>
      <Naviation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
