import { gql } from "@apollo/client";

export const CREATE_MEAL = gql`
    mutation createMealMutation($mealData: MealInput) {
        createMeal(mealData: $mealData) {
            name
            category
            price
        }
    }
`