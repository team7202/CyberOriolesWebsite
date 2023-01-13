import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>CyberOrioles | Home</title>
        <meta name="description" content="Official of site of the 7202 CyberOrioles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-screen h-screen flex flex-col justify-center items-center'>
        <div className='sm:w-[75vmin] lg:w-[50vw] h-[25vh] bg-[rgba(16,16,16,0.5)] rounded-lg flex flex-col justify-center items-center hover:bg-[rgba(16,16,16,0.9)] duration-1000'>
          <h1 className='text-[2.5vh] text-center'>Welcome to the offical website of the CyberOrioles Robotics team!</h1>
          <p className='mt-[2vh] text-[2vh]'>Let us introduce ourselves!</p>
          <p className='text-[2vh] text-center'>We are the CyberOrioles, a robotics team based in Morrice Michigan!</p>
        </div>
      </main>
    </>
  )
}
