import type { NextPage } from 'next'

const FourOhFour: NextPage = (props: any) => {
    return (
      <div className="h-[94vh] flex items-center justify-center">
        <span className="w-fit text-red-600 text-3xl">404</span> 
      </div>
    )
}

export default FourOhFour;
