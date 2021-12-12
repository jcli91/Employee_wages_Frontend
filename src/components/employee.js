import React from "react"
import { Link } from "react-router-dom";

const Employee = ({employee}) => {

    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "50%",
        borderRadius: "30px"
      };

    return <div style={div}>
        <Link to ={`/employee/${employee.id}`}>
            <h1>{employee.name}</h1>
        </Link>
        <h3>Position: {employee.position}</h3>
        <h3>Total Wages: ${employee.rate * employee.hours}</h3>
    </div>
}

export default Employee;