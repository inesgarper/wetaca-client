import { useState } from "react"
import mealServices from "../services/mealServices"

const CreateMealForm = () => {

    const [createMealForm, setCreateMealForm] = useState({
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

     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target

        if (name === 'weight' || name === 'price') {

            setCreateMealForm({
                ...createMealForm,
                [name]: Number(value)
            })
            
        } else {
            setCreateMealForm({
                ...createMealForm,
                [name]: value
            })

        }

    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        mealServices
            .createMeal(createMealForm)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" name="name" value={createMealForm.name} onChange={handleInputChange} />
            <label>Tipo</label>
            <input type="text" name="type" value={createMealForm.type} onChange={handleInputChange} />
            <label>Categoría</label>
            <input type="text" name="category" value={createMealForm.category} onChange={handleInputChange} />
            <label>Peso</label>
            <input type="number" name="weight" onChange={handleInputChange} />
            <label>Precio</label>
            <input type="number" step="any" name="price" onChange={handleInputChange} />
            <label>Descripción</label>
            <input type="text" name="description" value={createMealForm.description} onChange={handleInputChange} />

            <button type="submit">Iniciar sesión</button>
        </form>
    )
}

export default CreateMealForm