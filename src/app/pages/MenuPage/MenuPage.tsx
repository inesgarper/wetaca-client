import { useEffect, useState } from "react"
import MealsList from "../../components/MealsList/MealsList"
import mealServices from "../../services/mealServices"
import { getMenuQuery_getMenu } from "../../services/mealServices/queries/__generated__/getMenuQuery"

const MenuPage = () => {

    const [meals, setMeals] = useState<Array<getMenuQuery_getMenu | null> | null>([])

    useEffect(() => {

        mealServices
            .getMenu()
            .then(data => setMeals(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <MealsList meals={meals} />
        </>
    )
}

export default MenuPage