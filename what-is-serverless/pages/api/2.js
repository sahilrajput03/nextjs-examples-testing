import {number} from "../../utils/number";
// * This doesn't work ??
export default function handler(req, res) {
  number = number + 1;
  // ^^ error: `ReferenceError: number is not defined`
  res.status(200).json(number);
}

// QUESTION: Is this beacuase it doesn't work with principles of serverless principles.
