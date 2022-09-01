import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import FourOhFourBody from '../components/FourOhFourBody'
import Navbar from '../components/Navbar'

const FourOhFour: NextPage = () => {

    const result = Navbar(FourOhFourBody());
    return (
        // scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full
        // <div className='h-screen bg-black scrollbar scrollbar-thumb-gray-800 scrollbar-track-orange-700 overflow-y-scroll hover:scrollbar-thumb-orange-600'>
        // <div className='bg-black scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-orange-700 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
        <div className='bg-black scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-orange-800 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
            <Head><title>404</title></Head>
            {result}
        </div>
    )
}

export default FourOhFour