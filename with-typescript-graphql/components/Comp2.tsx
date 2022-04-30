import {usePersonQuery} from '../lib/reqs/viewer.graphql'
// * Quite more simple.
const Comp2 = () => {
	const person = usePersonQuery().data?.person

	return (
		<div>
			I am comp2
			<br />
			<b>hands</b>: {person?.hands} <br />
			<b>legs</b>: {person?.legs} <br />
		</div>
	)
}

export default Comp2
