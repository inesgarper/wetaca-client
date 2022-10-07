import jwt_decode from 'jwt-decode';
import { createContext, useContext, useState } from 'react'
import { useEffect } from 'react';
import userServices from '../services/userServices';
import { CartContext } from './cart.context';

interface AuthContextInterface {
    isLoggedIn: boolean
    isLoading: boolean
    user: {
        name: string
        lastName: string
        email: string
        role: string
        _id: string
    } | null
    storeToken: (token: string) => void
    authenticateUser: () => void
    logOutUser: () => void
    getCurrentUser: () => void
}

interface DecodedToken {
    name: string
    lastName: string
    email: string
    role: string
    _id: string
    exp: number
    iat: number
}

const AuthContext = createContext<AuthContextInterface>({
    isLoggedIn: false,
    isLoading: false,
    user: null,
    storeToken: (token) => { },
    authenticateUser: () => { },
    logOutUser: () => { },
    getCurrentUser: () => { }
})

interface Props {
    children: JSX.Element
}


const AuthProviderWrapper = (props: Props) => {

    const {getCart} = useContext(CartContext)

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setuser] = useState<AuthContextInterface["user"] | null>(null)

    const storeToken = (token: string) => {
        localStorage.setItem('authToken', token)
    }

    const removeToken = (): void => {
        localStorage.removeItem('authToken')
    }

    const getToken = () => {
        return localStorage.getItem('authToken')
    }

    const authenticateUser = () => {
        const storedToken = getToken()
        if (!storedToken) {
            logOutUser()
        } else {
            const decodedToken: DecodedToken = jwt_decode(storedToken)
            const { name, lastName, email, role, _id } = decodedToken
            const user = { name, lastName, email, role, _id }
            console.log('USUARIO DEL CONTEXTO ---', user)

            setIsLoggedIn(true)
            setIsLoading(false)
            setuser(user)
        }
    }

    const logOutUser = () => {
        removeToken()
        setIsLoggedIn(false)
        setIsLoading(false)
        setuser(null)
        getCart()
    }

    const getCurrentUser = () => {
        if (!user) {
            console.log('se cerró sesión en el cliente')
        } else {

            userServices
                .getCurrentUser()
                .then(data => console.log('INTERVALO ---', data))
                .catch(err => console.log(err))
        }
    }

    useEffect(() => authenticateUser(), [])

    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser, getCurrentUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }