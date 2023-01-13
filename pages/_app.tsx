import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }: AppProps) {

  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className='w-screen h-screen bg-black text-orange-500 text-lg font-[Libre Franklin] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[rgba(1,1,1,0.8)] scrollbar-track-[rgba(1,1,1,0.8)]'>
      <Navbar showButtons={showButtons} setShowButtons={setShowButtons}/>
      {/* <div className='sm:h-[3.5vh] lg:h-[5vh]' /> */}
      <Component {...pageProps} />
    </div>
  )
}
