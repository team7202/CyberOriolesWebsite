import SessionModel from "../model/SessionModel"

export const updateSession = async () => {
    await fetch(`${process.env.VERCEL_URL}/api/updateSession?pass=cyber`)
}