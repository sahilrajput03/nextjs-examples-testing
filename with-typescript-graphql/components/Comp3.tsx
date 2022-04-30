import {usePersonQuery} from '../lib/reqs/viewer.graphql'
// * Quite sophisticated simple.
const Comp3 = () => {
	const PersonQuery = usePersonQuery()

	return (
		<div>
			I am comp3
			<br />
			<b>Loading status</b>: {PersonQuery.loading + ''}
			<br />
			hands: {PersonQuery.data?.person.hands}
			<br />
			legs: {PersonQuery.data?.person.legs} <br />
		</div>
	)
}

export default Comp3
