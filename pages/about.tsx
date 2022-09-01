import { NextPage } from "next"
import Head from "next/head"
import AboutBody from "../components/AboutBody"
import Navbar from "../components/Navbar"

const About: NextPage = () => {
    const result = Navbar(AboutBody());
    return (
      <div className='h-screen bg-gray-900 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-orange-800 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
        <Head><title>About</title></Head>
        {result}
      </div>
    )
  }
  
  export default About