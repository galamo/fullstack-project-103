import { getConnection } from "../../db/connection"

export type CustomerType = {
    company: string,
    firstName: string,
    lastName: string,
    email: string,
    jobTitle: string,
}

export async function createCustomer(customer: CustomerType) {
    const query = `INSERT INTO customers 
    (company, last_name, first_name, email_address, job_title)
     VALUES (?, ?, ?, ?, ?);`
    const connection = await getConnection();
    const result = await connection?.execute(query,
        [customer.company, customer.firstName, customer.lastName, customer.email, customer.jobTitle])

    // @ts-ignore
    return result[0].insertId
}