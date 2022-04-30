export default function handler(req, res) {
  console.log("....index");
  res.status(200).json({ name: "John Doe" });
}
