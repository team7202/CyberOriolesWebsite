import {
    HomeIcon,
    ClipboardListIcon,
    QuestionMarkCircleIcon,
    VideoCameraIcon
} from "@heroicons/react/solid";
import Link from "next/link";
import AboutBody from "./AboutBody";
import HomeBody from "./HomeBody";
import Sidebar from "./Sidebar";

export default function Navbar(body: JSX.Element | null): JSX.Element {
    if (body == null) {
        body = <div />
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="h-10 w-full border border-gray-700 justify-center">
                <h1 className="text-center text-2xl">
                    <Link href="/" className="rounded-md hover:bg-gray-900 font-bold">
                        <div>
                            <span className="text-white hover:text-orange-600 cursor-pointer">
                                Cyber
                            </span>
                            <span className="text-orange-600 hover:text-white cursor-pointer">
                                Orioles
                            </span>
                        </div>
                    </Link>
                </h1>
                {body}
            </div>
        </div>
    )
}