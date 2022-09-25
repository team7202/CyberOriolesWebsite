export const deleteNews = async (id: string, token: string) => {
    await fetch(`https://cyberorioles.com/api/deleteNews?id=${id}&token=${token}`);
}