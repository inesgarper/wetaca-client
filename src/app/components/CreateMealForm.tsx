import { useEffect, useState } from "react"
import mealServices from "../services/mealServices"

const CreateMealForm = () => {

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

    const [createMealForm, setCreateMealForm] = useState({
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
        setCreateMealForm({
            ...createMealForm,
            allergens: allergens
        })
    }, [allergens])

    useEffect(() => {
        setCreateMealForm({
            ...createMealForm,
            nutritionalValues: nutritionalValues
        })
    }, [nutritionalValues])


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setCreateMealForm({
            ...createMealForm,
            [name]: value
        })
    }

    const handleInputChangeValueNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        if (name === 'weight' || name === 'price') {

            setCreateMealForm({
                ...createMealForm,
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

        mealServices
            .createMeal(createMealForm)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1>Create Meal Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" name="name" value={createMealForm.name} onChange={handleInputChange} />
                <label>Tipo</label>
                <input type="text" name="type" value={createMealForm.type} onChange={handleInputChange} />
                <label>Ingredientes</label>
                <input type="text" name="ingredients" value={createMealForm.ingredients} onChange={handleInputChange} />
                <label>Categoría</label>
                <input type="text" name="category" value={createMealForm.category} onChange={handleInputChange} />
                <label>Peso</label>
                <input type="number" name="weight" onChange={handleInputChangeValueNumber} />
                <label>Precio</label>
                <input type="number" step="any" name="price" onChange={handleInputChangeValueNumber} />
                <label>Descripción</label>
                <input type="text" name="description" value={createMealForm.description} onChange={handleInputChange} />

                <h3>ALÉRGENOS</h3>

                <label>Apio</label>
                <input type="checkbox" name="celery" onChange={handleCheckedChange} />
                <label>Gluten</label>
                <input type="checkbox" name="gluten" onChange={handleCheckedChange} />
                <label>Crustáceos</label>
                <input type="checkbox" name="crustaceans" onChange={handleCheckedChange} />
                <label>Huevos</label>
                <input type="checkbox" name="eggs" onChange={handleCheckedChange} />
                <label>Pescado</label>
                <input type="checkbox" name="fish" onChange={handleCheckedChange} />
                <label>Altramuces</label>
                <input type="checkbox" name="lupin" onChange={handleCheckedChange} />
                <label>Lácteos</label>
                <input type="checkbox" name="milk" onChange={handleCheckedChange} />
                <label>Moluscos</label>
                <input type="checkbox" name="molluscs" onChange={handleCheckedChange} />
                <label>Mostaza</label>
                <input type="checkbox" name="mustard" onChange={handleCheckedChange} />
                <label>Cacahuetes</label>
                <input type="checkbox" name="peanuts" onChange={handleCheckedChange} />
                <label>Sésamo</label>
                <input type="checkbox" name="sesame" onChange={handleCheckedChange} />
                <label>Soja</label>
                <input type="checkbox" name="soybeans" onChange={handleCheckedChange} />
                <label>Dióxido de azufre</label>
                <input type="checkbox" name="sulphurDioxide" onChange={handleCheckedChange} />
                <label>Sulfitos</label>
                <input type="checkbox" name="sulphites" onChange={handleCheckedChange} />

                <h3>VALORES NUTRICIONALES</h3>

                <label>Calorias</label>
                <input type="number" step="any" name="calories" onChange={handleInputChangeValueNumber} />
                <label>Grasas totales</label>
                <input type="number" step="any" name="totalFats" onChange={handleInputChangeValueNumber} />
                <label>Grasas saturadas</label>
                <input type="number" step="any" name="saturatedFat" onChange={handleInputChangeValueNumber} />
                <label>Carbohidratos</label>
                <input type="number" step="any" name="carbs" onChange={handleInputChangeValueNumber} />
                <label>Proteínas</label>
                <input type="number" step="any" name="protein" onChange={handleInputChangeValueNumber} />
                <label>Azúcares</label>
                <input type="number" step="any" name="sugar" onChange={handleInputChangeValueNumber} />
                <label>Fibra dietética</label>
                <input type="number" step="any" name="fiber" onChange={handleInputChangeValueNumber} />
                <label>Sódio</label>
                <input type="number" step="any" name="sodium" onChange={handleInputChangeValueNumber} />

                <button type="submit">Iniciar sesión</button>
            </form>
        </>
    )
}

export default CreateMealForm

