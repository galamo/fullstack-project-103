"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifCustomerHasCity = ifCustomerHasCity;
exports.checkIfCustomerIsManager = checkIfCustomerIsManager;
function ifCustomerHasCity(customer, city) {
    if (!customer.city)
        return;
    return customer.city === city;
}
function checkIfCustomerIsManager(customer) {
    if (!customer.title)
        return;
    return customer === null || customer === void 0 ? void 0 : customer.title.toLowerCase().includes("manager");
}
