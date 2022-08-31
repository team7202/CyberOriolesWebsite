import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomeBody from '../components/HomeBody'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const result = Navbar(HomeBody());
  return (
    <div className='h-screen bg-black'>
      <Head><title>Home</title></Head>
      {result}
    </div>
  )
}

export default Home