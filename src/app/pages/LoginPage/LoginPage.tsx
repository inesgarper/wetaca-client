import { useContext } from "react"
import LogInForm from "../../components/LogInForm/LogInForm"
import { CartContext } from "../../contexts/cart.context"


const LoginPage = () => {

    return (
        <>
            <h1>Inicia sesión</h1>
            <LogInForm />
        </>
    )
}

export default LoginPage