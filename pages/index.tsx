import type { NextPage } from 'next'

const Home: NextPage = () => {

  return (
    <div className='mt-[5vh]'>
      <h1 className='text-stone-200 hover:text-amber-500 hover:cursor-default text-2xl font-[poppins] font-bold text-center select-none'>Welcome to the <span className='hover:text-amber-700'>Offical 7202 CyberOrioles</span> Website!</h1>
      <p className='text-stone-300 hover:text-orange-500 font-[poppins] font-medium text-center mr-[5vw] mt-[1vh] select-none'>The Cyber Orioles would like to introduce you to <span className='underline cursor-pointer hover:text-blue-400' onClick={(e) => window.open("https://www.firstinspires.org/")}>FIRST</span> (For the Inspiration and Recognition of Science and Technology)</p>
      <div className="translate-x-[30%] translate-y-[5%] w-[60vw] h-[50vh] rounded-lg bg-[rgba(0,0,0,0.1)]" id='test'>
        <div className='pl-[1vw] pr-[1vw] pt-[1vh] pb-[1vh]'>
          <div className="h-[48vh] ml-5 scrollbar-thin scrollbar-thumb-orange-400 hover:scrollbar-thumb-orange-500 active:scrollbar-thumb-orange-600 scrollbar-thumb-rounded-full scrollbar-track-black scrollbar-track-rounded-full cursor-default">
            <details>
              <summary className='text-white duration-500 hover:duration-500 hover:text-orange-600 w-fit'>
                What is FIRST exactly?
              </summary>
              <div className='pt-[0.5vh] pb-[0.5vh] pr-[0.5vw] pl-[0.5vw] rounded-md cursor'>
                <span className='text-neutral-500'>FIRST is an organization that prepares young people for big things in the future world. Whether it be building autonomous cars, or creating something that affects us in a major way. With FIRST you are learning to work with others and to make amazing things</span>
              </div>
            </details>
            <details className='mt-[1vh]'>
              <summary className='text-white duration-500 hover:duration-500 hover:text-orange-600 w-fit'>
                What is FRC?
              </summary>
              <div className='pt-[0.5vh] pb-[0.5vh] pr-[0.5vw] pl-[0.5vw] rounded-md cursor'>
                <span className='text-neutral-500'>FRC is a robotics competition where a team has to spend a specific amount of time building/programming their robot to do things for the competition</span>
              </div>
            </details>
            <details className='mt-[1vh]'>
              <summary className='text-white duration-500 hover:duration-500 hover:text-orange-600 w-fit'>
                Who are the Cyber Orioles?
              </summary>
              <div className='pt-[0.5vh] pb-[0.5vh] pr-[0.5vw] pl-[0.5vw] rounded-md cursor'>
                <span className='text-neutral-500'>We are a highschool robotics team located in Morrice, Michigan</span>
              </div>
            </details>
            <details className='mt-[1vh]'>
              <summary className='text-white duration-500 hover:duration-500 hover:text-orange-600 w-fit'>
                How can I help?
              </summary>
              <div className='pt-[0.5vh] pb-[0.5vh] pr-[0.5vw] pl-[0.5vw] rounded-md cursor'>
                <span className='text-neutral-500'>If you wanted to help you could sponsor our robotics team, that would help out a lot</span>
              </div>
            </details>
            <details className='mt-[1vh]'>
              <summary className='text-white duration-500 hover:duration-500 hover:text-orange-600 w-fit'>
                Where can I contact you?
              </summary>
              <div className='pt-[0.5vh] pb-[0.5vh] pr-[0.5vw] pl-[0.5vw] rounded-md cursor'>
                <span className='text-neutral-500'>If you head to the contact tab you will see a list of contact info to contact the mentors of the Cyber Orioles</span>
              </div>
            </details>
            {/* <div className='mr-5'>
              <table className='cursor-default select-none font-[poppins]'>
                <tbody>
                  <tr className='text-white border border-neutral-800'>
                    <th className='border-r border-neutral-800 text-[2.5vh]'>1. What is FIRST exactly?</th>
                    <th className='text-[2.3vh] text-neutral-400 pt-[2vh] pb-[2vh] pl-[1.5vw] pr-[1.5vw]'>FIRST is an organization that prepares young people for big things in the future world. Whether it be building autonomous cars, or creating something that affects us in a major way. With FIRST you are learning to work with others and to make amazing things</th>
                  </tr>
                </tbody>
                <tbody>
                  <tr className='text-white border border-neutral-800'>
                    <th className='border-r border-neutral-800 text-[2.5vh]'>2. What is FRC?</th>
                    <th>FRC is a robotics competition where a team has to spend a specific amount of time building/programming their robot to do things for the competition</th>
                  </tr>
                </tbody>
                <tbody>
                  <tr className='text-white border border-neutral-800'>
                    <th className='border-r border-neutral-800 text-[2.5vh]'>3. Who are the Cyber Orioles?</th>
                    <th>We are a highschool robotics team located in Morrice, Michigan</th>
                  </tr>
                </tbody>
                <tbody>
                  <tr className='text-white border border-neutral-800'>
                    <th className='border-r border-neutral-800 text-[2.5vh]'>4. How can I help?</th>
                    <th>If you wanted to help you could sponsor our robotics team, that would help out a lot</th>
                  </tr>
                </tbody>
                <tbody>
                  <tr className='text-white border border-neutral-800'>
                    <th className='border-r border-neutral-800 text-[2.5vh]'>5. Where can I contact you?</th>
                    <th>If you head to the contact tab you will see a list of contact info to contact the mentors of the Cyber Orioles</th>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home