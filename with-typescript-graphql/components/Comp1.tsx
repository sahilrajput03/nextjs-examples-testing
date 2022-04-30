import {usePersonQuery} from '../lib/reqs/viewer.graphql'
// * Quite simple.
const Comp1 = () => {
	const PersonQuery = usePersonQuery().data!
	return (
		<div>
			I am comp1
			<br />
			hands: {PersonQuery?.person.hands} <br />
			legs: {PersonQuery?.person.legs} <br />
		</div>
	)
}

export default Comp1
