import type { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react';
import { GrFacebookOption, GrGithub } from "react-icons/gr";
import { TBAIcon } from '../components/images/Icons';
import { getImages } from '../scripts/getImages';

let images: any[] = [];

const Media: NextPage = (props: any) => {


    const [socialDropdown, setSocialDropdown] = useState(false);
    const [videoDropdown, setVideoDropdown] = useState(false);
    const [imageDropdown, setImageDropdown] = useState(false);


    getImages().then((res) => {
        images = res;
    })

    return (
        <div className='text-stone-300'>
            <div className='sm:hidden select-none'>
                <div className='text-center'>
                    <h1 className='w-fit inline-block text-2xl hover:cursor-pointer' onClick={(e) => setSocialDropdown(!socialDropdown)}>Social Links {socialDropdown ? '⏵' : '⏷'}</h1>
                </div>
                <div>
                    {!socialDropdown &&
                        <div className='flex items-center justify-center'>
                            <div className="mt-[1vh] w-[80vw] h-[10vh] rounded-lg bg-stone-800 flex gap-[1vw] items-center justify-center text-black">
                                <span className='p-[1vh] flex bg-orange-600 rounded-full'>
                                    <GrFacebookOption className='text-[6vh] duration-500 hover:duration-500 hover:text-stone-300 hover:cursor-pointer' onClick={(e) => window.open("https://www.facebook.com/profile.php?id=100083348221907")} />
                                </span>
                                <span className='p-[1vh] flex bg-orange-600 rounded-full'>
                                    <GrGithub className='text-[6vh] duration-500 hover:duration-500 hover:text-stone-300 hover:cursor-pointer' onClick={(e) => window.open("https://github.com/team7202")} />
                                </span>
                                <span className='p-[1vh] flex bg-orange-600 rounded-full'>
                                    <TBAIcon className='text-[6vh] duration-500 hover:duration-500 hover:text-stone-300 hover:cursor-pointer' onClick={(e: any) => window.open("https://www.thebluealliance.com/team/7202")} />
                                </span>
                            </div>
                        </div>
                    }
                </div>
            </div>
            {/* <hr className='border-stone-800 mt-[1vh] rounded-full'/> */}
            <div className='text-center mt-[3vh]'>
                <h1 className='w-fit inline-block text-2xl hover:cursor-pointer' onClick={(e) => setVideoDropdown(!videoDropdown)}>Videos {videoDropdown ? '⏷' : '⏵'}</h1>
            </div>
            <div>
                {videoDropdown &&
                    <div className='flex items-center justify-center scrollbar-thin scrollbar-thumb-orange-400 hover:scrollbar-thumb-orange-500 active:scrollbar-thumb-orange-600 scrollbar-thumb-rounded-full scrollbar-track-black scrollbar-track-rounded-full cursor-default'>
                        <div className="mt-[1vh] w-[80vw] h-[55vh] rounded-lg bg-stone-800 flex gap-[1vw] items-center justify-center text-black">
                            <iframe className="border-2 border-neutral-900 rounded-md" width="500" height="300" src="https://www.youtube.com/embed/videoseries?list=PL3tAkk3DkHeiJ-N3gWgfq1f12_vd6Ty8s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                }
            </div>
            <div className='text-center mt-[3vh]'>
                <h1 className='w-fit inline-block text-2xl hover:cursor-pointer' onClick={(e) => setImageDropdown(!imageDropdown)}>Images {imageDropdown ? '⏷' : '⏵'}</h1>
            </div>
            <div>
                {imageDropdown &&
                    <div className='flex items-center justify-center cursor-default'>
                        <div className="mt-[1vh] w-[80vw] h-[50vh] rounded-lg bg-stone-800 text-black scrollbar-thin scrollbar-thumb-orange-400 hover:scrollbar-thumb-orange-500 active:scrollbar-thumb-orange-600 scrollbar-thumb-rounded-full scrollbar-track-black scrollbar-track-rounded-full">
                            <div className=' flex w-[80vw] pl-[2vw] pr-[2vw] pt-[2vw] pb-[2vw]'>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Media;