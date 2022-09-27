import { gql } from "@apollo/client";

export const GET_REVIEWS = gql`
    query getReviewsQuery($mealID: ID!){
        getReviews(mealID: $mealID) {
            meal{
                name
            }
            # user
            comment
            rating
        }
    }
`