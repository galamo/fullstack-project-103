import express from "express"
import dotenv from "dotenv"
import { router as customersRouter } from "./customers"
dotenv.config()
const app = express()

app.get("/health-check", (req, res, next) => {
    return res.json({ message: "Ok" })
})

app.use("/customers", customersRouter)



app.listen(process.env.PORT)