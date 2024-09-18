import { useState } from 'react'

import './App.css'
import CustomerPage from './components/customersPage'
import EmployeesPage from './components/employeesPage'

function App() {

    return (
        <>
            <div>
                <CustomerPage />
                <EmployeesPage />
            </div>
        </>
    )
}

export default App
