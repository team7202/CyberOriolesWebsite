import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NewsBody from '../components/NewsBody'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const News: NextPage = () => {
  const result = Navbar(NewsBody());
  return (
    <div className='h-screen bg-black scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-orange-800 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
      <Head><title>News</title></Head>
      {result}
    </div>
  )
}

export default News