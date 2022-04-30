// * This is basic graphql server with subscription's enabled(Strict-origin policy).
import {ApolloServer} from 'apollo-server-micro'
import {resolvers, typeDefs} from '../../utils/graph'

//note: this log occurs on every hot-reload
console.log('CREATING APOLLOSERVER ')

const server_path = '/api/graphql2'

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

const graphqlWithSubscriptionHandler = (req, res) => {
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

export default graphqlWithSubscriptionHandler

export const config = {
	api: {
		bodyParser: false,
	},
}

// * Self notes:
// Source: (originall in typescript):  https://stackoverflow.com/a/66268643
// ^^ for making subscriptions work.
