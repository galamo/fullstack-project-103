import { getConnection } from "../../db/connection"

type SearchCustomerQuery = {
    job_title?: string,
    country_region?: string,
    city?: string
}

export async function searchCustomers(query: SearchCustomerQuery) {
    const connection = await getConnection();

    const jobTitleWhereQuery = query.job_title ? `job_title = ?` : "";
    const countryRegionWhereQuery = query.country_region ? `country_region = ?` : "";
    const cityWhereQuery = query.city ? `city = ?` : "";
    const q = [jobTitleWhereQuery, countryRegionWhereQuery, cityWhereQuery].filter(q => q)
    const queryWithAnd = q.join(" AND ")
    const values = Object.values(query).filter(v => v)
    console.log(`SELECT * FROM customers where 
        ${queryWithAnd}`)
    // NOT WORKING YET
    const customers = await connection?.execute(`SELECT * FROM customers where 
        ${queryWithAnd};`, values)
    const result = customers?.[0]
    return result
}

