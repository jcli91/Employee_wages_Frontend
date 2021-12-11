import React from "react"
import {useState} from "react";
import {useNavigate} from "react-router-dom"

const Form = ({initialEmployee, handleSubmit, buttonLabel}) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialEmployee)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        navigate("/")
    }
    

    return <form onSubmit={handleSubmission}>
        <h4>Name</h4>
        <input
        type="text"
        onChange={handleChange}
        value={formData.name}
        name="name"
        />
        <h4>Position</h4>
        <input
        type="text"
        onChange={handleChange}
        value={formData.position}
        name="position"
        />
        <h4>Rate</h4>
        <input
        type="number"
        onChange={handleChange}
        value={formData.rate}
        name="rate"
        />
        <h4>Hours</h4>
        <input
        type="number"
        onChange={handleChange}
        value={formData.hours}
        name="hours"
        />
        <input type="submit" value={buttonLabel}/>
    </form>
}

export default Form;