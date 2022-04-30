import {usePersonQuery} from '../lib/reqs/viewer.graphql'
// * Quite sophisticated simple with Static data fetch.
const Comp5 = () => {
	const {person} = usePersonQuery().data! // This works for statically provided data by `getStaticProps` only.
	// NOTE^^ this throws `Internal Server Error` if you don't provide data statically via getStaticProps to the apollo client!!
	return (
		<div>
			I am comp5
			<br />
			<br />
			hands: {person.hands}
			<br />
			legs: {person.legs} <br />
		</div>
	)
}

export default Comp5
