import { gql } from "@apollo/client";

export const GET_ALL_MEALS = gql`
    query MEAL {
        getAllMeals {
            name
            category
            price
        }
    }
`