import Head from 'next/head'

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>CyberOrioles | Announcements</title>
        <meta name="description" content="Official Announcements from the 7202 CyberOrioles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-screen h-screen flex flex-col justify-center items-center'>
        <div className='mt-[5vh] sm:w-[90vmin] sm:text-[16px] lg:text-[24px] lg:w-[90vw] h-[85vh] bg-[rgba(16,16,16,0.5)] rounded-lg overflow-y-auto hover:bg-[rgba(16,16,16,0.9)] duration-1000'>
          {props.announcements.sort(function (a: any, b: any) { return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() }).map((announcement: any, index: number) => {
            return (
              <div key={index}>
                <details className='ml-[1vmin] mt-[1vmin] sm:text-[2.5vmin]'>
                  <summary className='cursor-pointer'>{announcement.title}</summary>
                  <p className='ml-[2.5vmin]'>{announcement.description}</p>
                </details>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}


export async function getServerSideProps() {
  const announcements = await fetch("https://www.cyberorioles.com/api/announcements");
  const announcementData = await announcements.json();
  return {
    props: {
      announcements: announcementData
    }
  }
}
