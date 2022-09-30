export const getNews = async (url: string) => {
    const res = await fetch(`${url}/api/getNews`);
    const data = await res.json();
    return data;
}
