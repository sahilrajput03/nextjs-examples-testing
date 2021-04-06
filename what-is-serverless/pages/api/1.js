import {number} from '../../utils/number'
// * This works well though.
let acc = number

export default function handler(req, res) {
  acc = acc + 1
  res.status(200).json(acc)
}
