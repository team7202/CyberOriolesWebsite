import { PhoneIcon } from "@heroicons/react/solid";

export default function AboutBody(): JSX.Element {
    return (
        <div className="font-bold text-white content-box border-white border hover:bg-black rounded-xl">
            <div>
                <h1 className=" text-center text-2xl hover:text-orange-600">
                    Who Are We?
                </h1>
                {/* <hr></hr> */}
                <p className="mt-1 ml-5 hover:text-orange-600 text-center">The Cyber Orioles is a highschool robotics team located in Morrice, Michigan.</p>
            </div>
            <hr></hr>
            <div className="">
                <h1 className=" text-center text-2xl hover:text-orange-600">
                    What Do We Do?
                </h1>
                {/* <hr></hr> */}
                <p className="mt-1 ml-5 hover:text-orange-600 text-center">
                    You might be thinking, "All they do is make robots right? They're probably nerds who work on programming and all sort of complicated stuff."
                    You are quite incorrect however, to be a robotics team member you don't need to be smart at programming or anything like that.
                    We have team members who work on the electrical side, the welding side, and we even have someone who works on padding for our robot.
                    If you want to join robotics but you feel like it's too complicated you should just give it a try!
                </p>
            </div>
            <hr></hr>
            <div className="">
                <h1 className="text-center text-2xl hover:text-orange-600">
                    Who Are Our Sponsors?
                </h1>
                <li className="text-center hover:text-orange-600">
                    Coming Soon
                </li>
            </div>
            <hr></hr>
            <div className="">
                <h1 className="text-center text-2xl hover:text-orange-600">
                    Where Can We Contact You?
                </h1>
                <p className="text-center hover:text-orange-600">
                    <span>Click the <PhoneIcon className="w-5 h-5 inline" /> icon on the sidebar to see a list of contact information</span>
                    </p>
            </div>
        </div>
    )
}