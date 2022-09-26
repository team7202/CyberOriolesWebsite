export const getSession = async () => {
    const res = await fetch(`https://cyberorioles.com/api/getSession?pass=cyber`, {
        mode: "no-cors"
    });
    const data = await res.json();
    return data;
}