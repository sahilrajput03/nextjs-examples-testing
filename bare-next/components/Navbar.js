import Link from 'next/link'

const Navbar = () => (
	<nav>
		<Link href='/'>
			<a>Home</a>
		</Link>
		<Link href='/about'>
			<a>About</a>
		</Link>
		<style jsx>{`
			a {
				margin: 20px;
			}
		`}</style>
	</nav>
)

export default Navbar
