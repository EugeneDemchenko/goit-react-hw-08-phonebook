import { useState } from "react"
import { useDispatch } from "react-redux"
import { registerUser } from "../redux/auth/authOperations"
// import { registerUserApi } from "../utils/mockApi"

const RegisterPage = () => {

    const dispatch = useDispatch()

    const [form, setForm] = useState({ name: "", email: "", password: "" })
    
    const handleChange =(e) => {
        const { name, value } = e.target
        setForm((prev) => ({...prev, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUser(form))
    }

    return <>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange} 
                    placeholder="Input your name"/>
            </label>
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange} 
                    placeholder="Input your e-mail"/>
            </label>
            <label>
                Password
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange} 
                    placeholder="Input your password"/>
            </label>
            <button type="submit">Send</button>
        </form>
    </>
}

export default RegisterPage