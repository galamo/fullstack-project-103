export function ifCustomerHasCity(customer: { city: string }, city: string) {
    if (!customer.city) return;
    return customer.city === city;
}

export function checkIfCustomerIsManager(customer: { title: string }) {
    if (!customer.title) return;
    return customer?.title.toLowerCase().includes("manager")
}




