
const { ifCustomerHasCity, checkIfCustomerIsManager } = require("../dist/customers/utils")
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

describe("Customers Unit Test - checkIfCustomerIsManager", () => {
    it("checkIfCustomerIsManager - customer is manager", () => {
        const result = checkIfCustomerIsManager({ title: "main manager" })
        assert.equal(result, true);
    })

    it("checkIfCustomerIsManager - title not exist", () => {
        const result = checkIfCustomerIsManager({ _title: "main manager" })
        assert.equal(result, undefined);
    })

    it("checkIfCustomerIsManager - customer is not manager", () => {
        const result = checkIfCustomerIsManager({ title: "willi" })
        assert.equal(result, false);
    })

    it("checkIfCustomerIsManager - customer is manager case sensitive", () => {
        const result = checkIfCustomerIsManager({ title: "ManaGer" })
        assert.equal(result, true);
    })
})