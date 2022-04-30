// * This is basic graphql server with Cross-origin policy.
import {ApolloServer} from 'apollo-server-micro'
import {resolvers, typeDefs} from '../../utils/graph'
import Cors from 'micro-cors'

const server_path = '/api/graphql3'

const cors = Cors()

const server = new ApolloServer({typeDefs, resolvers})

export default cors((req, res) => {
	if (req.method === 'OPTIONS') {
		res.end()
		return false
	}

	return server.createHandler({
		path: server_path,
	})(req, res)
})

export const config = {
	api: {
		bodyParser: false,
	},
}

// src: https://github.com/apollographql/apollo-server/issues/4779#issuecomment-752822446
