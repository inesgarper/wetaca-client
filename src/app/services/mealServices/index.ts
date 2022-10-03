import { client } from "../../graphql";
import { GET_ALL_MEALS, GET_MEALS_BY_CATEGORY, GET_MEALS_TO_COOK, GET_MEAL_DETAILS, GET_MENU, GET_NUTRITIONAL_VALUES } from "./queries/meal.queries";
import { getAllMealsQuery } from "./queries/__generated__/getAllMealsQuery";
import { getMealDetailsQuery } from "./queries/__generated__/getMealDetailsQuery";
import { getMealsByCategoryQuery } from "./queries/__generated__/getMealsByCategoryQuery";
import { getMenuQuery } from "./queries/__generated__/getMenuQuery";
import { getNutritionalValuesQuery } from "./queries/__generated__/getNutritionalValuesQuery";
import {getMealsToCookQuery} from "./queries/__generated__/getMealsToCookQuery"
import { createMealMutation } from "./mutations/__generated__/createMealMutation";
import { MealInput } from "../../../../__generated__/globalTypes"
import { CREATE_MEAL } from "./mutations/meal.mutations";



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
                variables: { mealID }
            })

            if (!response || !response.data) throw new Error("Cannot get meal details!")

            console.log("DATA: ", response.data)

            return response.data.getMealDetails

        } catch (err) {
            console.log(err)
            throw (err)
        }
    }

    async getNutritionalValues(mealID: string): Promise<getNutritionalValuesQuery["getNutritionalValues"]> {

        try {
            const response = await client.query({
                query: GET_NUTRITIONAL_VALUES,
                variables: { mealID }
            })

            if (!response || !response.data) throw new Error("Cannot get nutritional values!")

            return response.data.getNutritionalValues

        } catch (err) {
            throw (err)
        }

    }

    async getMealsByCategory(mealCategory: string): Promise<getMealsByCategoryQuery["getMealsByCategory"]> {

        try {
            const response = await client.query({
                query: GET_MEALS_BY_CATEGORY,
                variables: { mealCategory }
            })

            if (!response || !response.data) throw new Error(`Cannot get meals in ${mealCategory} category`)

            return response.data.getMealsByCategory

        } catch (err) {
            throw (err)
        }
    }

    async getMenu(): Promise<getMenuQuery["getMenu"]> {
        try {

            const response = await client.query({
                query: GET_MENU
            })

            if (!response || !response.data) throw new Error(`Cannot get menu`)

            return response.data.getMenu

        } catch (err) {
            throw (err)
        }
    }

    async getMealsToCook(): Promise<getMealsToCookQuery["getMealsToCook"]> {
       
        try {

            const response = await client.query({
                query: GET_MEALS_TO_COOK
            })

            if (!response || !response.data) throw new Error(`Cannot get meals to cook`)

            return response.data.getMealsToCook

        } catch (err) {
            throw (err)
        }
    }

    async createMeal(mealData: MealInput): Promise<createMealMutation["createMeal"]> {
        try {
            const response = await client.mutate({
                mutation: CREATE_MEAL,
                variables: {mealData}
            })

            if (!response || !response.data) throw new Error("Cannot create the meal!")

            console.log("DATA: ", response.data)

            return response.data.createMeal
            
        } catch (err){
            console.log(err)
            throw (err)
        }
    }
}

export default new MealService()