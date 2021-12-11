import React from "react"
import Employee from "../components/employee"

const AllEmployees = (props) => {

    return props.employees.map((employee) => {
        return <Employee key={employee.id} employee={employee}/>
    })
}

export default AllEmployees;