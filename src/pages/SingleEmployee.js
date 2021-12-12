import React from "react"
import { Link, useParams } from "react-router-dom"


const SingleEmployee = ({ employees, edit, deleteEmployee }) => {

    const params = useParams()
    const id = parseInt(params.id)

    const employee = employees.find((p) => p.id === id)

    const div = {
        textAlign: "center",
        border: "3px solid blue",
        width: "60%",
        margin: "30px auto"
    }

    return <div style={div}>
        <h1>{employee?.name}</h1>
        <h2>Position: {employee?.position}</h2>
        <h3>Hourly Rate: ${employee?.rate}</h3>
        <h3>Hours Worked: {employee?.hours}</h3>
        <button onClick={() => edit(employee)}>Edit</button>
        <button onClick={() => deleteEmployee(employee)}>Fire</button>
        <Link to="/">
            <button>Back</button>
        </Link>
    </div>
}

export default SingleEmployee;