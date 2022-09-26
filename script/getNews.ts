export const getNews = async () => {
    const res = await fetch(`${process.env.VERCEL_URL}/api/getNews`);
    const data = await res.json();
    return data;
}