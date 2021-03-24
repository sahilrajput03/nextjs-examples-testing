import {serialize} from "cookie";

/**
 * This sets `cookie` on `res` object
 */
const cookie = (res, name, value, options = {}) => {
  const stringValue = typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);

  if ("maxAge" in options) {
    options.expires = new Date(Date.now() + options.maxAge);
    options.maxAge /= 1000;
  }

  // bullshit testing ~sahil, didn't work to read cookie in browser anyhow :(
  // options = {
  //   httpOnly: false, // default value is true
  //   // httpOnly: false, // default value is true
  //   // setting it false makes client size js to be able to access it.
  //   // maxAge: 60 * 60 * 24 * 7, // 1 week
  //   sameSite: "none",
  // };

  console.log(options);
  res.setHeader("Set-Cookie", serialize(name, String(stringValue), options));
};

/**
 * Adds `cookie` function on `res.cookie` to set cookies for response
 */
const cookies = (handler) => (req, res) => {
  res.cookie = (name, value, options) => cookie(res, name, value, options);

  return handler(req, res);
};

export default cookies;
