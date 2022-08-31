import { CameraIcon, ClipboardListIcon, HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="w-10 border border-gray-700 bg-black h-screen">
            <Link href="/"><HomeIcon className="h-8 w-8 text-white hover:text-orange-600 hover:bg-white rounded-full ml-0.5 cursor-pointer" /></Link>
            <div className="h-4"/>
            <Link href="/news"><ClipboardListIcon className="h-8 w-8 text-white hover:text-orange-600 hover:bg-white rounded-full ml-0.5 cursor-pointer" /></Link>
            <div className="h-4"/>
            <Link href="/about"><QuestionMarkCircleIcon className="h-8 w-8 text-white hover:text-orange-600 hover:bg-white rounded-full ml-0.5 cursor-pointer" /></Link>
            <div className="h-4"/>
            <Link href="/media"><CameraIcon className="h-8 w-8 text-white hover:text-orange-600 hover:bg-white rounded-full ml-0.5 cursor-pointer"/></Link>
        </div>
    )
}