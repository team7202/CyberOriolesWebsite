import type { NextPage } from 'next'

const FourOhFour: NextPage = (props: any) => {
    return (
      <div className="h-[94vh] flex items-center justify-center">
            <span className="duration-1000 hover:duration-1000 w-fit text-red-600 hover:text-orange-600 text-3xl">
                <span className="pr-[0.5vw] border-r rounded-sm border-r-red-700 hover:border-r-orange-700">404</span><span className="ml-[0.5vw]">Page Not Found</span>
            </span>
      </div>
    )
}

export default FourOhFour;
