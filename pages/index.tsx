import type { NextPage } from 'next'
import Constants from '../scripts/Constants'

const Home: NextPage = (props) => {

  return (
    <div>
      {/* Medium-Large Screens */}
      <div className='sm:hidden mt-[5vh]'>
        <h1 className='text-stone-200 hover:text-amber-500 hover:cursor-default text-2xl font-bold text-center select-none'>Welcome to the <span className='hover:text-amber-700'>7202 CyberOrioles</span> Website!</h1>
        <p className='text-stone-300 hover:text-orange-500 font-medium text-center mr-[5vw] mt-[1vh] select-none'>The Cyber Orioles would like to introduce you to <span className='underline cursor-pointer hover:text-blue-400' onClick={(e) => window.open("https://www.firstinspires.org/")}>FIRST</span> (For the Inspiration and Recognition of Science and Technology)</p>
        <div className="ml-[18vw] mt-[2vh] w-[60vw] h-[50vh] rounded-lg bg-stone-800 duration-[2000ms] hover:bg-[#111111] hover:duration-[2000ms] hover:animate-[float_1s_ease-in-out_infinite]">
          <div className='pl-[1vw] pr-[1vw] pt-[1vh] pb-[1vh]'>
            <div className="h-[48vh] ml-5 scrollbar-thin scrollbar-thumb-orange-400 hover:scrollbar-thumb-orange-500 active:scrollbar-thumb-orange-600 scrollbar-thumb-rounded-full scrollbar-track-black scrollbar-track-rounded-full cursor-default">
              <div className='pr-[1vw] text-[3vh] select-none'>
                <details className="text-white">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Small Screens */}
      <div className='md:hidden lg:hidden'>
        <h1 className='text-stone-200 hover:text-amber-500 hover:cursor-default text-lg font-bold text-center select-none'>Welcome to the <span className='hover:text-amber-700'>7202 CyberOrioles</span> Website!</h1>
        <p className='text-stone-300 hover:text-orange-500 font-medium text-[2vh] text-center mr-[5vw] mt-[1vh] select-none'>The Cyber Orioles would like to introduce you to <span className='underline cursor-pointer hover:text-blue-400' onClick={(e) => window.open("https://www.firstinspires.org/")}>FIRST</span> (For the Inspiration and Recognition of Science and Technology)</p>
        <div className="ml-[18vw] mt-[2vh] w-[60vw] h-[50vh] rounded-lg bg-stone-800 duration-[2000ms] hover:bg-[#111111] hover:duration-[2000ms] hover:animate-[float_1s_ease-in-out_infinite]">
          <div className='pl-[1vw] pr-[1vw] pt-[1vh] pb-[1vh]'>
            <div className="h-[48vh] ml-5 scrollbar-thin scrollbar-thumb-orange-400 hover:scrollbar-thumb-orange-500 active:scrollbar-thumb-orange-600 scrollbar-thumb-rounded-full scrollbar-track-black scrollbar-track-rounded-full cursor-default">
              <div className='pr-[5vw] text-[2vh]'>
                <details className="text-white">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home