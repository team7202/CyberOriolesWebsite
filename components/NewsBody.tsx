import {
    HomeIcon,
    ClipboardListIcon
} from "@heroicons/react/solid";
import Link from "next/link";

export default function HomeBody(): JSX.Element {
    return (
        <div>
            <div className="h-10" />
            <Link href="/">
                <div className="border border-white text-white news-body hover:bg-black rounded-xl cursor-pointer">
                    <h1 className="news-text"><span className="hover:text-orange-600">No News Yet</span></h1>
                </div>
            </Link>
        </div>
    )
}