export const getNews = async () => {
    const res = await fetch(`https://cyberorioles.com/api/getNews`);
    const data = await res.json();
    return data;
}