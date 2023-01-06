import Link from "next/link";

export default function FourOhFour() {
    
    if(typeof window !== 'undefined') {
        document.addEventListener("mousemove", (event) => {
            if(document.getElementById("background")) {
                document.getElementById("background")!.style.backgroundPositionX = -event.offsetX + "px";
                document.getElementById("background")!.style.backgroundPositionY = -event.offsetY + "px";
            }
        })
      }

    return(
        <main id="background" className="w-screen h-screen bg-[url('/images/background.jpeg')] flex justify-center items-center">
            <div className="bg-[rgba(234,88,12,0.9)] w-[calc(25vw+25vh)] h-[calc(15vw+15vh)] rounded-lg flex flex-col justify-center items-center gap-5 border-[calc(0.15vw+0.15vh)] border-black">
                <h1 className="text-red-600 text-[calc(2.5vw+2.5vh)] text-center">Error 404!</h1>
                <p className="text-black sm:text-[4vmin] text-center lg:text-lg">Looks like we couldn&apos;t find this page :(</p>
                <Link href={"/"} className="bg-black pl-[calc(0.5vw+0.5vh)] pt-[calc(0.5vw+0.5vh)] pr-[calc(0.5vw+0.5vh)] pb-[calc(0.5vw+0.5vh)] sm:mt-[calc(1.5vw+1.5vh)] lg:mt-[calc(1vw+1vh)] rounded-md">Home</Link>
            </div>
        </main>
    )
}
