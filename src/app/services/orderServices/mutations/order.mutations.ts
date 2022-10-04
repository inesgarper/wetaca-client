import { gql } from "@apollo/client";

export const ADD_MEAL_TO_ORDER = gql`
    mutation addMealToOrderMutation($mealID: ID) {
        addMealToOrder(mealID: $mealID) {
            mealID {
                name
            }
            quantity
        }
    }
`

export const REMOVE_MEAL_FROM_ORDER = gql`
    mutation removeMealFromOrderMutation($mealID: ID) {
        removeMealFromOrder(mealID: $mealID) {
            mealID {
                name
            }
            quantity
        }
    }
`