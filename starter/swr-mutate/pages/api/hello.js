// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {log} from "./helpers";

const data = {name: "Sahil Rajput"};

export default async (req, res) => {
  log({body: req.body});
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // if (req.body === "") return res.status(200).json({name: "Rohan Gupta"});

  res.status(200).json({name: "Sahil Rajput", number: Math.floor(Math.random() * 1000), ...req.body});
};
