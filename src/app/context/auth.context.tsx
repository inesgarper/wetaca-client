import React, { createContext, useState } from 'react'
import { useEffect } from 'react';

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
}

const AuthContext = createContext<AuthContextInterface | null>(null)

interface Props {
    children: JSX.Element
}

function AuthProviderWrapper(props: Props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setuser] = useState(null)

    const storeToken = (token: string) => {
        localStorage.setItem('authToken', token)
    }

    const removeToken = (): void => {
        localStorage.removeItem('authToken')
    }

    const getToken = (): string | null => {
        return localStorage.getItem('authToken')
    }

    const authenticateUser = () => {
        const storedToken = getToken()

        if (!storedToken) {
            logOutUser()
        } else {
            // authService
            //     .verify(storedToken)
            //     .then(({ data }) => {
            //         const user = data
            //         setIsLoggedIn(true)
            //         setIsLoading(false)
            //         setuser(user)
            //     })
            //     .catch(() => logOutUser())
        }
    }

    const logOutUser = () => {
        removeToken()
        setIsLoggedIn(false)
        setIsLoading(false)
        setuser(null)
    }

    useEffect(() => authenticateUser(), [])


    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export { AuthContext, AuthProviderWrapper }