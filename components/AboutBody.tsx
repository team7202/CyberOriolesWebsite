export default function AboutBody(): JSX.Element {
    return (
        <div className="font-bold text-white">
            <div className="border-white border mt-5">
                <h1 className=" mt-5 text-center text-2xl hover:text-orange-600">
                    Who Are We?
                </h1>
                <p className="mt-1 ml-5 hover:text-orange-600 text-center">The Cyber Orioles is a highschool robotics team located in Morrice, Michigan</p>
            </div>
            <div className="border-white border mt-5">
                <div>
                    <h1 className=" mt-5 text-center text-2xl hover:text-orange-600">
                        What Do We Do?
                    </h1>
                    <p className="mt-1 ml-5 hover:text-orange-600 text-center">
                        You might be thinking, "All they do is make robots right? They're probably nerds who work on programming and all sort of complicated stuff."
                        You are quite incorrect however, to be a robotics team member you don't need to be smart at programming or anything like that.
                        We have team members who work on the electrical side of robotics
                    </p>
                </div>
            </div>
        </div>
    )
}