// @ts-nocheck
/**
 * @jest-environment node
 */
const {createMocks} = require('node-mocks-http')
const helloApi = require('../pages/api/hello')
const {expect} = require('expect')

connectToDb(async () => {})

const helloApiCaller = async (cb) => {
	const {req, res} = createMocks({method: 'GET'})
	await cb(req) // Just making sure that in future one may need to so some async tasks in here as well  ~Sahil
	await helloApi(req, res)
	return {req, res}
}

describe('/api/hello', () => {
	const authToken = process.env.AUTH_TOKEN

	test('should return a successful response from Notehub', async () => {
		const payload = {
			name: 'Sahil',
			age: 13,
		}

		const {req, res} = await helloApiCaller((req) => {
			req.headers = {
				'Content-Type': 'application/json',
				'X-SESSION-TOKEN': authToken,
			}
			req.query = {gatewayID: 'some_value'}
			req.body = payload
		})

		const responseBody = res._getJSONData()
		expect(responseBody.name).toBe(payload.name)
		expect(responseBody.age).toBe(payload.age)
		//
		expect(res.statusCode).toBe(200)
		expect(res.getHeaders()).toEqual({'content-type': 'application/json'})
		expect(res.statusMessage).toEqual('OK')
	})
})
