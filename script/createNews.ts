export const createNews = async (title: string, description: string, token: string) => {
    await fetch(`https://cyberorioles.com/api/createNews?title=${title}&description=${description}&token=${token}`, {
        method: "GET",
        credentials: "include",
    });
}