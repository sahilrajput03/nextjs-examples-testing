const ReactDOMServer = require("react-dom/server");
const react = require("react");

const A = react.createElement(
  "div",
  {
    car: "merces",
  },
  null
);

const MyElement = react.createElement(
  "div",
  {
    foo: "bar",
  },
  A
);

const data = ReactDOMServer.renderToStaticMarkup(MyElement);

console.log("my generated html:", data);
