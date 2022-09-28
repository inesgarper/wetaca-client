import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import authServices from "../../services/authServices"

const LogInForm = () => {

    const [loginForm, setLoginForm] = useState({
        password: '',
        email: ''
    })

    const { storeToken, authenticateUser } = useContext(AuthContext) || {}

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        authServices
            .login(loginForm.email, loginForm.password)
            .then((data) => {
                const token = data?.value
                token && storeToken(token)
                authenticateUser()
            })
            .catch(err => console.log(err))

        // authService
        //     .login(loginForm)
        //     .then(({ data }) => {
        //         storeToken(data.authToken)
        //         authenticateUser()
        //         setShowMessage(true)
        //         setMessageInfo({ title: 'Éxito', desc: 'Sesión iniciada correctamente' })
        //         navigate('/perfil')
        //         closeModal()
        //     })
        //     .catch(err => console.log(err))
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>EMAIL</label>
            <input type="email" name="email" value={loginForm.email} onChange={handleInputChange} />
            <label>CONTRASEÑA</label>
            <input type="password" name="password" value={loginForm.password} onChange={handleInputChange} />
            <button type="submit">Iniciar sesión</button>
        </form>
    )
}

export default LogInForm