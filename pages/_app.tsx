import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div className="h-screen w-screen bg-stone-900">
      <div className='w-[2vw] h-screen bg-neutral-800 rounded-r-full absolute' />
      <div className='ml-[2vw] w-[96vw] h-screen bg-stone-900 absolute'>
        <div className='h-[10vh]' />
        <Component {...pageProps} />
      </div>
      <div className='ml-[98vw] w-[2vw] h-screen bg-neutral-800 rounded-l-full absolute' />
      <Navbar />
    </div>
  )
}

export default MyApp