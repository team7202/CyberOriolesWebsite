export const getNews = async () => {
    const res = await fetch(`http://localhost:3000/api/getNews`);
    const data = await res.json();
    return data;
}