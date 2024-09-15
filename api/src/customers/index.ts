import express from "express"
import { getCustomers } from "./handlers/getCustomers"
import { createCustomer, CustomerType } from "./handlers/createCustomer"
import { deleteCustomer } from "./handlers/deleteCustomer"
import { updateCustomer } from "./handlers/updateCustomer"

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const data = await getCustomers()
        res.json({ customers: data })
    } catch (error) {
        res.send("Something went wrong")
    }
})
router.post("/", async (req, res, next) => {
    try {
        const newCustomer: CustomerType = extractCustomer(req.body)
        const result = await createCustomer(newCustomer)
        res.json({ result })
    } catch (error) {
        res.send("Something went wrong")
    }
})
router.delete("/:idToDelete", async (req, res, next) => {
    try {
        const affectedRows = await deleteCustomer(+req.params.idToDelete)
        res.json({ affectedRows })
    } catch (error) {
        res.send("Something went wrong")
    }
})
router.put("/:idToUpdate", async (req, res, next) => {
    try {
        console.log("put")
        const customerToUpdate = extractCustomer(req.body)
        console.log(customerToUpdate, req.params.idToUpdate)
        const affectedRows = await updateCustomer(+req.params.idToUpdate, customerToUpdate)
        res.json({ affectedRows })
    } catch (error) {
        console.log(error)
        res.send("Something went wrong")
    }
})


function extractCustomer(body: any): CustomerType {
    const { firstName, lastName, company, email, jobTitle } = body;
    return { firstName, lastName, company, email, jobTitle };
}

export { router }