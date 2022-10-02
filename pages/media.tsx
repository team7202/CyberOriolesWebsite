import type { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { GrFacebookOption, GrGithub } from "react-icons/gr";
import { TBAIcon } from '../components/images/Icons';
import ImageFullscreen from '../components/media/ImageFullscreen';
import { getImages } from '../scripts/getImages';

let images: any[] = [];

const Media: NextPage = (props: any) => {

    const [socialDropdown, setSocialDropdown] = useState(false);
    const [videoDropdown, setVideoDropdown] = useState(false);
    const [imageDropdown, setImageDropdown] = useState(false);
    const [imageFull, setImageFull] = useState(false);

    const [fullImageURL, setFullImageURL] = useState("");

    if (typeof window !== 'undefined') {
        document.addEventListener("keyup", (event) => {
            if (imageFull && event.key == "Escape") setImageFull(false);
        })
    }

    const handleImageClick = (url: string) => {
        setFullImageURL(url);
        setImageFull(true);
    }

    getImages().then((res) => {
        for (let i = 0; i < res.length; i++) {
            images = [];
            images.push(res.map((val: any) => <div key={i} className='duration-1000 hover:duration-1000 float-left pl-[0.5vw] pt-[0.5vw] pr-[0.5vw] pb-[0.5vw] ml-[0.5vw] mt-[0.5vw] rounded-lg bg-stone-900 hover:bg-black' onClick={(e) => handleImageClick(`/images/${val}`)}><img src={`/images/${val}`} className={`w-[10vw] h-[10vw]`} /></div>))
        }
    });


    return (
        <div className='text-stone-300 select-none'>
            <ImageFullscreen
                onClose={() => setImageFull(false)}
                show={imageFull}
                url={fullImageURL}
            />
            <div className='sm:hidden'>
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
                            <div className='ml-[1vw] mt-[1vw]'>
                                {images.map((res) => res)}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}

export default Media;