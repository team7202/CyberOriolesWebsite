import { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import NewsModel from "../model/NewsModel";

const Modal = ({ show, onClose, children }: { show: boolean, onClose: any, children: any }) => {

    const [isBrowser, setIsBrowser] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e: any) => {
        e.preventDefault();
        onClose();
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (title == "") {
            document.getElementById("title")!.style.color = "rgb(220 38 38)"
            return;
        }

        if(description == "") {
            document.getElementById("title")!.style.color = "white";
            document.getElementById("description")!.style.color = "rgb(220 38 38)";
            return;

        }

        document.getElementById("title")!.style.color = "white";
        document.getElementById("description")!.style.color = "white";
    }

    const handleChange = () => {
    }

    const modalContent = show ? (
        <div className="absolute w-[100vw] h-[100vh] bg-[rgba(0.5,0.5,0.5,0.9)] top-0 text-white select-none font-[poppins]">
            <a href="#" onClick={handleCloseClick} className="absolute translate-x-[95vw] translate-y-[0.5vh] text-[5vh] flex">
                <AiFillCloseCircle />
            </a>
            <div className="border-b text-center flex justify-center rounded-md">
                <span className="text-[4vh] text-center">News Settings</span>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <div className="flex justify-center">
                        <div className="text-center flex text-[3vh] mt-[23vh]">
                            <h1 id="title">Title</h1>
                        </div>
                    </div>
                    <input className="w-[20vw] ml-[40vw] rounded-md duration-500 bg-stone-900 focus:rounded-xl focus:border-[0.05vw] focus:border-white focus:duration-1000 text-center text-[2.5vh] pl-[0.5vw] pr-[0.5vw] pb-[0.5vh] pt-[0.5vh] outline-none" value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
                    <div className="flex justify-center">
                        <div className="text-center flex text-[3vh] mt-[5vh]">
                            <h1 id="description">Description</h1>
                        </div>
                    </div>
                    <input className="w-[20vw] ml-[40vw] rounded-md duration-500 bg-stone-900 focus:rounded-xl focus:border-[0.05vw] focus:border-white focus:duration-1000 text-center text-[2.5vh] pl-[0.5vw] pr-[0.5vw] pb-[0.5vh] pt-[0.5vh] outline-none" value={description} onChange={(e) => { setDescription(e.target.value); handleChange() }}></input>
                </div>
                <div className="flex">
                    <div className="w-[45.5vw] h-[2vh]" />
                    <button className="text-center text-[2vh] w-fit mt-[3vh] pl-[2vw] pr-[2vw] pb-[2vh] pt-[2vh] rounded-lg border-[0.2vw] border-transparent bg-orange-500 duration-500 hover:bg-orange-600 hover:duration-500 hover:border-[0.2vw] hover:border-green-700 hover:rounded-xl active:bg-orange-700 active:border-blue-700 active:rounded-2xl active:duration-100">Submit</button>
                    <div className="w-[45.5vw] h-[2vh]" />
                </div>
            </form >
        </div >
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("news-root")!
        );
    } else {
        return null;
    }
};

export default Modal;