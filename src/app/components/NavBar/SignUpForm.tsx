import { useState } from "react"
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


const SignUpForm = () => {

    const [signUpForm, setSignUpForm] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        birthDate: undefined,
    })

    const [showPassword, setShowPassword] = useState<Boolean>(false)

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }
    
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

        <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '80ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >

            <div>
                {/* <TextField required label="Nombre" type="text" name="name" value={signUpForm.name} onChange={handleInputChange} /> */}
                {/* <TextField required label="Apellido" type="text" name="lastName" value={signUpForm.lastName} onChange={handleInputChange} /> */}
                {/* <TextField required label="Email" type="email" name="email" value={signUpForm.email} onChange={handleInputChange} /> */}
                {/* <TextField required label="Password" type="password" name="password" value={signUpForm.password} onChange={handleInputChange} /> */}
                {/* <TextField required label="Teléfono" type="text" name="phoneNumber" value={signUpForm.phoneNumber} onChange={handleInputChange} />
                <TextField required InputLabelProps={{ shrink: true }} label="Fecha de nacimiento" type="date" name="birthDate" value={signUpForm.birthDate} onChange={handleInputChange} /> */}

                <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
                    <InputLabel htmlFor="name">Nombre</InputLabel>
                    <OutlinedInput
                        id="name"
                        type="text"
                        name="name"
                        value={signUpForm.name}
                        onChange={handleInputChange}
                        label="Name"
                    />
                </FormControl>

                <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
                    <InputLabel htmlFor="lastName">Apellido</InputLabel>
                    <OutlinedInput
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={signUpForm.lastName}
                        onChange={handleInputChange}
                        label="lastName"
                    />
                </FormControl>

                <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput
                        id="email"
                        type="email"
                        name="email"
                        value={signUpForm.email}
                        onChange={handleInputChange}
                        label="email"
                    />
                </FormControl>

                <FormControl sx={{ m: 1, width: '80ch' }} variant="outlined">
                    <InputLabel shrink htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={signUpForm.password}
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

                <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
                    <InputLabel htmlFor="phoneNumber">Teléfono</InputLabel>
                    <OutlinedInput
                        id="phoneNumber"
                        type="text"
                        name="phoneNumber"
                        value={signUpForm.phoneNumber}
                        onChange={handleInputChange}
                        label="phoneNumber"
                    />
                </FormControl>

                <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
                    <InputLabel shrink htmlFor="birthDate">Fecha de nacimiento</InputLabel>
                    <OutlinedInput
                        id="birthDate"
                        type="date"
                        name="birthDate"
                        value={signUpForm.birthDate}
                        onChange={handleInputChange}
                        label="birthDate"
                    />
                </FormControl>

            </div>

            <Button type="submit" variant="contained">Sign up</Button>

        </Box>
    )
}

export default SignUpForm