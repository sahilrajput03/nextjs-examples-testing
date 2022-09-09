// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log("sahil - my coookies:::", req.cookies["my-http-only-secret"]);
  console.log(
    "sahil - my coookies without dash:::",
    req.cookies.myHttpOnlySecret
  );

  res.status(200).json({ name: "John Doe" });
}
