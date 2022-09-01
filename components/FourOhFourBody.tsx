import { PhoneIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function FourOhFour(): JSX.Element {
    return (
        <div className="font-bold text-white">
            <div className="news-text">
                <Link href="/">
                    <div className="rounded-full hover:bg-black cursor-pointer">
                        <h1 className="text-red-700 hover:text-orange-700">Error 404</h1>
                        <p className="text-lg text-red-800 hover:text-orange-800">The resource you are looking for has been moved or does not exist. Use the buttons the side to navigate the website.</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}