// import {usePersonQuery} from '../lib/reqs/viewer.graphql'
import {usePersonQuery as usePersonQuery2} from '../lib/reqs/other.graphql' // Using duplicate query from duplicate reqs file.
// * Usage of duplicate query as we are compelled to use same operation name as query name in `.graphql` files.
const Comp3 = () => {
	// const PersonQuery = usePersonQuery()
	const PersonQuery2 = usePersonQuery2()

	// console.log(PersonQuery2.data?.person?.hands)
	// ^^ This throws nice ts error, coz in our `request query`, we haven't defined hands property, yikes!!
	return (
		<div>
			I am comp3
			<br />
			<b>Loading status</b>: {PersonQuery2.loading + ''}
			<br />
			legs: {PersonQuery2.data?.person.legs} <br />
		</div>
	)
}

export default Comp3
