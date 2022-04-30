// * This is basic graphql server with subscription's enabled(Cross-origin policy).
// * This version of code is simply inspired from graphql2 and graphql3. Yikes!
import {ApolloServer} from 'apollo-server-micro'
import {resolvers, typeDefs} from '../../utils/graph'
import Cors from 'micro-cors'

//note: this log occurs on every hot-reload
console.log('CREATING APOLLOSERVER ')

const server_path = '/api/graphql4'

const cors = Cors()

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	context: async ({req, connection}) => {
		if (connection) {
			// check connection for metadata
			return connection.context
		}
		// get the user from the request
		return {
			user: req.user,
			useragent: req.useragent,
		}
	},
	subscriptions: {
		path: '/api/graphqlSubscriptions',
		keepAlive: 9000,
		onConnect: () => console.log('connected'),
		onDisconnect: () => console.log('disconnected'),
	},
	playground: {
		subscriptionEndpoint: '/api/graphqlSubscriptions',

		settings: {
			'request.credentials': 'same-origin',
		},
	},
})

const graphqCorslWithSubscriptionHandler = (req, res) => {
	const oldOne = res.socket.server.apolloServer
	if (
		//we need compare old apolloServer with newOne, becasue after hot-reload are not equals
		oldOne &&
		oldOne !== apolloServer
	) {
		console.warn('FIXING HOT RELOAD !!!!!!!!!!!!!!! ')
		delete res.socket.server.apolloServer
	}

	if (!res.socket.server.apolloServer) {
		console.log(`* apolloServer (re)initialization *`)

		apolloServer.installSubscriptionHandlers(res.socket.server)
		res.socket.server.apolloServer = apolloServer
		const handler = apolloServer.createHandler({path: server_path})
		res.socket.server.apolloServerHandler = handler
		//clients losts old connections, but clients are able to reconnect
		oldOne?.stop()
	}

	return res.socket.server.apolloServerHandler(req, res)
}

export default cors((req, res) => {
	if (req.method === 'OPTIONS') {
		res.end()
		return false
	}

	return graphqCorslWithSubscriptionHandler(req, res)
})

// export default graphqCorslWithSubscriptionHandler // *I am interested in cors enabled for this instace.

export const config = {
	api: {
		bodyParser: false,
	},
}

// * Self notes:
// Source: (originall in typescript):  https://stackoverflow.com/a/66268643
// ^^ for making subscriptions work.
