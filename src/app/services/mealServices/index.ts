import { client } from "../../graphql";
import { GET_ALL_MEALS, GET_MEAL_DETAILS } from "./queries/meal.queries";
import { getAllMealsQuery } from "./queries/__generated__/getAllMealsQuery";
import { getMealDetailsQuery } from "./queries/__generated__/getMealDetailsQuery";



class MealService {
    async getAllMeals(): Promise<getAllMealsQuery["getAllMeals"]> {
        try {
            const response = await client.query({
                query: GET_ALL_MEALS
            })

            if (!response || !response.data) throw new Error("Cannot get meals list!")

            console.log("DATA: ", response.data)

            return response.data.getAllMeals

        } catch (err) {
            console.log(err)
            throw (err)
        }
    }

    async getMealDetails(mealID: string): Promise<getMealDetailsQuery["getMealDetails"]> {
        try {
            const response = await client.query({
                query: GET_MEAL_DETAILS,
                variables: {mealID}
            })

            if (!response || !response.data) throw new Error("Cannot get meal details!")

            console.log("DATA: ", response.data)

            return response.data.getMealDetails

        } catch (err) {
            console.log(err)
            throw (err)
        }
    } 
}

export default new MealService()