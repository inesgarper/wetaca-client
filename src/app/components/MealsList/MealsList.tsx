import { useEffect, useState } from "react"
import mealServices from "../../services/mealServices"
import { getMenuQuery_getMenu } from "../../services/mealServices/queries/__generated__/getMenuQuery"
import MealCard from "../MealCard/MealCard"

const MealsList = () => {

    const [meals, setMeals] = useState<Array<getMenuQuery_getMenu | null> | null>()

    useEffect(() => {

        mealServices
            .getMenu()
            .then(data => setMeals(data))
            .catch(err => console.log(err))
    }, [])

    return (

        <>
            {
                meals?.map(meal => {
                    return(
                        <MealCard key={meal?.id} meal={meal}/>
                    )
                })
            }
        </>
    )
}

export default MealsList