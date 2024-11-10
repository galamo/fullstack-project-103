import { UsersModel } from "../../db/mongo";



export default async function login(user: any) {
    const result = await UsersModel.findOne({ userName: user.userName, password: user.password })
    if (result) {
        return "jwt-session-1234567"
    } else {
        throw new Error("User is not authorized")
    }
}