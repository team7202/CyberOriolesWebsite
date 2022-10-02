import Constants from "./Constants";

export const getNews = async () => {
    const res = await fetch(`${Constants.SERVER.URL}/api/getNews`);
    const data = await res.json();
    return data;
}
