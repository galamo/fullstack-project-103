import { getConnection } from "../../db/connection"

type SearchCustomerQuery = {
    job_title?: string,
    country_region?: string,
    city?: string
}

export async function searchCustomers(query: SearchCustomerQuery) {
    const connection = await getConnection();
    console.log("query obj", query)
    let values: string[] = []
    let queryArr: string[] = []
    console.log("queryArr ", queryArr)
    console.log("values", values)
    type Prop = keyof SearchCustomerQuery
    for (const property in query) {
        console.log("property", property)
        let propertyWIthType = property as Prop
        if (query[propertyWIthType]) {
            console.log("push", query[propertyWIthType], propertyWIthType)
            values.push(query[propertyWIthType])
            queryArr.push(`${propertyWIthType} = ? `)
        }
    }
    const q = queryArr.join(" AND ")
    const v = values.filter(v => v)
    console.log("query=>", q)
    console.log("values=>", v)
    const customers = await connection?.execute(`SELECT * FROM customers 
        ${v.length > 0 ? 'where ' : ' '}  
        ${q};`, values)
    const result = customers?.[0]
    return result
}

