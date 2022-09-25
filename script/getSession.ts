export const getSession = async () => {
    const res = await fetch(`https://cyberorioles.com/api/getSession?pass=cyber`);
    const data = await res.json();
    return data;
}