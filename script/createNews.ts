export const createNews = async (title: string, description: string, token: string) => {
    await fetch(`${process.env.VERCEL_URL}/api/createNews?title=${title}&description=${description}&token=${token}`);
}