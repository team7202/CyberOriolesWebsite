import SessionModel from "../model/SessionModel"

export const updateSession = async () => {
    await fetch(`https://cyberorioles.com/api/updateSession?pass=cyber`, {
        method: "GET",
        credentials: "include",
    })
}