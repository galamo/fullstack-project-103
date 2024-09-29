export function ifCustomerHasCity(customer: { city: string }, city: string) {
    if (!customer.city) return;
    return customer.city === city;
}

export function checkIfCustomerIsManager(customer: { title: string }) {
    if (!customer.title) return;
    return customer?.title.includes("manager")
}

// checkIfCustomerIsManager({title:"main manager"}) => true
// checkIfCustomerIsManager({_title:"main manager"}) => undefined
// checkIfCustomerIsManager({title:"seller"}) => false
// checkIfCustomerIsManager({title:"Second Manager"}) => true



