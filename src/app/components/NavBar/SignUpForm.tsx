import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import authServices from "../../services/authServices"

const SignUpForm = () => {

    const [signUpForm, setSignUpForm] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: 0,
        birthDate: new Date(),
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setSignUpForm({
            ...signUpForm,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        // authServices
        //     .signUp()
        //     .then((data) => {
        //         const token = data?.value
        //         token && storeToken(token)
        //         authenticateUser()
        //     })
        //     .catch(err => console.log(err))
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="email" name="email" value={loginForm.email} onChange={handleInputChange} />
            <label>Apellido</label>
            <input type="password" name="password" value={loginForm.password} onChange={handleInputChange} />
            <button type="submit">Iniciar sesión</button>
        </form>
    )
}

export default SignUpForm