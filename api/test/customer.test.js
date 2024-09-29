
const { ifCustomerHasCity } = require("../dist/customers/utils")
const assert = require("assert")

describe("Customers Unit Test - ifCustomerHasCity", () => {
    it("ifCustomerHasCity - city exist and match", () => {
        const result = ifCustomerHasCity({ city: "LasVegas" }, "LasVegas")
        assert.equal(result, true);
    })

    it("ifCustomerHasCity - city exist and NOT match", () => {
        const result = ifCustomerHasCity({ city: "LasVegas" }, "LasVegas2")
        assert.notEqual(result, true);
    })

    it("ifCustomerHasCity - city key not exist", () => {
        const result = ifCustomerHasCity({ _city: "LasVegas" }, "LasVegas")
        assert.equal(result, undefined);
    })
})