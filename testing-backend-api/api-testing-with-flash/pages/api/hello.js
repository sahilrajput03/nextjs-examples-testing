// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

module.exports = function handler(req, res) {
	res.status(200).json({...req.body, date: new Date()})
}
