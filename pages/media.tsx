import Head from 'next/head'

export default function Home(props: any) {
    return (
        <>
            <Head>
                <title>CyberOrioles | Media</title>
                <meta name="description" content="Official Announcements from the 7202 CyberOrioles" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='w-screen h-screen flex flex-col justify-center items-center'>
                <div className='mt-[5vh] sm:w-[90vmin] sm:text-[16px] lg:text-[24px] lg:w-[90vw] sm:h-[50vmin] h-[85vh] bg-[rgba(16,16,16,0.5)] rounded-lg overflow-y-auto hover:bg-[rgba(16,16,16,0.9)] duration-1000'>
                    <iframe src="https://player.twitch.tv/?channel=firstupdatesnow&parent=www.cyberorioles.com&parent=cyberorioles.com&muted=false" className='border-2 border-neutral-900 rounded-md sm:w-[70vmin] lg:w-[70vw] sm:h-[50vmin] h-[85vh]' frameBorder="0" allowFullScreen={true} scrolling="no" height="1920" width="1080"></iframe>
                </div>
            </main>
        </>
    )
}
