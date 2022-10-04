import { getMenuQuery_getMenu } from "../../services/mealServices/queries/__generated__/getMenuQuery"
import MealCard from "../MealCard/MealCard"

interface Props {
    meals: Array<getMenuQuery_getMenu | null> | null
}

const MealsList = ({ meals }: Props) => {

    return (
        <>
            {
                meals?.map(meal => {
                    return (
                        <MealCard key={meal?.id} meal={meal} />
                    )
                })
            }
        </>
    )
}

export default MealsList