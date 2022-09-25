import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import cookie from "js-cookie"

function MyApp({ Component, pageProps }: AppProps) {

  if(cookie.get("session") == undefined) cookie.set("session", "none", {
    expires: 3.154e+7
  });

  const props = {
    session: "none",
    data: getData(),
  }

  return (
    <div className='h-screen absolute scrollbar-thin scrollbar-thumb-orange-400 hover:scrollbar-thumb-orange-500 active:scrollbar-thumb-orange-600 scrollbar-thumb-rounded-full scrollbar-track-black scrollbar-track-rounded-full cursor-default bg-stone-900 font-[poppins]' id="news-root">
      <Head>
          <title>CyberOrioles</title>
          <meta name="description" content="A Website for the 7202 Cyber Orioles Robotics Team" />
        </Head>
      <div className="h-screen w-screen">
        <div className='w-[2vw] h-screen bg-neutral-800 rounded-r-full absolute' />
        <div className='ml-[2vw] w-[96vw] h-screen bg-stone-900 absolute'>
          <div className='h-[10vh]' />
          <Component { ...pageProps} />
        </div>
        <div className='ml-[98vw] w-[2vw] h-screen bg-neutral-800 rounded-l-full absolute' />
        <Navbar />
      </div>
    </div>
  )
}

export async function getData() {
  return "test";
}

export default MyApp