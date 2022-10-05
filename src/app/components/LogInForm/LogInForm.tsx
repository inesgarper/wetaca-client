import { useState, useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import authServices from "../../services/authServices"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../contexts/cart.context"

const LogInForm = () => {

    const { storeToken, authenticateUser } = useContext(AuthContext) || {}
    const { getCart } = useContext(CartContext) || {}

    const [loginForm, setLoginForm] = useState({
        password: '',
        email: ''
    })

    const [showPassword, setShowPassword] = useState<Boolean>(false)

    const navigate = useNavigate()

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

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
                getCart()
                navigate('/')
            })
            .catch(err => console.log(err))
    }


    return (

        <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '80ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >

            <div>
                <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput
                        id="email"
                        type="email"
                        name="email"
                        value={loginForm.email}
                        onChange={handleInputChange}
                        label="email"
                    />
                </FormControl>

                <FormControl sx={{ m: 1, width: '80ch' }} variant="outlined">
                    <InputLabel shrink htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={loginForm.password}
                        onChange={handleInputChange}
                        name="password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </div>

            <Button type="submit" variant="contained">Iniciar sesión</Button>

        </Box>
    )
}

export default LogInForm