export const getNews = async () => {
    const res = await fetch(`http://localhost:3000/api/getNews`);
    const res = await fetch(`https://cyberorioles.com/api/getNews`);
    const data = await res.json();
    return data;
}
