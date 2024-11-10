import express from "express"
import dotenv from "dotenv"
import { router as customersRouter } from "./customers"
import bodyParser from "body-parser"
import cors from "cors"
import { init } from "./db/mongo"
import { usersRouter } from "./users"
dotenv.config()
init()

const app = express()
console.log("Application Start")
app.use(cors())
// app.use(express.cookieParser());
app.use(bodyParser.json())
app.use(express.static('./src/public'))
app.get("/health-check", (req, res, next) => {
    return res.json({ message: "Server is up - Docker/Not" })
})

app.use("/login", usersRouter)
app.use((req, res, next) => {
    const harelLikeCookies = req.headers.cookie;
    const value = harelLikeCookies?.split("=")?.[1]
    if (value === "jwt-session-1234567") return next();
    else res.status(401).json({ message: "Bye Bye" })

})
app.use("/customers", customersRouter)


app.listen(process.env.PORT, () => {
    console.log(`Application Listen to Port: ${process.env.PORT}`)
})