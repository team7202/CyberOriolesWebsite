import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import HomeBody from '../components/HomeBody'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {

  const result = Navbar(HomeBody());
  return (
    <div className='h-screen bg-gray-900 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-orange-800 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
      <Head>
        <title>Home</title>
      </Head>
      {result}
    </div>
  )
}

export default Home