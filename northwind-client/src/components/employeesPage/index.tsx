import { useEffect, useState } from "react"
import css from "./style.module.css"
import Table from 'react-bootstrap/Table';
import TableTHead from "../customersPage/tableHead";
import { TableTBody } from "../customersPage/tableBody";

const employees = [{ employeeId: "123", name: "Wili" }, { employeeId: "111", name: "Harel" }]

export default function EmployeesPage() {
    return <div>
        <div className={css.centerContent}>
            <h1> Employees Page</h1>
        </div>
        <div style={{ margin: "auto", width: "80%" }}>
            <Table striped bordered hover variant="dark">
                <TableTHead mapping={{ employeeId: "Id", name: "Name" }} columns={Object.keys(employees[0])} />
                <TableTBody data={employees} />
            </Table>

        </div>
    </div >
}




