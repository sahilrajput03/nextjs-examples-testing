import "../styles/globals.css";
// Global imports are the coolest thing as it mimics the behaviour of old-school, and i love old school.
// Also, you can add multiple global sheets, yikes!
function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />;
}

export default MyApp;
