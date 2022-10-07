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

export const ADD_MEAL_TO_MENU = gql`
    mutation addMealToMenuMutation($mealID: ID){
        addMealToMenu(mealID: $mealID){
            name
        }
    }
`

export const REMOVE_MEAL_FROM_MENU = gql`
    mutation removeMealFromMenuMutation($mealID: ID){
        removeMealFromMenu(mealID: $mealID){
            name
        }
    }
`