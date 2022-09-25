export const generateRandomToken = (rounds: Number) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let res = "";
    
    for(let i = 0; i < rounds; i++) {
        res += chars[Math.floor(Math.random() * (chars.length - 1))]
    }
    return res;
}