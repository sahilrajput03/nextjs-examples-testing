import Head from 'next/head'
import Navbar from 'components/Navbar'
import {useUser} from '@auth0/nextjs-auth0'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Authenticated TODO App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main>
        <h1>Todo App</h1>
        <App />
      </main>
    </div>
  )
}

function App() {
  const {user, error, isLoading} = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href='/api/auth/logout'>Logout</a>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    )
  }
  return <a href='/api/auth/login'>Login</a>
}
