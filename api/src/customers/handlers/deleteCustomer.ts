import { getConnection } from "../../db/connection"



export async function deleteCustomer(customerId: number) {
    if (typeof customerId !== 'number') throw new Error("customerId must be Number")
    const query = `DELETE FROM customers WHERE (id = ?)`
    const connection = await getConnection();
    const result = await connection?.execute(query, [customerId])
    // @ts-ignore
    return result[0].affectedRows
}