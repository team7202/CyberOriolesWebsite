import { NextPage } from "next"
import Head from "next/head"
import AboutBody from "../components/AboutBody"
import Navbar from "../components/Navbar"

const About: NextPage = () => {
    const result = Navbar(AboutBody());
    return (
      <div className='h-screen bg-black'>
        <Head><title>About</title></Head>
        {result}
      </div>
    )
  }
  
  export default About