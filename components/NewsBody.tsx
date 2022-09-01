import {
    HomeIcon,
    ClipboardListIcon
} from "@heroicons/react/solid";

export default function HomeBody(): JSX.Element {
    return (
        <div>
            <div className="h-10"/>
            <div className="border border-white text-white news-body hover:bg-gray-900">
                <h1 className="news-text"><span className="hover:text-orange-600">No News Yet</span></h1>
            </div>
        </div>
    )
}