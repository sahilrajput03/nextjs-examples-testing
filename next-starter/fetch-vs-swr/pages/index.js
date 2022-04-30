import {useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'

let {log} = console
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function HomePage() {
  return (
    <>
      <UsingFetch />
      <br />
      <UsingSwr />
    </>
  )
}

function UsingSwr() {
  // const {data, error} = useSWR('/api/hello', fetcher)
  // Passing fetcher is optional, as by default  ^^ fetcher is defined by swr in it.
  const {data, error} = useSWR('/api/hello') // This works cool...
  log(data)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>Hello {data.name}!(from swr)</div>
}

function UsingFetch() {
  const [state, setState] = useState()
  useEffect(() => {
    const fun = async () => {
      const json = await (await fetch('/api/hello')).json()
      // await new Promise((resolve) => setTimeout(resolve, 2000))
      setState(json)
    }
    fun()
  }, [])

  console.log()

  if (!state) return 'Loading...'

  return (
    <div className={styles.container}>
      Hello, {state.name} (from builit fetch library in nextjs.)
    </div>
  )
}
