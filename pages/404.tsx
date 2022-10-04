import type { NextPage } from 'next'

const FourOhFour: NextPage = (props: any) => {
    return (
      <div className="h-[94vh] flex items-center justify-center">
            <span className="w-fit text-red-600 text-3xl pr-[2vw] border-r">404</span className="w-fit text-red-600 text-3xl"><span>Page Not Found</span> 
      </div>
    )
}

export default FourOhFour;
