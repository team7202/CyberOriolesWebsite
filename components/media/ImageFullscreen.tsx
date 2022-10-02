import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";

export default function ImageFullscreen({ show, url, onClose }: { show: boolean, url: string, onClose: CallableFunction }) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <div className="absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.85)] select-none">
            <AiFillCloseCircle className="duration-1000 hover:duration-1000 ml-[90vw] mt-[2.5vh] absolute text-[5vh] text-white hover:text-orange-600 hover:cursor-pointer" onClick={(e) => handleCloseClick(e)}/>
            <div className="flex justify-center items-center h-full">
                <img src={url} className="w-[40vw] h-[40vw]" />
            </div>
        </div>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("root")!
        );
    } else {
        return null;
    }
};