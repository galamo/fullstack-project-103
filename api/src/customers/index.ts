import express from "express"
import { getCustomers } from "./handlers/getCustomers"

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const data = await getCustomers()
        res.json({ customers: data })
    } catch (error) {
        res.send("Something went wrong")
    }
})

// router.post("/",(CREATE A FLOW FOR NEW CUSTOMER)=>{})

export { router }