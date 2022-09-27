/**
 * @jest-environment node
 */
// MOTIVATION, INSPIRATION: https://www.paigeniedringhaus.com/blog/how-to-unit-test-next-js-api-routes-with-typescript
import {createMocks, createRequest, createResponse} from 'node-mocks-http'
import type {NextApiRequest, NextApiResponse} from 'next'
import dotenv from 'dotenv'
// Loading `environment` file before loading any api is important coz otherwise MONGODB_URI not found error is thrown
dotenv.config({path: '.env.test.local'})
import petApi from '../pages/api/pets'
import {expect} from 'expect'

// @ts-ignore
const {connectToDb, describe, test} = global

// LEARN: Database caching is just not required for the  coz the module manages caching in itself ~Sahil
// connectToDb(async () => {
// 	await dbConnect()
// })

type optionsT = {
	cb?: (req: NextApiRequest) => void
	method?: 'GET' | 'PUT' | 'PATCH' | 'POST'
}
const petApiCaller = async (options: optionsT) => {
	let {cb, method} = options || {}
	const {req, res}: any = createMocks({method: method || 'GET'})
	cb && (await cb(req)) // Just making sure that in future one may need to so some async tasks in the cb function as well  ~Sahil
	await petApi(req, res)

	return {req, res}
}

const petDetails = {
	name: 'kittyoi',
	owner_name: 'sahil',
	species: 'german',
	age: 23,
	poddy_trained: true,
	diet: ['1 roti', '3 almonds'],
	image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBX6OIA69w4mGtEkIqqd3htZL05QjcEGqPrJutfiXW&s',
	likes: ['ball games', 'bathing'],
	dislikes: ['licking', 'loud'],
}

describe('/api/pet', () => {
	test('drop database', async () => {
		const dropDbOutput = await petApiCaller({method: 'PATCH'})
		expect(dropDbOutput.res._getJSONData().success).toBe(true)
	})

	test('create pet', async () => {
		const {req, res} = await petApiCaller({
			method: 'POST',
			cb: (req) => {
				req.body = petDetails
			},
		})

		const resBody = res._getJSONData()
		// console.log(resBody)
		expect(resBody.success).toBeTruthy()
		expect(resBody.data).toMatchObject(petDetails)
	})
})

// PASSING `HEADERS`, `QUERY`, `PAYLOAD BODY` TO THE REQUEST
// const {req, res} = await petApiCaller((req) => {
// 	req.headers = {
// 		'Content-Type': 'application/json',
// 		'X-SESSION-TOKEN': authToken,
// 	}
// 	req.query = {gatewayID: 'some_value'}
// 	req.body = payload
// })
