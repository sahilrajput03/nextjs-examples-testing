import {QueryResolvers, MutationResolvers} from './type-defs.graphqls'
import {ResolverContext} from './apollo'

const userProfile = {
	id: String(1),
	name: 'John Smith',
	status: 'cached',
}

const Query: Required<QueryResolvers<ResolverContext>> = {
	viewer(_parent, _args, _context, _info) {
		return userProfile
	},
	person() {
		return {
			hands: 5,
			legs: 10,
		}
	},
	viewer3() {
		return 123
	},
	viewer4() {
		return 123
	},
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
	updateName(_parent, _args, _context, _info) {
		userProfile.name = _args.name
		return userProfile
	},
}

export default {Query, Mutation}
