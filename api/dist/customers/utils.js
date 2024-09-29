"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifCustomerHasCity = ifCustomerHasCity;
function ifCustomerHasCity(customer, city) {
    if (!customer.city)
        return;
    return customer.city === city;
}
// ifCustomerHasCity({city:"lasVegas"}, "lasVegas") => true
// ifCustomerHasCity({city:"lasVegas"}, "telaviv") => false
// ifCustomerHasCity({_city:"lasVegas"}, "lasVegas") => false
