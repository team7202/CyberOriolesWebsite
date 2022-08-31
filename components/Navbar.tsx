import {
    HomeIcon,
    ClipboardListIcon
} from "@heroicons/react/solid";
import HomeBody from "./HomeBody";

export default function (): JSX.Element {
    return (
        <div className="flex">
            <div className="w-10 border border-gray-700 bg-black h-screen">
                <HomeIcon className="h-8 w-8 text-white hover:text-orange-600 hover:bg-white rounded-full ml-0.5 cursor-pointer" />
                <div className="h-4"></div>
                <ClipboardListIcon className="h-8 w-8 text-white hover:text-orange-600 hover:bg-white rounded-full ml-0.5 cursor-pointer" />
            </div>
            <div className="h-10 w-full border border-gray-700 justify-center">
                <h1 className="text-center text-2xl">
                    <span className="text-white cursor-pointer">
                        Cyber
                    </span>
                    <span className="text-orange-600 cursor-pointer">
                        Orioles
                    </span>
                </h1>
                <HomeBody/>
            </div>
        </div>
    )
}