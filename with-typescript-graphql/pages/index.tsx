/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link'
import {useState} from 'react'
import Host from '../components/Host'
import {
	ViewerQuery,
	// ^^ this is real interesting, as it is the type i.e., the type of `data` of the query, yikes!
	useViewerQuery,
	useUpdateNameMutation,
	PersonDocument,
	ViewerDocument,
	ViewerQueryResult,
} from '../lib/reqs/viewer.graphql'
import {initializeApollo} from '../lib/apollo'

interface Props {
	initialApolloState: any
	client: any
}

const IndexMain = (_props: Props) => {
	// for _props:=> src: https://github.com/microsoft/TypeScript/issues/31357#issuecomment-492444700
	// console.log('initialApolloState', _props.initialApolloState)
	// console.log(_p)
	return (
		<div>
			Welcome to testing area.
			<Host />
			<Index />
		</div>
	)
}

const Index = () => {
	const {viewer} = useViewerQuery().data!
	const [newName, setNewName] = useState('')
	const [updateNameMutation] = useUpdateNameMutation()

	const onChangeName = () => {
		updateNameMutation({
			variables: {
				name: newName,
				// car: "alto"// this throws error coz our mutation variables are typed, yikes!
			},
			//Follow apollo suggestion to update cache
			//https://www.apollographql.com/docs/angular/features/cache-updates/#update
			update: (cache, mutationResult) => {
				const {data} = mutationResult
				if (!data) return // Cancel updating name in cache if no data is returned.
				// Read the data from our cache for this query.
				const {viewer} = cache.readQuery({query: ViewerDocument}) as ViewerQuery // * works MAGICALLY 🤸︎🤸︎ well.
				const newViewer = {...viewer}
				newViewer.name = data.updateName.name
				// Write our data back to the cache.
				cache.writeQuery({query: ViewerDocument, data: {viewer: newViewer}})
				// * my debuggin below...
				const {viewer: viewer2} = cache.readQuery({
					query: ViewerDocument,
				}) as ViewerQuery // * works MAGICALLY 🤸︎🤸︎ well.
				console.log('just wrote to cache:', viewer2)
			},
		})
	}

	// newViewer.name = data.updateName.name
	return (
		<div>
			<br />
			You're signed in as {viewer.name} and you're {viewer.status}. Go to the{' '}
			<Link href='/about'>
				<a>about</a>
			</Link>{' '}
			page.
			<div>
				<input
					type='text'
					placeholder='your new name...'
					onChange={(e) => setNewName(e.target.value)}
				/>
				<input type='button' value='change' onClick={onChangeName} />
			</div>
		</div>
	)
}

export async function getStaticProps() {
	const apolloClient = initializeApollo()
	// apolloClient. //~sahil
	await apolloClient.query({
		query: ViewerDocument,
	}) // Yikes, these "static query on server" make the hooks fetch data from the cache only!!

	await apolloClient.query({
		query: PersonDocument,
	}) // Yikes, these "static query on server" make the hooks fetch data from the cache only!!

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			// I dont' want apolloclient instance though, as i can access data anytime using simle query and mutation hooks, yo!!
			// client: apolloClient, I can't pass client to frontend as this throws error like below:
			// ***
			// Error serializing `.client` returned from `getStaticProps` in "/".
			// Reason: `object` ("[object Object]") cannot be serialized as JSON. Please only return JSON serializable data types.
			// ***
		},
	}
}

export default IndexMain
