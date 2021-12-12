import AllEmployees from "./pages/AllEmployees"
import SingleEmployee from "./pages/SingleEmployee"
import Form from "./pages/Form"

import { useState, useEffect } from "react"
import { Route, Routes, Link, useNavigate } from 'react-router-dom'

const h1 = {
  textAlign: "center",
  margin: "10px",
  fontSize: "55px",
  padding: "5px"
}

const button = {
  backgroundColor: "grey",
  display: "block",
  margin: "0px auto",
  border: "2px solid grey"
}

function App() {

  const navigate = useNavigate()
  
  const url = "https://jl-employees-backend.herokuapp.com/employees/"

  const [employees, setEmployees] = useState([])

  const nullEmployee = {
    name: "",
    position: "",
    rate: "",
    hours: "",
  }
  const [targetEmployee, setTargetEmployee] = useState(nullEmployee)

  const getEmployees = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setEmployees(data);
  }

  const addEmployees = async (newEmployee) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployee)
    });
    getEmployees()
  }

  const getTargetEmployee = (employee) => {
    setTargetEmployee(employee);
    navigate("/edit");
  }

  const updateEmployee = async (employee) => {
    await fetch(url + employee.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    getEmployees();
  };

  const deleteEmployee = async (employee) => {
    // window.confirm("Are you sure you want to fire this amazing employee?")
    await fetch(url + employee.id, {
      method: "delete"
    })

    getEmployees()
    navigate("/")
  }
  
  useEffect(() => {
    getEmployees()
  }, [])

  return (

    <div className="App">
      <h1 style={h1}>Employees</h1>
      <Link to="/new"><button style={button}>New Employee</button></Link>
      <Routes>
        <Route path="/" element={<AllEmployees employees={employees} />} />
        <Route path="/employee/:id" element={<SingleEmployee employees={employees} edit={getTargetEmployee} deleteEmployee={deleteEmployee}/>} />
        <Route path="/new" element={<Form
        initialEmployee={nullEmployee}
        handleSubmit={addEmployees}
        buttonLabel="Add"
        />} />
        <Route path="/edit" element={<Form
        initialEmployee={targetEmployee}
        handleSubmit={updateEmployee}
        buttonLabel="Update"
        />} />
      </Routes>

    </div>
  );
}

export default App;
