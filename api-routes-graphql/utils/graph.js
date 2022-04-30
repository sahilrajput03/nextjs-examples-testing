import {gql} from 'apollo-server-micro'
import {PubSub} from 'apollo-server'

const pubsub = new PubSub()

export const typeDefs = gql`
	# Here you define types, and its called SCHEMA.
	type Query {
		user1: UserType
		user2: [UserType]
		user3: [UserType]!
		user4: [UserType!]
		user5: [UserType!]!
	}
	type Mutation {
		person1(name: String!, phone: Int!): PersonType
	}
	type Subscription {
		people: String
	}
	# :: Custom types below
	type UserType {
		name: String
	}
	type PersonType {
		id: Float!
		name: String!
		phone: Int!
	}
`

const person1 = (...params) => {
	const [parent, args, context, info] = params
	return {name: 'foo', phone: 123, id: Math.random()}
}

const user1 = (...params) => {
	const [parent, args, context, info] = params
	// :: What is params ..?
	// console.log(parent, args, context, info);
	pubsub.publish('PERSON_ADDED', {people: `yikes ${Math.random()}`})
	return {name: 'Nextjs1'}
}

const user2 = (...params) => {
	// return; // i.e., return null, #FINE.
	// return []; // #FINE.
	// return [null]; // #FINE.
	// return [{name: "Nextjs2"}, null]; // #FINE.
	return [{name: 'Nextjs2'}]
}

const user3 = (...params) => {
	// return []; // #FINE.
	// return [null]; // #FINE.
	// return [{name: "Nextjs3"}, null]; // #FINE.
	// return [{name: "Nextjs3"}];
}

const user4 = (...params) => {
	// return []; // #FINE.
	return [{name: 'Nextjs4'}, null] // #FINE.
	// return [null]; // #error: "message": "Cannot return null for non-nullable field Query.user4.".
	// return [{name: "Nextjs4"}]; // #error: "message": "Cannot return null for non-nullable field Query.user4.",
}

const user5 = (...params) => {
	// return []; // #FINE.
	// return [null]; // #error: "message": "Cannot return null for non-nullable field Query.user5.",
	// return [{name: "Nextjs5"}, null]; // #error: "message": "Cannot return null for non-nullable field Query.user5.",
	return [{name: 'Nextjs5'}] // #FINE.
}

// Here you define setup for data resolving., and its
// called RESOLVERS.
export const resolvers = {
	Query: {
		user1,
		user2,
		user3,
		user4,
		user5,
	},
	Mutation: {
		person1,
	},
	Subscription: {
		people: {
			subscribe: () => pubsub.asyncIterator(['PERSON_ADDED']),
		},
	},
}
