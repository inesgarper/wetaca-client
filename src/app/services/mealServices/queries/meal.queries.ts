import { gql } from "@apollo/client";

export const GET_ALL_MEALS = gql`
    query getAllMealsQuery {
        getAllMeals {
            name
            category
            price
        }
    }
`

export const GET_MEAL_DETAILS = gql`
    query getMealDetailsQuery($mealID: ID) {
        getMealDetails(mealID: $mealID) {
            name
            category
            price
        }
    }
`

export const GET_NUTRITIONAL_VALUES = gql`
    query getNutritionalValuesQuery ($mealID: ID) {
        getNutritionalValues(mealID: $mealID){
            calories
        }
    }
`

export const GET_MEALS_BY_CATEGORY = gql`
    query getMealsByCategoryQuery ($mealCategory: MealCategory) {
        getMealsByCategory(mealCategory: $mealCategory){
            name
            category
        }
    }
`

export const GET_MENU = gql`
    query getMenuQuery {
        getMenu {
            name
            currentlyInMenu
        }
    }
`

export const GET_MEALS_TO_COOK = gql`
    query getMealsToCookQuery {
        getMealsToCook {
            meal {
                name
            }
            quantity
        }
    }
`