import { PhoneIcon } from "@heroicons/react/solid";

export default function FourOhFour(): JSX.Element {
    return (
        <div className="font-bold text-white">
            <div className="news-text">
                <h1 className="text-red-700">Error 404</h1>
                <p className="text-lg text-red-800">The resource you are looking for has been moved or does not exist. Use the buttons the side to navigate the website.</p>
            </div>
        </div>
    )
}