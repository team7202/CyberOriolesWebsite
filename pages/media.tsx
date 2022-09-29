import type { NextPage } from 'next'

const Home: NextPage = (props) => {

    return (
        <div className='text-center text-5xl text-stone-300 hover:text-red-500'>
            <div className='mt-[40vh]'>
                <span className='w-fit bg-stone-800 pt-[30vh] pb-[30vh] pl-[10vw] pr-[10vw] rounded-md hover:animate-[float_1s_ease-in-out_infinite] hover:bg-[#111111]'>No Media Yet</span>
            </div>
        </div>
    ) 
}

export default Home;