export const deleteNews = async (id: string, token: string) => {
    await fetch(`${process.env.VERCEL_URL}/api/deleteNews?id=${id}&token=${token}`);
}