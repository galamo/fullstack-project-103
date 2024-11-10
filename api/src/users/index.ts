import express from "express"
import login from "./handlers/login"

const usersRouter = express.Router()


usersRouter.post("/", async (req, res, next) => {
    try {
        const u: any = extractUser(req.body)
        const token = await login(u)
        res.cookie("token", token)
        res.json({ message: "ok" })
    } catch (error) {
        res.send("Something went wrong")
    }
})
// for testing only
usersRouter.get("/", async (req, res, next) => {
    try {
        const u = { userName: req.query.userName, password: req.query.password }
        const token = await login(u)
        res.cookie("token", token)
        res.json({ message: "ok" })
    } catch (error) {
        res.send("Something went wrong")
    }
})

usersRouter.get("/logout", async (req, res, next) => {
    try {
        res.clearCookie("token")
        res.json({ message: "ok" })
    } catch (error) {
        res.send("Something went wrong")
    }
})


function extractUser(body: any): any {
    const { userName, password, } = body;
    return { userName, password };
}

export { usersRouter }


