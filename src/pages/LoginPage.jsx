import { useState } from "react"
import { loginUserApi } from "../utils/mockApi"

const LoginPage = () => {

    const [form, setForm] = useState({ name: "", email: "", password: "" })
    
    const handleChange =(e) => {
        const { name, value } = e.target
        setForm((prev) => ({...prev, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        loginUserApi(form)
    }

    return <>
        <h1>LogIn</h1>
        <form onSubmit={handleSubmit}>
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

export default LoginPage