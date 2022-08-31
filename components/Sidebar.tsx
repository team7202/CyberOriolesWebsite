import { CameraIcon, ClipboardListIcon, HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";

export default function Sidebar() {
    return (
        <div className="w-10 border border-gray-700 bg-black h-screen">
            <a href="/"><HomeIcon className="h-8 w-8 text-white hover:text-orange-600 hover:bg-white rounded-full ml-0.5" /></a>
            <div className="h-4"/>
            <a href="/news"><ClipboardListIcon className="h-8 w-8 text-white hover:text-orange-600 hover:bg-white rounded-full ml-0.5" /></a>
            <div className="h-4"/>
            <a href="/about"><QuestionMarkCircleIcon className="h-8 w-8 text-white hover:text-orange-600 hover:bg-white rounded-full ml-0.5" /></a>
            <div className="h-4"/>
            <a href="/media"><CameraIcon className="h-8 w-8 text-white hover:text-orange-600 hover:bg-white rounded-full ml-0.5"/></a>
        </div>
    )
}