import type { NextPage } from 'next'

const FourOhFour: NextPage = (props: any) => {
    return (
      <div className="h-[94vh] flex items-center justify-center">
            <span className="w-fit text-red-600 text-3xl mr-[0.5vw] border-r border-r-rounded-md border-r-red-700">404</span><span className="w-fit ml-[0.5vw] text-red-600 text-3xl">Page Not Found</span> 
      </div>
    )
}

export default FourOhFour;
