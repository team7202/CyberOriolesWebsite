import Constants from "./Constants";

export const getImages = async () => {
    const res = await fetch(`${Constants.SERVER.URL}/api/getImages`);
    const data = await res.json();
    return data;
}
