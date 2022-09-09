import { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  //? This comopnent renders on client only for each route and data fetched here would be fetched
  //? client side only so fetching data here is of NO USE AT ALL.

  const [state, setState] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setState(state + 1);
    }, 1000);
  });

  return <Component {...pageProps} isSecured={false} count={state} />; // ? lateer..
  // return <Component {...pageProps} />;
}

export default MyApp;
