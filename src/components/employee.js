import React from "react"
import { Link } from "react-router-dom";

const Employee = ({employee}) => {

    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "60%",
      };

    return <div style={div}>
        <Link to ={`/employee/${employee.id}`}>
            <h1>{employee.name}</h1>
        </Link>
        <h2>Position: {employee.position}</h2>
        <h3>Total Wages: ${employee.rate * employee.hours}</h3>
    </div>
}

export default Employee;