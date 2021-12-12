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
        margin: "30px auto",
        padding: "2px"
    }

    return <div style={div}>
        <h1>{employee?.name}</h1>
        <h2>Position: {employee?.position}</h2>
        <h3>Hourly Rate: ${employee?.rate}</h3>
        <h3>Hours Worked: {employee?.hours}</h3>
        <button onClick={() => edit(employee)}>Edit</button>

        <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
            Fire
        </button>
        

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Terminate</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    Are you sure you want to fire this amazing employee?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => deleteEmployee(employee)}>Fire</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <button onClick={() => deleteEmployee(employee)}>Fire</button> */}
        <Link to="/">
            <button>Back</button>
        </Link>
    </div>
}

export default SingleEmployee;