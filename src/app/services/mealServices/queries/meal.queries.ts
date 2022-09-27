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
