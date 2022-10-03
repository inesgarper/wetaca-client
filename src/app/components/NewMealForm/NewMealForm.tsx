import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'


interface MealData {

}

const NewMealForm = () => {

    const [newMealForm, setNewMealForm] = useState({
        name: '',
        type: '',
        ingredients: '',
        category: '',
        weight: 0,
        price: 0,


    })

    const handleInputChange = () => { }

    const handleSubmit = () => { }

    return (

        <>
            <h1>New Meal Form</h1>
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
                            value={newMealForm}
                            onChange={handleInputChange}
                            label="email"
                        />
                    </FormControl>
                </div>

                <Button type="submit" variant="contained">Iniciar sesión</Button>

            </Box>
        </>
    )
}

export default NewMealForm