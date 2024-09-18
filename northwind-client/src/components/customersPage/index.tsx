import { useEffect, useState } from "react"
import css from "./style.module.css"
import { CustomerUI, getCustomersApi } from "./service"
import Table from 'react-bootstrap/Table';
import TableTHead from "./tableHead";
import { TableTBody } from "./tableBody";

export default function CustomerPage() {
    const [customers, setCustomers] = useState<Array<CustomerUI>>([])
    const [isLoadingCustomers, setIsLoadingCustomers] = useState(true)

    useEffect(() => {
        async function getCustomersData() {
            try {
                setIsLoadingCustomers(true)
                const result = await getCustomersApi()
                setCustomers(result)
                console.log(result)
            } catch (error) {
                console.log(error)
                alert("something went wrong!")
            } finally {
                setIsLoadingCustomers(false)
            }
        }
        getCustomersData()
    }, [])


    return <div>
        <div className={css.centerContent}>
            <h1> Customers Page</h1>
        </div>
        <div style={{ margin: "auto", width: "80%" }}>
            {isLoadingCustomers ? <h1> Loading...</h1> :
                <Table striped bordered hover variant="dark">
                    <TableTHead mapping={columnMapping} columns={Object.keys(customers[0])} />
                    <TableTBody data={customers} />
                </Table>
            }
        </div>
    </div>
}



const columnMapping: any = {
    id: "ID",
    company: { en: "Company", sp: "la company", fr: "companyk" },
    fullName: "Full Name",
    emailAddress: "Email Address",
    jobTitle: "Job Title",
    businessPhone: "Business Phone",
    city: "City",
    stateProvince: "State Province",
    zipCode: "Zip Code",
    country: "Country",
    faxNumber: "Fax (Dont use) Number"
}

