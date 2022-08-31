import {
    HomeIcon,
    ClipboardListIcon
} from "@heroicons/react/solid";

export default function HomeBody(): JSX.Element {
    return (
        <div>
            <div className="h-24"></div>
            <h1 className="text-xl ml-10">
                <span className="text-white hover:text-orange-700">
                    Hello, Welcome to our Website!
                </span>
            </h1>
        </div>
    )
}