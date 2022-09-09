const cookie = require("cookie");

export default function handler(req, res) {
  console.log("tokens are ", req.body.tokens);
  let body = req.body;
  res.setHeader(
    "Set-Cookie",
    // cookie.serialize(body.key, body.value, {
    cookie.serialize("myHttpOnlySecret", "super-secret", {
      httpOnly: true,
      //   secure: process.env.NODE_ENV != "development",
      secure: true,
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "strict",
      path: "/",
    })
  );
  res.send("saved");
}
