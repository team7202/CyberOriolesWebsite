export default function Navbar() {

    function handleNavClick(href: string) {
        location.href = href;
      }

    return (
        <div className="flex select-none">
            <div className="w-[95vw] h-[7vh] mt-[3vh] rounded-lg bg-orange-600 ml-[2.5vw] fixed border-black border-2">
                <div className="mt-[0.5vh]">
                    <button className="ml-[2vw] font-[poppins] text-white rounded-md px-[0.5vw] py-[0.5vh] hover:bg-[rgba(41,37,36,0.6)] border-2 border-transparent hover:border-[rgba(50,50,50,0.5)]" onClick={(e) => location.href = "/"}>Home</button>
                    <button className="ml-[4vw] font-[poppins] text-white rounded-md px-[0.5vw] py-[0.5vh] hover:bg-[rgba(41,37,36,0.6)] border-2 border-transparent hover:border-[rgba(50,50,50,0.5)]" onClick={(e) => location.href = "/news"}>News</button>
                    <button className="ml-[4vw] font-[poppins] text-white rounded-md px-[0.5vw] py-[0.5vh] hover:bg-[rgba(41,37,36,0.6)] border-2 border-transparent hover:border-[rgba(50,50,50,0.5)]" onClick={(e) => location.href = "/media"}>Media</button>
                    <button className="ml-[4vw] font-[poppins] text-white rounded-md px-[0.5vw] py-[0.5vh] hover:bg-[rgba(41,37,36,0.6)] border-2 border-transparent hover:border-[rgba(50,50,50,0.5)]" onClick={(e) => location.href = "/sponsors"}>Sponsors</button>
                    <button className="ml-[4vw] font-[poppins] text-white rounded-md px-[0.5vw] py-[0.5vh] hover:bg-[rgba(41,37,36,0.6)] border-2 border-transparent hover:border-[rgba(50,50,50,0.5)]" onClick={(e) => location.href = "/contact"}>Contact</button>
                </div>
            </div>
        </div>
    )
}