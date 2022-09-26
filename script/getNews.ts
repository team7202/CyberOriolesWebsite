export const getNews = async () => {
    const res = await fetch(`https://cyberorioles.com/api/getNews`, {
        method: "GET",
        credentials: "include",
    });
    const data = await res.json();
    return data;
}