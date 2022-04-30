// * This is basic graphql server with Strict same-origin policy.
import {ApolloServer, gql} from 'apollo-server-micro'
import {resolvers, typeDefs} from '../../utils/graph'

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
})

export const config = {
	api: {
		bodyParser: false,
	},
}
// const server_path = '/api/graphql1' // This is nextjs's way of passing static path to the apollo server handler.
// export default apolloServer.createHandler({path: server_path})
// ^^ this was default though.
// ********************* My dynamic way below!
export default (req, res) => {
	const server_path = req.url
	// console.log(req.url)
	return apolloServer.createHandler({path: server_path})(req, res)
}
