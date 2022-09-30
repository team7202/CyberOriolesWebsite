import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import Constants from "../scripts/Constants";
import { getNews } from "../scripts/getNews";

const News = (props: any) => {

    const {
        news
    } = props;


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const contentList: JSX.Element[] = [];

    news.map((e: any) => {
        contentList.push(
            <details className='mt-[1vh]' key={e.toString()}>
                <summary className='text-[3vh] w-fit text-white duration-500 hover:duration-500 hover:text-orange-600'>
                    <span className="">{e.title}</span>
                    <span className="text-white"> - <TimeAgo date={e.createdAt} className="text-gray-200" /></span>
                </summary>
                <div className='pt-[0.5vh] pb-[0.5vh] pr-[0.5vw] pl-[0.5vw] rounded-md cursor text-[3vh] text-neutral-500'>
                    {e.description}
                </div>
            </details>
        )
    });

    return (
        <div className='ml-[10vw] mt-[7vh] bg-stone-800 duration-[2000ms] hover:bg-[#111111] hover:duration-1000 w-[75vw] h-[75vh] rounded-md hover:animate-[float_1s_ease-in-out_infinite]'>
            <div className="border-b flex justify-center rounded-md">
                <h1 className="text-center text-[5vh] text-white border-b border-b-stone-700">News</h1>
            </div>
            <div className="ml-[1vw]">
                {contentList.map((res) => res)}
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const news = await getNews(Constants.SERVER.URL);
    return {
        props: { news }, // will be passed to the page component as props
    }
}

const ClientOnly = ({ children, ...delegated }: { children: any }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return <div {...delegated}>{children}</div>;
};

export default News;
