import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiImages, BiNews } from "react-icons/bi";
import { BsPersonBoundingBox } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

export default function Navbar() {

    let [mobileNavToggle, toggleMobileNav] = useState(false);

    if (typeof window !== 'undefined') {
        var currentPage = location.href.split("/")[3];
    } else {
        var currentPage = "";
    }

    return (
        <div>
            <div className="select-none">
                <div className="md:hidden lg:hidden duration-1000 hover:duration-1000 w-[95vw] h-[5vh] mt-[1vh] rounded-md bg-gradient-to-r from-orange-500 to-amber-400 hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-500 ml-[2.5vw] fixed border-black border-2 text-[2.6vh]">
                    <GiHamburgerMenu className={`mt-[1vh] ml-[85vw] duration-1000 hover:duration-1000 hover:cursor-pointer ${mobileNavToggle ? "text-white" : "text-black"}`} onClick={(e) => toggleMobileNav(!mobileNavToggle)} />
                </div>
                <div className="sm:hidden duration-1000 hover:duration-1000 w-[95vw] h-[5vh] mt-[1vh] rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-500 ml-[2.5vw] fixed border-black border-2 text-[3vh]">
                    <span className={`ml-[5vw] ${currentPage == "" ? "text-black font-[900]" : "text-stone-800 font-[600]"} hover:bg-amber-600 pl-[1vw] pr-[1vw] rounded-md hover:cursor-pointer`} onClick={(e) => currentPage == "" ? "" : location.href = "/"}>Home</span>
                    <span className={`ml-[5vw] ${currentPage == "news" ? "text-black font-[900]" : "text-stone-800 font-[600] hover:bg-amber-600"} pl-[1vw] pr-[1vw] rounded-md hover:cursor-pointer`} onClick={(e) => currentPage == "news" ? "" : location.href = "/news"}>News</span>
                    <span className={`ml-[5vw] ${currentPage == "media" ? "text-black font-[900]" : "text-stone-800 font-[600] hover:bg-amber-600"} pl-[1vw] pr-[1vw] rounded-md hover:cursor-pointer`} onClick={(e) => currentPage == "media" ? "" : location.href = "/media"}>Media</span>
                    <span className={`ml-[5vw] ${currentPage == "sponsors" ? "text-black font-[900]" : "text-stone-800 font-[600]"} hover:bg-amber-600 pl-[1vw] pr-[1vw] rounded-md hover:cursor-pointer`} onClick={(e) => currentPage == "sponsors" ? "" : location.href = "/sponsors"}>Sponsors</span>
                    <span className={`ml-[5vw] ${currentPage == "contact" ? "text-black font-[900]" : "text-stone-800 font-[600]"} hover:bg-amber-600 pl-[1vw] pr-[1vw] rounded-md hover:cursor-pointer`} onClick={(e) => currentPage == "contact" ? "" : location.href = "/contact"}>Contact</span>
                </div>
            </div>
            {mobileNavToggle &&
                <div className="fixed md:hidden lg:hidden w-[45vw] h-[30vh] ml-[53vw] mt-[6.5vh] bg-[rgba(1,1,1,0.8)] rounded-md pl-[2vw] pr-[2vw] pt-[2vw] pb-[2vw]">
                    <ul>
                        <li className="duration-500 hover:duration-500 hover:bg-orange-500 rounded-md hover:cursor-pointer">
                            <span className={`flex text-[2.5vh] ${currentPage == "" ? "text-white" : "text-stone-300"} font-semibold`} onClick={(e) => currentPage == "" ? "" : location.href = "/"}>
                                <AiFillHome className="absolute mt-[0.4vh]" />
                                <span className="ml-[6vw]">Home</span>
                            </span>
                        </li>
                        <li className="duration-500 hover:duration-500 hover:bg-orange-500 rounded-md hover:cursor-pointer">
                            <span className={`flex text-[2.5vh] ${currentPage == "news" ? "text-white" : "text-stone-300"} font-semibold`} onClick={(e) => currentPage == "news" ? "" : location.href = "/news"}>
                                <BiNews className="absolute mt-[0.4vh]" />
                                <span className="ml-[6vw]">News</span>
                            </span>
                        </li>
                        <li className="duration-500 hover:duration-500 hover:bg-orange-500 rounded-md hover:cursor-pointer">
                            <span className={`flex text-[2.5vh] ${location.href.split("/")[3] == "media" ? "text-white" : "text-stone-300"} font-semibold`} onClick={(e) => currentPage == "media" ? "" : location.href = "/media"}>
                                <BiImages className="absolute mt-[0.4vh]" />
                                <span className="ml-[6vw]">Media</span>
                            </span>
                        </li>
                        <li className="duration-500 hover:duration-500 hover:bg-orange-500 rounded-md hover:cursor-pointer">
                            <span className={`flex text-[2.5vh] ${location.href.split("/")[3] == "sponsors" ? "text-white" : "text-stone-300"} font-semibold`} onClick={(e) => currentPage == "sponsors" ? "" : location.href = "/spnsors"}>
                                <BsPersonBoundingBox className="absolute mt-[0.4vh]" />
                                <span className="ml-[6vw]">Sponsors</span>
                            </span>
                        </li>
                        <li className="duration-500 hover:duration-500 hover:bg-orange-500 rounded-md hover:cursor-pointer">
                            <span className={`flex text-[2.5vh] ${location.href.split("/")[3] == "contact" ? "text-white" : "text-stone-300"} font-semibold`} onClick={(e) => currentPage == "contact" ? "" : location.href = "/contact"}>
                                <MdEmail className="absolute mt-[0.4vh]" />
                                <span className="ml-[6vw]">Contact</span>
                            </span>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}
