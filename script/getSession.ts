export const getSession = async () => {
    const res = await fetch(`${process.env.VERCEL_URL}/api/getSession?pass=cyber`);
    const data = await res.json();
    return data;
}