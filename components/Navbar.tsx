import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({showButtons, setShowButtons}: {showButtons: boolean, setShowButtons: Dispatch<SetStateAction<boolean>>}) {
    return (
        <div id='navbar' className='w-screen sm:h-[4.5vh] lg:h-[5vh] flex justify-center items-center gap-[3vw] bg-gradient-to-br from-orange-600 via-amber-300 to-orange-600 rounded-b-full absolute'>
            <Link href={"/"} className='absolute left-10 flex justify-center items-center sm:text-[1.75vh] lg:text-[2.5vh] font-bold text-orange-600 hover:text-white duration-1000 bg-black sm:h-[3.5vh] sm:pl-[0.1vmin] sm:pt-[0.1vmin] sm:pr-[0.1vmin] sm:pb-[0.1vmin] md:pl-[calc(0.15vw+0.15vh)] md:pt-[calc(0.25vw+0.25vh)] md:pr-[calc(0.25vw+0.25vh)] md:pb-[calc(0.25vw+0.25vh)] rounded-full'>CyberOrioles</Link>
            <Link href={"/"} className="sm:hidden md:block bg-[rgba(0,0,0,0.8)] hover:bg-[rgba(0,0,0,1)] pl-[calc(0.25vw+0.25vh)] pt-[calc(0.25vw+0.25vh)] pr-[calc(0.25vw+0.25vh)] pb-[calc(0.25vw+0.25vh)] rounded-full hover:text-white duration-1000 font-bold">Home</Link>
            <Link href={"/announcements"} className="sm:hidden md:block bg-[rgba(0,0,0,0.8)] hover:bg-[rgba(0,0,0,1)] pl-[calc(0.25vw+0.25vh)] pt-[calc(0.25vw+0.25vh)] pr-[calc(0.25vw+0.25vh)] pb-[calc(0.25vw+0.25vh)] rounded-full hover:text-white duration-1000 font-bold">Announcements</Link>
            <Link href={"/media"} className="sm:hidden md:block bg-[rgba(0,0,0,0.8)] hover:bg-[rgba(0,0,0,1)] pl-[calc(0.25vw+0.25vh)] pt-[calc(0.25vw+0.25vh)] pr-[calc(0.25vw+0.25vh)] pb-[calc(0.25vw+0.25vh)] rounded-full hover:text-white duration-1000 font-bold">Media</Link>
            <Link href={"/sponsors"} className="sm:hidden md:block bg-[rgba(0,0,0,0.8)] hover:bg-[rgba(0,0,0,1)] pl-[calc(0.25vw+0.25vh)] pt-[calc(0.25vw+0.25vh)] pr-[calc(0.25vw+0.25vh)] pb-[calc(0.25vw+0.25vh)] rounded-full hover:text-white duration-1000 font-bold">Sponsors</Link>
            {!showButtons ?
                <GiHamburgerMenu className='md:hidden absolute right-10 text-2xl bg-[rgba(0,0,0,0.5)] pl-[calc(0.25vw+0.25vh)] pt-[calc(0.25vw+0.25vh)] pr-[calc(0.25vw+0.25vh)] pb-[calc(0.25vw+0.25vh)] rounded-md duration-500' onClick={() => setShowButtons(true)} />
                :
                <GiHamburgerMenu className='md:hidden absolute right-10 text-2xl bg-black pl-[calc(0.25vw+0.25vh)] pt-[calc(0.25vw+0.25vh)] pr-[calc(0.25vw+0.25vh)] pb-[calc(0.25vw+0.25vh)] rounded-md rotate-[90deg] duration-500' onClick={() => setShowButtons(false)} />
            }
            {showButtons ?
                <div className=''>
                    <div className='md:hidden absolute bg-gradient-to-br from-[rgba(234,88,12,0.9)] via-[rgba(252,211,77,0.9)] to-[rgba(234,88,12,0.9)] text-black w-[45vmin] h-fit pb-[1vmin] pt-[1vmin] right-5 top-[4vh] rounded-md duration-1000 flex flex-col items-center gap-3'>
                        <div className='h-[0.5vmin]' />
                        <Link href={"/"} className="bg-orange-400 pl-[1vmin] pt-[1vmin] pr-[1vmin] pb-[1vmin] shadow-[-5px_5px_0px_rgb(225,120,30)]">Home</Link>
                        <Link href={"/announcements"} className="bg-orange-400 pl-[1vmin] pt-[1vmin] pr-[1vmin] pb-[1vmin] shadow-[-5px_5px_0px_rgb(225,120,30)]">Announcements</Link>
                        <Link href={"/media"} className="bg-orange-400 pl-[1vmin] pt-[1vmin] pr-[1vmin] pb-[1vmin] shadow-[-5px_5px_0px_rgb(225,120,30)]">Media</Link>
                        <Link href={"/sponsors"} className="bg-orange-400 pl-[1vmin] pt-[1vmin] pr-[1vmin] pb-[1vmin] shadow-[-5px_5px_0px_rgb(225,120,30)]">Sponsors</Link>
                        <div className='h-[0.5vmin]' />
                    </div>
                </div>
                :
                <div className='md:hidden absolute bg-[rgba(0,0,0,0)] w-[45vmin] h-[10vmin] right-5 top-[4vh] rounded-md duration-1000 flex flex-col'>

                </div>
            }
        </div>
    )
}