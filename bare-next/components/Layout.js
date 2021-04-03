import Navbar from './Navbar'
import Head from 'next/head'

export default ({children}) => (
	<>
		<Head>
			<meta name='name1...' content='content1...' />
		</Head>
		<Navbar />
		{children}
	</>
)
