
const assert = require("assert")
const axios = require("axios")

describe("Customers Api", () => {
    it("/customers - return 200 ok", async () => {
        const { data, status } = await axios.get("http://localhost:3500/customers")
        assert.equal(status, 200)
        assert.equal(Array.isArray(data.customers), true)
        assert.equal(typeof data.customers[0].company, 'string')
        assert.equal(data?.customers?.length > 0, true)
    })
    it("/customers?type=short - return 200 ok", async () => {
        const { data, status } = await axios.get("http://localhost:3500/customers?type=short")
        assert.equal(status, 200)
        assert.equal(Array.isArray(data.customers), true)
        assert.equal(typeof data.customers[0].id, 'number')
        assert.equal(Object.keys(data.customers[0]).length, 1)
        assert.equal(data?.customers?.length > 0, true)
    })
    it("/customers?type=sort - return 400 type invalid", async () => {
        try {
            await axios.get("http://localhost:3500/customers?type=sort")
            throw new Error()
        } catch (error) {
            assert.equal(error.status, 400)
        }

    })

    it("/customers/search?jobTitle+city+county_region - return 200 ok", async () => {
        const generateNumber = Math.ceil(Math.random() * 999)
        // push this data into the DB
        const expectedCustomer = {
            "id": 11,
            "company": "Company K",
            "last_name": "Krschne",
            "first_name": "Peter",
            "email_address": null,
            "job_title": `Purchasing Manager${generateNumber}`,
            "business_phone": "(123)555-0100",
            "home_phone": null,
            "mobile_phone": null,
            "fax_number": "(123)555-0101",
            "address": "123 11th Street",
            "city": `Miami${generateNumber}`,
            "state_province": "FL",
            "zip_postal_code": "99999",
            "country_region": `USA${generateNumber}`,
            "web_page": null,
            "notes": null,
            "attachments": {
                "type": "Buffer",
                "data": []
            }
        }
        const { data, status } = await axios
            .get(`http://localhost:3500/customers/search?job_title=Purchasing Manager${generateNumber}&city=Miami${generateNumber}&country_region=USA${generateNumber}`)
        assert.equal(status, 200)
        assert.equal(Array.isArray(data.customers), true)
        assert.equal(data?.customers?.length > 0, true)
        assert.deepEqual(expectedCustomer, data.customers[0])
    })
})

