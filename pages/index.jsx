import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Blog | Home</title>
    </Head>
    <div>
      <h3>Home</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum hic facere officia sed debitis, consectetur, doloribus corporis veritatis ratione sapiente porro fugiat. Fuga non molestiae officia eius eos quis magnam.</p>
      <Link href="/members">
        <button type="button">All Members</button>
      </Link>
      <Link href="/comments">
        <button type="button">View Comments</button>
      </Link>
    </div>
    </>
  )
}
