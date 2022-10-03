import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid, MenuItem, TextField } from '@mui/material'

const types = [
    {
        value: 'UNIQUE',
        label: 'Platos Únicos'
    },
    {
        value: 'LIGHT',
        label: 'Platos Ligeros'
    },
    {
        value: 'FULL',
        label: 'Platos Completos'
    },
    {
        value: 'VEGGIE',
        label: 'Veggie'
    },
    {
        value: 'STARTER',
        label: 'Entrantes'
    },
    {
        value: 'DESSERT',
        label: 'Postres'
    }
]

const categories = [
    {
        value: 'MEAT',
        label: 'Carne'
    },
    {
        value: 'CHICKEN',
        label: 'Pollo'
    },
    {
        value: 'FISH',
        label: 'Pescado'
    },
    {
        value: 'PASTA',
        label: 'Pasta'
    },
    {
        value: 'RICE',
        label: 'Arroz'
    },
    {
        value: 'GRATINATED',
        label: 'Gratinado'
    },
    {
        value: 'LEGUME',
        label: 'Legumbres'
    },
    {
        value: 'INTERNATIONAL',
        label: 'Internacional'
    },
    {
        value: 'VEGGIE',
        label: 'Veggie'
    },
    {
        value: 'STARTER',
        label: 'Entrantes'
    },
    {
        value: 'FULL',
        label: 'Platos Completos'
    },
    {
        value: 'LIGHT',
        label: 'Platos ligeros'
    },
    {
        value: 'DESSERT',
        label: 'Postres'
    }
]

const allergens = [
    {
        value: "celery",
        label: "Cilantro"
    },
    {
        value: "gluten",
        label: "Gluten"
    }, {
        value: "crustaceans",
        label: "Marisco"
    }, {
        value: "eggs",
        label: "Huevo"
    }, {
        value: "fish",
        label: "Pescado"
    }, {
        value: "lupin",
        label: "Lupino"
    }, {
        value: "milk",
        label: "Leche"
    }, {
        value: "molluscs",
        label: "Moluscos"
    }, {
        value: "mustard",
        label: "Mostaza"
    }, {
        value: "peanuts",
        label: "Cacahuetes"
    }, {
        value: "sesame",
        label: "Sésamo"
    }, {
        value: "soybeans",
        label: "Soja"
    }, {
        value: "sulphurDioxide",
        label: "Dióxido de azufre"
    }, {
        value: "sulphites",
        label: "Sulfitos"
    }
]

const NewMealForm = () => {

    const [formStage, setFormStage] = useState(0)

    const [newMealForm, setNewMealForm] = useState({
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
            sulphites: false,
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
        },
    })

    const setNextStage = (number: number): void => {
        setFormStage((currentStage) => currentStage + number)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setNewMealForm({
            ...newMealForm,
            [name]: value
        })
    }

    const handleSubmit = () => { }

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

                            <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
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
                                value={newMealForm.type}
                                onChange={handleInputChange}
                                helperText="Please select a meal type"
                            >
                                {types.map((option) => (
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
                                value={newMealForm.category}
                                onChange={handleInputChange}
                                helperText="Please select a meal category"
                            >
                                {categories.map((option) => (
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
                                    value={newMealForm.price}
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
                                    value={newMealForm.description}
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
                                    allergens.map(allergen => {
                                        return (
                                            <Grid xs={6}>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox />} label={allergen.label} />
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
                                        name="calories"
                                        value={newMealForm.nutritionalValues.calories}
                                        onChange={handleInputChange}
                                        label="calories"
                                    />
                                </FormControl>

                                <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                                    <InputLabel htmlFor="totalFats">Grasas totales</InputLabel>
                                    <OutlinedInput
                                        id="totalFats"
                                        type="number"
                                        name="totalFats"
                                        value={newMealForm.nutritionalValues.totalFats}
                                        onChange={handleInputChange}
                                        label="totalFats"
                                    />
                                </FormControl>

                                <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                                    <InputLabel htmlFor="saturatedFat">Grasas saturadas</InputLabel>
                                    <OutlinedInput
                                        id="saturatedFat"
                                        type="number"
                                        name="saturatedFat"
                                        value={newMealForm.nutritionalValues.saturatedFat}
                                        onChange={handleInputChange}
                                        label="saturatedFat"
                                    />
                                </FormControl>

                                <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                                    <InputLabel htmlFor="carbs">Carbohidratos</InputLabel>
                                    <OutlinedInput
                                        id="carbs"
                                        type="number"
                                        name="carbs"
                                        value={newMealForm.nutritionalValues.carbs}
                                        onChange={handleInputChange}
                                        label="carbs"
                                    />
                                </FormControl>

                                <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                                    <InputLabel htmlFor="protein">Proteínas</InputLabel>
                                    <OutlinedInput
                                        id="protein"
                                        type="number"
                                        name="protein"
                                        value={newMealForm.nutritionalValues.protein}
                                        onChange={handleInputChange}
                                        label="protein"
                                    />
                                </FormControl>

                                <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                                    <InputLabel htmlFor="sugar">Azúcar</InputLabel>
                                    <OutlinedInput
                                        id="sugar"
                                        type="number"
                                        name="sugar"
                                        value={newMealForm.nutritionalValues.sugar}
                                        onChange={handleInputChange}
                                        label="sugar"
                                    />
                                </FormControl>

                                <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                                    <InputLabel htmlFor="fiber">Fibra</InputLabel>
                                    <OutlinedInput
                                        id="fiber"
                                        type="number"
                                        name="fiber"
                                        value={newMealForm.nutritionalValues.fiber}
                                        onChange={handleInputChange}
                                        label="fiber"
                                    />
                                </FormControl>

                                <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                                    <InputLabel htmlFor="sodium">Sodio</InputLabel>
                                    <OutlinedInput
                                        id="sodium"
                                        type="number"
                                        name="sodium"
                                        value={newMealForm.nutritionalValues.sodium}
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