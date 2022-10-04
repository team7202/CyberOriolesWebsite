import type { NextPage } from 'next'

const FourOhFour: NextPage = (props: any) => {
    return (
      <div className="h-[94vh] flex items-center justify-center">
            <span className="w-fit text-red-600 text-3xl">
                <span className="pr-[0.5vw] border-r rounded-sm border-r-red-700">404</span><span className="ml-[0.5vw]">Page Not Found</span>
            </span>
      </div>
    )
}

export default FourOhFour;
