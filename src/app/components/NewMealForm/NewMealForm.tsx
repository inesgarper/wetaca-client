import { useState } from 'react'
import mealServices from '../../services/mealServices'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid, MenuItem, Select, TextField } from '@mui/material'
import { allergensCheck, categoriesSelect, typesSelect } from './assets'
// import Stage0 from './Stage0'


const NewMealForm = () => {

    const [formStage, setFormStage] = useState(0)

    const [newMealData, setNewMealData] = useState({
        name: '',
        type: undefined,
        ingredients: '',
        category: undefined,
        weight: 0,
        price: 0,
        description: '',
        allergens: {
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
        },
        nutritionalValues: {
            calories: 0,
            totalFats: 0,
            saturatedFat: 0,
            carbs: 0,
            protein: 0,
            sugar: 0,
            fiber: 0,
            sodium: 0
        }
    })

    const setNextStage = (number: number): void => {
        setFormStage((currentStage) => currentStage + number)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let data = { ...newMealData }
        const { name, value, checked } = e.target


        if (name === 'celery' || name === 'gluten' || name === 'crustaceans' || name === 'eggs' || name === 'fish'
            || name === 'lupin' || name === 'milk' || name === 'molluscs' || name === 'mustard' || name === 'peanuts'
            || name === 'sesame' || name === 'soybeans' || name === 'sulphurDioxide' || name === 'sulphites') {
            data = {
                ...data,
                allergens: {
                    ...data.allergens,
                    [name]: checked
                }
            }
        } else if (name === 'calories' || name === 'totalFats' || name === 'saturatedFat' || name === 'carbs'
            || name === 'protein' || name === 'sugar' || name === 'fiber' || name === 'sodium') {
            data = {
                ...data,
                nutritionalValues: {
                    ...data.nutritionalValues,
                    [name]: Number(value)
                }
            }
        } else if (name === 'weight' || name === 'price') {
            data = {
                ...data,
                [name]: Number(value)
            }
        } else {
            data = {
                ...data,
                [name]: value
            }
        }

        setNewMealData(data)
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        mealServices
            .createMeal(newMealData)
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
                            <FormControl required sx={{ m: 1, width: '80ch' }} variant="standard">
                                <InputLabel htmlFor="name">Nombre</InputLabel>
                                <OutlinedInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={newMealData.name}
                                    onChange={handleInputChange}
                                    label="name"
                                />
                            </FormControl>

                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Tipo"
                                name="type"
                                value={newMealData.type}
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
                                    value={newMealData.ingredients}
                                    onChange={handleInputChange}
                                    label="ingredients"
                                />
                            </FormControl>

                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Categoría"
                                name="category"
                                value={newMealData.category}
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
                                    value={newMealData.weight}
                                    onChange={handleInputChange}
                                    label="weight"
                                />
                            </FormControl>

                            <FormControl required sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="price">Precio</InputLabel>
                                <OutlinedInput
                                    id="price"
                                    type="number"
                                    name="price"
                                    value={newMealData.price}
                                    onChange={handleInputChange}
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
                                    value={newMealData.description}
                                    onChange={handleInputChange}
                                    label="description"
                                />
                            </FormControl>
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
                                                    <FormControlLabel control={<Checkbox name={allergen.value} onChange={handleInputChange} />} label={allergen.label} />
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
                                        value={newMealData.nutritionalValues.calories}
                                        onChange={handleInputChange}
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
                                        value={newMealData.nutritionalValues.totalFats}
                                        onChange={handleInputChange}
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
                                        value={newMealData.nutritionalValues.saturatedFat}
                                        onChange={handleInputChange}
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
                                        value={newMealData.nutritionalValues.carbs}
                                        onChange={handleInputChange}
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
                                        value={newMealData.nutritionalValues.protein}
                                        onChange={handleInputChange}
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
                                        value={newMealData.nutritionalValues.sugar}
                                        onChange={handleInputChange}
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
                                        value={newMealData.nutritionalValues.fiber}
                                        onChange={handleInputChange}
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
                                        value={newMealData.nutritionalValues.sodium}
                                        onChange={handleInputChange}
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