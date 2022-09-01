import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomeBody from '../components/HomeBody'
import MeidaBody from '../components/MediaBody'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const result = Navbar(MeidaBody());
  return (
    <div className='h-screen bg-black scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-orange-800 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
      <Head><title>Media</title></Head>
      {result}
    </div>
  )
}

export default Home