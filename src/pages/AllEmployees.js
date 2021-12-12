import React from "react"
import Employee from "../components/employee"



const AllEmployees = (props) => {
let total = 0

    return (
        <>
        {props.employees.map((employee) => {
            total += (employee.hours * employee.rate)
            return <Employee key={employee.id} employee={employee}/>
        })}
        <h2 style={{textAlign: "center"}}>TOTAL EMPLOYEE WAGES: ${total}</h2>
        </>
    ) 
}

export default AllEmployees;