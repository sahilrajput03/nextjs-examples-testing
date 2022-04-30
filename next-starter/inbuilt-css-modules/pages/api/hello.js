// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {log} from "../../utils/log";

export default (req, res) => {
  log({body: req.body});

  res.status(200).json({name: "Sahil Rajput", ...req.body});
};
