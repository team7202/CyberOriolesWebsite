import { GetServerSideProps, NextPage } from "next";
import { AppContext } from "next/app";
import { useEffect, useMemo, useRef, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import fetch from "node-fetch";
import { getNews } from "../script/getNews";
import cookie from 'js-cookie';
import { ScriptProps } from "next/script";
import TimeAgo from "react-timeago";
import NewsSettings from "../components/NewsSettings";

interface Props {
    news: any
}

const News = ({ news }: Props) => {

    // console.log(news);

    const [content, setContent] = useState<JSX.Element[]>();
    const [showModal, setShowModal] = useState(false);

    const icon = cookie.get("session") == "none" || cookie.get("session") == null ? <AiFillPlusCircle className="absolute translate-x-[70vw] text-[5vh] mt-[1.5vh] text-white duration-1000 hover:text-orange-600 hover:duration-500 hover:cursor-pointer" onClick={(e) => setShowModal(true)} /> : '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const contentList: JSX.Element[] = [];

    // const news = [{
    //     title: "First News Announcement",
    //     description: "This is the first successful news announcemnet"
    // }]

    news.map((e: any) => {
        console.log(e);
        contentList.push(
            <details className='mt-[1vh]'>
                <summary className='text-[3vh] w-fit text-white duration-500 hover:duration-500 hover:text-orange-600'>
                    <span className="">{e.news.title}</span>
                    <span className="text-white"> - <TimeAgo date={e.news._createdAt} className="text-gray-200" /></span>
                </summary>
                <div className='pt-[0.5vh] pb-[0.5vh] pr-[0.5vw] pl-[0.5vw] rounded-md cursor text-[3vh] text-neutral-500'>
                    {e.news.description}
                </div>
            </details>
        )
    })

    useEffect(() => {
        setContent(cookie.get("session") == "none" || cookie.get("session") == null ? contentList : [<div key="" className="text-[10vh] text-center mt-[20vh] text-white">No News Found</div>]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contentList, cookie.get("session")])

    return (
        <div className=' ml-[10vw] mt-[7vh] bg-stone-800 duration-[2000ms] hover:bg-[#111111] hover:duration-1000 w-[75vw] h-[75vh] rounded-md'>
            {icon}
            <NewsSettings
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                Hello from the modal!
            </NewsSettings>
            <div className="border-b flex justify-center rounded-md">
                <h1 className="text-center text-[5vh] text-white border-b border-b-stone-700">News</h1>
            </div>
            <div className="ml-[1vw]">
                {content}
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const news = await getNews();
    return {
        props: { news }, // will be passed to the page component as props
    }
}

export default News;