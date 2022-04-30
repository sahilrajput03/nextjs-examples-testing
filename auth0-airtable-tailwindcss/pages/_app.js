import 'tailwindcss/tailwind.css'
import {UserProvider} from '@auth0/nextjs-auth0'

function MyApp({Component, pageProps}) {
  return (
    <div className='container mx-auto my-10 max-w-xl'>
      <UserProvider user={pageProps.user}>
        <Component {...pageProps} />
      </UserProvider>
    </div>
  )
}

export default MyApp
