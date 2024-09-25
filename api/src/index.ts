import express from "express"
import dotenv from "dotenv"
import { router as customersRouter } from "./customers"
import bodyParser from "body-parser"
import cors from "cors"
dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get("/health-check", (req, res, next) => {
    return res.json({ message: "Server is up - Docker/Not" })
})

app.use("/customers", customersRouter)



app.listen(process.env.PORT)