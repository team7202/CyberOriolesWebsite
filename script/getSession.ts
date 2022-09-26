export const getSession = async () => {
    const res = await fetch(`https://cyberorioles.com/api/getSession?pass=cyber`, {
        method: "GET",
        credentials: "include",
    });
    const data = await res.json();
    return data;
}