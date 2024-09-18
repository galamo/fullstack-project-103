import axios from "axios"
const URL = "http://localhost:3500/customers"

export type CustomerApi = typeof template
export type CustomerUI = {
    id: number,
    company: string,
    fullName: string,
    emailAddress: string,
    jobTitle: string,
    businessPhone: string,
    city: string,
    stateProvince: string,
    zipCode: string,
    country: string,
    faxNumber: string
}

export async function getCustomersApi(): Promise<Array<CustomerUI>> {
    const result = await axios.get<{ customers: CustomerApi[] }>(URL)
    const data = result?.data?.customers.map(c => {
        return {
            id: c.id,
            company: c.company,
            fullName: c.first_name + " " + c.last_name,
            emailAddress: c.email_address,
            jobTitle: c.job_title,
            businessPhone: c.business_phone,
            city: c.city,
            stateProvince: c.state_province,
            zipCode: c.zip_postal_code,
            country: c.country_region,
            faxNumber: c.fax_number
        }
    })
    return data;
}

const template = {
    "id": 27,
    "company": "Company AA",
    "last_name": "Toh",
    "first_name": "Karen",
    "email_address": "email",
    "job_title": "Purchasing Manager",
    "business_phone": "(123)555-0100",
    "home_phone": null,
    "mobile_phone": null,
    "fax_number": "(123)555-0101",
    "address": "789 27th Street",
    "city": "Las Vegas",
    "state_province": "NV",
    "zip_postal_code": "99999",
    "country_region": "USA",
    "web_page": null,
    "notes": null,
    "attachments": {
        "type": "Buffer",
        "data": []
    }
}