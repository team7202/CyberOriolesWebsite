import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/nav/Navbar'
import Head from 'next/head'
import { NextComponentType, NextPageContext } from 'next'
import Constants from '../scripts/Constants'
import { useState } from 'react'
import ImageFullscreen from '../components/media/ImageFullscreen'

interface Props { }

function MyApp({ Component, pageProps }: { Component: NextComponentType<NextPageContext, any, any>, pageProps: Props }) {

  return (
      <div className='h-screen absolute cursor-default bg-stone-900 font-[poppins] scrollbar-thin scrollbar-thumb-orange-400 hover:scrollbar-thumb-orange-500 active:scrollbar-thumb-orange-600 scrollbar-thumb-rounded-full scrollbar-track-black scrollbar-track-rounded-full' id='root'>
        <Head>
          <title>CyberOrioles</title>
          <meta name="description" content="A Website for the 7202 Cyber Orioles Robotics Team" />
        </Head>
        <div className="h-screen w-screen">
          <div className='w-[2vw] h-screen bg-neutral-800 rounded-r-full fixed' />
          <div className='ml-[2vw] w-[96vw] h-screen bg-stone-900 absolute'>
            <div className='h-[10vh]' />
            <Component {...pageProps} />
          </div>
          <div className='ml-[98vw] w-[2vw] h-screen bg-neutral-800 rounded-l-full fixed' />
          <Navbar />
        </div>
      </div>
  )
}

export default MyApp