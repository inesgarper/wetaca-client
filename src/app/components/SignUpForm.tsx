import { useState } from "react"
import authServices from "../services/authServices"

const SignUpForm = () => {

    const [signUpForm, setSignUpForm] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        birthDate: '',
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

        authServices
            .signup(signUpForm)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" name="name" value={signUpForm.name} onChange={handleInputChange} />
            <label>Apellido</label>
            <input type="text" name="lastName" value={signUpForm.lastName} onChange={handleInputChange} />
            <label>Email</label>
            <input type="email" name="email" value={signUpForm.email} onChange={handleInputChange} />
            <label>Contraseña</label>
            <input type="password" name="password" value={signUpForm.password} onChange={handleInputChange} />
            <label>Teléfono</label>
            <input type="tel" name="phoneNumber" value={signUpForm.phoneNumber} onChange={handleInputChange} />
            <label>Fecha de Nacimiento</label>
            <input type="date" name="birthDate" value={signUpForm.birthDate} onChange={handleInputChange} />

            <button type="submit">Iniciar sesión</button>
        </form>
    )
}

export default SignUpForm