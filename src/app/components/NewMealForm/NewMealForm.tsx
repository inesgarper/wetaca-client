import { useEffect, useState } from 'react'
import mealServices from '../../services/mealServices'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid, MenuItem, TextField } from '@mui/material'
import { allergensCheck, categoriesSelect, typesSelect } from './assets'
import Stage0 from './Stage0'


const NewMealForm = () => {

    const [formStage, setFormStage] = useState(0)

    const [allergens, setAllergens] = useState({
        celery: false,
        gluten: false,
        crustaceans: false,
        eggs: false,
        fish: false,
        lupin: false,
        milk: false,
        molluscs: false,
        mustard: false,
        peanuts: false,
        sesame: false,
        soybeans: false,
        sulphurDioxide: false,
        sulphites: false
    })

    const [nutritionalValues, setNutritionalValues] = useState({
        calories: 0,
        totalFats: 0,
        saturatedFat: 0,
        carbs: 0,
        protein: 0,
        sugar: 0,
        fiber: 0,
        sodium: 0
    })

    const [newMealForm, setNewMealForm] = useState({
        name: '',
        type: undefined,
        ingredients: '',
        category: undefined,
        weight: 0,
        price: 0,
        description: '',
        allergens: allergens,
        nutritionalValues: nutritionalValues
    })

    useEffect(() => {
        setNewMealForm({
            ...newMealForm,
            allergens: allergens
        })
    }, [allergens])

    useEffect(() => {
        setNewMealForm({
            ...newMealForm,
            nutritionalValues: nutritionalValues
        })
    }, [nutritionalValues])

    const setNextStage = (number: number): void => {
        setFormStage((currentStage) => currentStage + number)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        console.log('veamosss---->', e.target)
        setNewMealForm({
            ...newMealForm,
            [name]: value
        })
    }

    const handleInputChangeValueNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        if (name === 'weight' || name === 'price') {

            setNewMealForm({
                ...newMealForm,
                [name]: Number(value)
            })

        } else {

            setNutritionalValues({
                ...nutritionalValues,
                [name]: Number(value)
            })
        }
    }

    const handleCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target

        setAllergens({
            ...allergens,
            [name]: checked
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        console.log('lo que le pasamos---->', newMealForm)
        mealServices
            .createMeal(newMealForm)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    return (

        <>
            <h1>New Meal Form</h1>
            <Box component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >

                <div>
                    {/* STAGE 0 */}
                    {
                        formStage === 0 &&
                        <>
                            <h2>Datos de la receta</h2>
                            {/* <Stage0 setNewMealForm={setNewMealForm} handleInputChange={handleInputChange} /> */}
                            {/* <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
                                <InputLabel htmlFor="name">Nombre</InputLabel>
                                <OutlinedInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={newMealForm.name}
                                    onChange={handleInputChange}
                                    label="name"
                                />
                            </FormControl>

                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Tipo"
                                name="type"
                                value={newMealForm.type}
                                onChange={handleInputChange}
                                helperText="Please select a meal type"
                            >
                                {typesSelect.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
                                <InputLabel htmlFor="ingredients">Ingredientes</InputLabel>
                                <OutlinedInput
                                    multiline
                                    rows={4}
                                    id="ingredients"
                                    type="text"
                                    name="ingredients"
                                    value={newMealForm.ingredients}
                                    onChange={handleInputChange}
                                    label="ingredients"
                                />
                            </FormControl>

                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Categoría"
                                name="category"
                                value={newMealForm.category}
                                onChange={handleInputChange}
                                helperText="Please select a meal category"
                            >
                                {categoriesSelect.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <FormControl required sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="weight">Peso</InputLabel>
                                <OutlinedInput
                                    id="weight"
                                    type="number"
                                    name="weight"
                                    value={newMealForm.weight}
                                    onChange={handleInputChangeValueNumber}
                                    label="weight"
                                />
                            </FormControl>

                            <FormControl required sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="price">Precio</InputLabel>
                                <OutlinedInput
                                    id="price"
                                    type="number"
                                    name="price"
                                    value={newMealForm.price}
                                    onChange={handleInputChangeValueNumber}
                                    label="price"
                                />
                            </FormControl>

                            <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
                                <InputLabel htmlFor="description">Descripción</InputLabel>
                                <OutlinedInput
                                    multiline
                                    rows={4}
                                    id="description"
                                    type="text"
                                    name="description"
                                    value={newMealForm.description}
                                    onChange={handleInputChange}
                                    label="description"
                                />
                            </FormControl> */}
                        </>
                    }

                    {/* STAGE 1 */}
                    {
                        formStage === 1 &&

                        <>
                            <h2>Selecciona los alérgenos</h2>
                            <Grid container>
                                {
                                    allergensCheck.map(allergen => {
                                        return (
                                            <Grid xs={6}>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox name={allergen.value} onChange={handleCheckedChange} />} label={allergen.label} />
                                                </FormGroup>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </>
                    }

                    {/* STAGE 2 */}
                    {
                        formStage === 2 &&
                        <>
                            <h2>Valores nutricionales</h2>
                            <Grid container xs={6} display="flex" justifyContent="center" alignItems="center">
                                <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                                    <InputLabel htmlFor="calories">Calorías</InputLabel>
                                    <OutlinedInput
                                        id="calories"
                                        type="number"
                                        // step="any"
                                        name="calories"
                                        value={newMealForm.nutritionalValues.calories}
                                        onChange={handleInputChangeValueNumber}
                                        label="calories"
                                    />
                                </FormControl>

                                <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                                    <InputLabel htmlFor="totalFats">Grasas totales</InputLabel>
                                    <OutlinedInput
                                        id="totalFats"
                                        type="number"
                                        // step="any"
                                        name="totalFats"
                                        value={newMealForm.nutritionalValues.totalFats}
                                        onChange={handleInputChangeValueNumber}
                                        label="totalFats"
                                    />
                                </FormControl>

                                <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                                    <InputLabel htmlFor="saturatedFat">Grasas saturadas</InputLabel>
                                    <OutlinedInput
                                        id="saturatedFat"
                                        type="number"
                                        // step="any"
                                        name="saturatedFat"
                                        value={newMealForm.nutritionalValues.saturatedFat}
                                        onChange={handleInputChangeValueNumber}
                                        label="saturatedFat"
                                    />
                                </FormControl>

                                <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                                    <InputLabel htmlFor="carbs">Carbohidratos</InputLabel>
                                    <OutlinedInput
                                        id="carbs"
                                        type="number"
                                        // step="any"
                                        name="carbs"
                                        value={newMealForm.nutritionalValues.carbs}
                                        onChange={handleInputChangeValueNumber}
                                        label="carbs"
                                    />
                                </FormControl>

                                <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                                    <InputLabel htmlFor="protein">Proteínas</InputLabel>
                                    <OutlinedInput
                                        id="protein"
                                        type="number"
                                        // step="any"
                                        name="protein"
                                        value={newMealForm.nutritionalValues.protein}
                                        onChange={handleInputChangeValueNumber}
                                        label="protein"
                                    />
                                </FormControl>

                                <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                                    <InputLabel htmlFor="sugar">Azúcar</InputLabel>
                                    <OutlinedInput
                                        id="sugar"
                                        type="number"
                                        // step="any"
                                        name="sugar"
                                        value={newMealForm.nutritionalValues.sugar}
                                        onChange={handleInputChangeValueNumber}
                                        label="sugar"
                                    />
                                </FormControl>

                                <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                                    <InputLabel htmlFor="fiber">Fibra</InputLabel>
                                    <OutlinedInput
                                        id="fiber"
                                        type="number"
                                        // step="any"
                                        name="fiber"
                                        value={newMealForm.nutritionalValues.fiber}
                                        onChange={handleInputChangeValueNumber}
                                        label="fiber"
                                    />
                                </FormControl>

                                <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                                    <InputLabel htmlFor="sodium">Sodio</InputLabel>
                                    <OutlinedInput
                                        id="sodium"
                                        type="number"
                                        // step="any"
                                        name="sodium"
                                        value={newMealForm.nutritionalValues.sodium}
                                        onChange={handleInputChangeValueNumber}
                                        label="sodium"
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    }
                </div>

                {
                    formStage !== 0 && < Button type="button" variant="contained" onClick={() => setNextStage(-1)}>Anterior</Button>
                }
                {
                    formStage < 2 && <Button type="button" variant="contained" onClick={() => setNextStage(1)}>Siguiente</Button>
                }

                <Button type="submit" variant="contained">Crear</Button>

            </Box>
        </>
    )
}

export default NewMealForm