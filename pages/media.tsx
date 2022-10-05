import type { GetServerSideProps, NextPage } from 'next'
import { useRef, useState } from 'react';
import { GrFacebookOption, GrGithub } from "react-icons/gr";
import { TBAIcon } from '../components/images/Icons';
import ImageFullscreen from '../components/media/ImageFullscreen';
import { getImages } from '../scripts/getImages';

let imageArray: any[] = [];

interface Embed {
    "Jackson": {
        content: JSX.Element
    },
    "Kettering University #1": {
        content: JSX.Element
    },
    "Twitch Live": {
        content: JSX.Element
    }
}

const Media: NextPage = (props: any) => {

    const videoEmbeds: any = {
        "Jackson": {
            small: <iframe src="https://www.youtube.com/embed/videoseries?list=TLGGZYoYoN9sGD8wMjEwMjAyMg" className="border-2 border-neutral-900 rounded-md w-[60vw] h-[60vw]" title="FIM District Jackson Event presented by Spring" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
            normal: <iframe src="https://www.youtube.com/embed/videoseries?list=TLGGZYoYoN9sGD8wMjEwMjAyMg" className="border-2 border-neutral-900 rounded-md w-[40vw] h-[50vh]" title="FIM District Jackson Event presented by Spring" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        },
        "Kettering University #1": {
            small: <iframe src="https://www.youtube.com/embed/videoseries?list=TLGGkh3smR9KcOAwMjEwMjAyMg#1%20(Team%207202)" className="border-2 border-neutral-900 rounded-md w-[60vw] h-[60vw]" title="FIM District Kettering University Event" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
            normal: <iframe src="https://www.youtube.com/embed/videoseries?list=TLGGkh3smR9KcOAwMjEwMjAyMg#1%20(Team%207202)" className="border-2 border-neutral-900 rounded-md w-[40vw] h-[50vh]" title="FIM District Kettering University Event" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        },
        "Twitch Live": {
            small: <iframe src="https://player.twitch.tv/?channel=firstupdatesnow&parent=www.cyberorioles.com&parent=cyberorioles.com&muted=false" className='border-2 border-neutral-900 rounded-md w-[60vw] h-[60vw]' frameBorder="0" allowFullScreen={true} scrolling="no" height="378" width="620"></iframe>,
            normal: <iframe src="https://player.twitch.tv/?channel=firstupdatesnow&parent=www.cyberorioles.com&parent=cyberorioles.com&muted=false" className='border-2 border-neutral-900 rounded-md w-[40vw] h-[50vh]' frameBorder="0" allowFullScreen={true} scrolling="no" height="378" width="620"></iframe>
        }
    }

    const {
        images
    } = props;

    const [socialDropdown, setSocialDropdown] = useState(false);
    const [videoDropdown, setVideoDropdown] = useState(false);
    const [imageDropdown, setImageDropdown] = useState(false);
    const [imageFull, setImageFull] = useState(false);
    const [eventNav, setEventNav] = useState(false);

    const [currentEvent, setCurrentEvent] = useState("")
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

    const handleEventNavClick = (event: string) => {
        if (currentEvent != event) setCurrentEvent(event);
        setEventNav(false);
    }
    // <div key={i} className='duration-1000 hover:duration-1000 float-left pl-[0.5vw] pt-[0.5vw] pr-[0.5vw] pb-[0.5vw] ml-[0.5vw] mt-[0.5vw] rounded-lg bg-stone-900 hover:bg-black' onClick={(e) => handleImageClick(`/images/${val}`)}><img src={`/images/${val}`} className={`w-[10vw] h-[10vw]`} /></div>))

    for (let i = 0; i < images.length; i++) {
        imageArray = [];
        images.map((val: any) => {
            imageArray.push(
                {
                    small: <div key={i} className='duration-1000 hover:duration-1000 float-left pl-[0.5vh] pt-[0.5vh] pr-[0.5vh] pb-[0.5vh] ml-[0.5vh] mt-[0.5vh] rounded-lg bg-stone-900 hover:bg-black' onClick={(e) => handleImageClick(`/images/${val}`)}><img src={`/images/${val}`} className={`w-[10vh] h-[10vh]`} /></div>,
                    normal: <div key={i} className='duration-1000 hover:duration-1000 float-left pl-[0.5vw] pt-[0.5vw] pr-[0.5vw] pb-[0.5vw] ml-[0.5vw] mt-[0.5vw] rounded-lg bg-stone-900 hover:bg-black' onClick={(e) => handleImageClick(`/images/${val}`)}><img src={`/images/${val}`} className={`w-[10vw] h-[10vw]`} /></div>
                })
        })
    }

    return (
        <div className='text-stone-300 select-none'>
            <ImageFullscreen
                onClose={() => setImageFull(false)}
                show={imageFull}
                url={fullImageURL}
            />
            <div className=''>
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
                    <div>
                        {/** Medium-Large Screen */}
                        <div className='sm:hidden flex items-center justify-center scrollbar-thin scrollbar-thumb-orange-400 hover:scrollbar-thumb-orange-500 active:scrollbar-thumb-orange-600 scrollbar-thumb-rounded-full scrollbar-track-black scrollbar-track-rounded-full cursor-default'>
                            <div className="mt-[1vh] w-[80vw] h-[55vh] rounded-lg bg-stone-800 flex gap-[1vw] items-center justify-center text-black">
                                {currentEvent == '' ? videoEmbeds["Twitch Live"].normal : videoEmbeds[currentEvent].normal}
                                {!eventNav && <span className='absolute pl-[1vw] pt-[1vw] pr-[1vw] pb-[1vw] ml-[60vw] bg-orange-600 rounded-md text-white hover:text-black hover:cursor-pointer' onClick={(e) => setEventNav(true)}>{currentEvent == '' ? "Twitch Live" : currentEvent}</span>}
                                {eventNav &&
                                    <div className='absolute bg-[rgba(0,0,0,0.5)] pt-[2vw] pb-[2vw] pr-[1vw] pl-[1vw] w-fit ml-[60vw] h-[43.5vh] scrollbar-thin scrollbar-thumb-orange-400 hover:scrollbar-thumb-orange-500 active:scrollbar-thumb-orange-600 scrollbar-thumb-rounded-full scrollbar-track-black scrollbar-track-rounded-full'>
                                        <ul className='text-center'>
                                            <li className='duration-1000 hover:duration-1000 pb-[1vw] pt-[1vw] pr-[1vw] pl-[1vw] bg-orange-600 rounded-md hover:text-white hover:bg-purple-600 hover:cursor-pointer' onClick={(e) => handleEventNavClick('Twitch Live')}>Twitch Live</li>
                                            <div className='h-[1vh]' />
                                            <li className='duration-1000 hover:duration-1000 pb-[1vw] pt-[1vw] pr-[1vw] pl-[1vw] bg-orange-600 rounded-md hover:text-white hover:bg-black hover:cursor-pointer' onClick={(e) => handleEventNavClick('Jackson')}>Jackson</li>
                                            <div className='h-[1vh]' />
                                            <li className='duration-1000 hover:duration-1000 pb-[1vw] pt-[1vw] pr-[1vw] pl-[1vw] bg-orange-600 rounded-md hover:text-white hover:bg-black hover:cursor-pointer' onClick={(e) => handleEventNavClick('Kettering University #1')}>Kettering University #1</li>
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                        {/* Small Screens */}
                        <div className='md:hidden lg:hidden flex justify-center scrollbar-thin scrollbar-thumb-orange-400 hover:scrollbar-thumb-orange-500 active:scrollbar-thumb-orange-600 scrollbar-thumb-rounded-full scrollbar-track-black scrollbar-track-rounded-full cursor-default'>
                            {!eventNav && <span className='absolute mt-[1.5vh] pl-[1vw] pt-[1vh] pr-[1vw] pb-[1vh] bg-orange-600 rounded-md text-white hover:text-black hover:cursor-pointer' onClick={(e) => setEventNav(true)}>{currentEvent == '' ? "Twitch Live" : currentEvent}</span>}
                            {eventNav &&
                                <div className='absolute bg-[rgba(0,0,0,0.5)] pt-[2vw] pb-[2vw] pr-[1vw] pl-[1vw] w-[80vw] h-[43.5vh] scrollbar-thin scrollbar-thumb-orange-400 hover:scrollbar-thumb-orange-500 active:scrollbar-thumb-orange-600 scrollbar-thumb-rounded-full scrollbar-track-black scrollbar-track-rounded-full'>
                                    <ul className='flex flex-col  text-center'>
                                        <li className='duration-1000 hover:duration-1000 pb-[1vh] pt-[1vh] pr-[1vw] pl-[1vw] bg-orange-600 rounded-md hover:text-white hover:bg-purple-600 hover:cursor-pointer' onClick={(e) => handleEventNavClick('Twitch Live')}>Twitch Live</li>
                                        <div className='inline-block h-[1vh]' />
                                        <li className='duration-1000 hover:duration-1000 pb-[1vh] pt-[1vh] pr-[1vw] pl-[1vw] bg-orange-600 rounded-md hover:text-white hover:bg-black hover:cursor-pointer' onClick={(e) => handleEventNavClick('Jackson')}>Jackson</li>
                                        <div className='h-[1vh]' />
                                        <li className='duration-1000 hover:duration-1000 pb-[1vh] pt-[1vh] pr-[1vw] pl-[1vw] bg-orange-600 rounded-md hover:text-white hover:bg-black hover:cursor-pointer' onClick={(e) => handleEventNavClick('Kettering University #1')}>Kettering University #1</li>
                                    </ul>
                                </div>
                            }
                            <div className="mt-[1vh] w-[80vw] h-[80vw] rounded-lg bg-stone-800 flex gap-[1vw] items-center justify-center text-black">
                                <div>
                                    {currentEvent == '' ? videoEmbeds["Twitch Live"].small : videoEmbeds[currentEvent].small}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className='text-center mt-[3vh]'>
                <h1 className='w-fit inline-block text-2xl hover:cursor-pointer' onClick={(e) => setImageDropdown(!imageDropdown)}>Images {imageDropdown ? '⏷' : '⏵'}</h1>
            </div>
            <div>
                {imageDropdown &&
                    <div>
                        {/* Medium-Large Screens */}
                        <div className='sm:hidden flex items-center justify-center cursor-default'>
                            <div className="mt-[1vh] w-[80vw] h-[50vh] rounded-lg bg-stone-800 text-black scrollbar-thin scrollbar-thumb-orange-400 hover:scrollbar-thumb-orange-500 active:scrollbar-thumb-orange-600 scrollbar-thumb-rounded-full scrollbar-track-black scrollbar-track-rounded-full">
                                <div className='ml-[1vw] mt-[1vw]'>
                                    {imageArray.map((res) => res["normal"])}
                                </div>
                            </div>
                        </div>
                        {/* Small Screens */}
                        <div className='md:hidden lg:hidden flex items-center justify-center cursor-default'>
                            <div className="mt-[1vh] w-[80vw] h-[50vh] rounded-lg bg-stone-800 text-black scrollbar-thin scrollbar-thumb-orange-400 hover:scrollbar-thumb-orange-500 active:scrollbar-thumb-orange-600 scrollbar-thumb-rounded-full scrollbar-track-black scrollbar-track-rounded-full">
                                <div className='ml-[1vw] mt-[1vw]'>
                                    {imageArray.map((res) => res.small)}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const images = await getImages();
    return {
        props: { images }, // will be passed to the page component as props
    }
}

// const ClientOnly = ({ children, ...delegated }: { children: any }) => {
//     const [hasMounted, setHasMounted] = useState(false);

//     useEffect(() => {
//         setHasMounted(true);
//     }, []);

//     if (!hasMounted) {
//         return null;
//     }

//     return <div {...delegated}>{children}</div>;
// };

export default Media;
