// next.config.js
const withCSS = require("@zeit/next-css");
// * withCSS enable you to use import css files directly in components without any module level shit thing, although you can always use globlal css files in _app.js if you don't want to use withCSS configuration.

module.exports = withCSS({
  /* my next config */
  headers, //OK TESTED.
});

async function headers() {
  // This function enables cors, yikes!
  return [
    {
      // matching all API routes
      source: "/api/:path*",
      headers: [
        {key: "Access-Control-Allow-Credentials", value: "true"},
        {key: "Access-Control-Allow-Origin", value: "*"},
        {key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT"},
        {key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"},
      ],
    },
  ];
}
// module.exports = {headers};// For configuring cors only.

// *********************************
// TESTING CORS GUIDE:
// You must hard-refresh the browser tab(use any origin other than http://localhost:3000) to be able to see the strict origin error while doing below request in the console:

// fetch("http://localhost:3000/api/hello")
//   .then((res) => res.text())
//   .then((data) => console.log(data));
