import { CameraIcon, ClipboardListIcon, PhoneIcon, HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="w-10 border-2 border-black bg-gray-700 h-screen rounded-xl hover:bg-black">
            <Link href="/"><img src="/images/logo.png" className="h-8 w-8 ml-0.5 hover:bg-white rounded-lg cursor-pointer"></img></Link>
            <div className="h-2" />
            <Link href="/"><HomeIcon className="h-8 w-8 text-white hover:text-orange-600 hover:bg-white rounded-lg ml-0.5 cursor-pointer" /></Link>
            <div className="h-4" />
            <Link href="/news"><ClipboardListIcon className="h-8 w-8 text-white hover:text-orange-600 hover:bg-white rounded-lg ml-0.5 cursor-pointer" /></Link>
            <div className="h-4" />
            <Link href="/media"><CameraIcon className="h-8 w-8 text-white hover:text-orange-600 hover:bg-white rounded-lg ml-0.5 cursor-pointer" /></Link>
            <div className="h-4"></div>
            <Link href="/contact"><PhoneIcon className="h-8 w-8 text-white hover:text-orange-600 hover:bg-white rounded-lg ml-0.5 cursor-pointer" /></Link>
            <div className="h-4" />
            <Link href="/about"><QuestionMarkCircleIcon className="h-8 w-8 text-white hover:text-orange-600 hover:bg-white rounded-lg ml-0.5 cursor-pointer" /></Link>
        </div>
    )
}