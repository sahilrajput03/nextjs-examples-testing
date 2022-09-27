import dbConnect from '../../../lib/dbConnect'
import Pet from '../../../models/Pet'

export default async function handler(req, res) {
	const {method} = req

	const db = await dbConnect()

	switch (method) {
		case 'GET':
			try {
				const pets = await Pet.find({}) /* find all the data in our database */
				res.status(200).json({success: true, data: pets})
			} catch (error) {
				res.status(400).json({success: false})
			}
			break
		case 'POST':
			try {
				const pet = await Pet.create(req.body) /* create a new model in the database */
				res.status(201).json({success: true, data: pet})
			} catch (error) {
				res.status(400).json({success: false})
			}
			break
		case 'PATCH':
			try {
				// DROP DATABASE
				await db.mongoose.connection.db.dropDatabase()
				/// await db.dropDatabase() // LEARN this didn't work ~Sahil
				res.status(201).json({success: true})
			} catch (error) {
				console.log(error)
				res.status(400).json({success: false})
			}
			break
		default:
			res.status(400).json({success: false})
			break
	}
}
