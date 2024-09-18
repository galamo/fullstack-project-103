import { getConnection } from "../../db/connection"
import { CustomerType } from "./createCustomer";



export async function updateCustomer(customerId: number, customer: CustomerType) {
    console.log(customerId)
    if (isNaN(customerId)) throw new Error("Input validation error")
    const query = `UPDATE customers
    SET company = ?, job_title = ?, first_name = ?, last_name = ?, email_address = ? 
    WHERE (id = ?)`
    const connection = await getConnection();
    const result = await connection?.execute(query,
        [customer.company, customer.jobTitle, customer.firstName,
        customer.lastName, customer.email, customerId])
    // @ts-ignore
    return result[0]
}


