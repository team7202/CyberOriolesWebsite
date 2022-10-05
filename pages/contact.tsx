import type { NextPage } from 'next'

const Contact: NextPage = (props: any) => {
  return (
    <div className='flex flex-col h-[85%] gap-[1vh] items-center justify-center'>
      {/* Coach Cards */}
      <div className='flex justify-center'>
        <div className='duration-500 hover:duration-500 w-[30vw] h-[30vh] bg-neutral-800 text-white hover:bg-orange-600 hover:text-black hover:drop-shadow-lg rounded-lg'>
          <span className='flex justify-center text-2xl border-b border-b-stone-900 rounded-md'>Coach</span>
          <div className='flex flex-col gap-[1vh] justify-center items-center h-[70%]'>
            <span className='flex'>
              <span className='border-r rounded-sm pr-[1vw] mr-[1vw]'>Name</span>
              <span>Kari Brown</span>
            </span>
            <span className='flex'>
              <span className='border-r rounded-sm pr-[1vw] mr-[1vw]'>Email</span>
              <span>To Be Announced</span>
            </span>
            <span className='flex'>
              <span className='border-r rounded-sm pr-[1vw] mr-[1vw]'>Phone Number</span>
              <span>To Be Announced</span>
            </span>
          </div>
        </div>
      </div>

      {/* Mentor Cards */}
      <div className='flex justify-center gap-[1vw]'>
        <div className='duration-500 hover:duration-500 w-[30vw] h-[30vh] bg-neutral-800 text-white hover:bg-orange-600 hover:text-black rounded-lg'>
          <span className='flex justify-center text-2xl border-b border-b-stone-900 rounded-md'>Mentor</span>
          <div className='flex flex-col gap-[1vh] justify-center items-center h-[70%]'>
            <span className='flex'>
              <span className='border-r rounded-sm pr-[1vw] mr-[1vw]'>Name</span>
              <span>Matt</span>
            </span>
            <span className='flex'>
              <span className='border-r rounded-sm pr-[1vw] mr-[1vw]'>Email</span>
              <span>To Be Announced</span>
            </span>
            <span className='flex'>
              <span className='border-r rounded-sm pr-[1vw] mr-[1vw]'>Phone Number</span>
              <span>To Be Announced</span>
            </span>
          </div>
        </div>

        <div className='duration-500 hover:duration-500 w-[30vw] h-[30vh] bg-neutral-800 text-white hover:bg-orange-600 hover:text-black rounded-lg'>
          <span className='flex justify-center text-2xl border-b border-b-stone-900 rounded-md'>Mentor</span>
          <div className='flex flex-col gap-[1vh] justify-center items-center h-[70%]'>
            <span className='flex'>
              <span className='border-r rounded-sm pr-[1vw] mr-[1vw]'>Name</span>
              <span>Aiden</span>
            </span>
            <span className='flex'>
              <span className='border-r rounded-sm pr-[1vw] mr-[1vw]'>Email</span>
              <span>To Be Announced</span>
            </span>
            <span className='flex'>
              <span className='border-r rounded-sm pr-[1vw] mr-[1vw]'>Phone Number</span>
              <span>To Be Announced</span>
            </span>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-[1vw]'>
        <div className='duration-500 hover:duration-500 w-[30vw] h-[30vh] bg-neutral-800 text-white hover:bg-orange-600 hover:text-black rounded-lg'>
          <span className='flex justify-center text-2xl border-b border-b-stone-900 rounded-md'>Team</span>
          <div className='flex flex-col gap-[1vh] justify-center items-center h-[70%]'>
            <span className='flex'>
              <span className='border-r rounded-sm pr-[1vw] mr-[1vw]'>Email</span>
              <span className='hover:cursor-pointer hover:underline' onClick={() => window.open("https://mail.google.com/mail/u/0/?fs=1&to=frc2022team7202@gmail.com&su=Subject&body=Hello,%20Cyber Orioles%0a%0a-%0a%0aFrom:%20&tf=cm")}>frc2022team7202@gmail.com</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
