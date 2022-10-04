import { gql } from "@apollo/client";

export const CREATE_SUBSCRIPTION = gql`
    mutation createSubscriptionMutation($subscriptionData: SubscriptionInput!) {
        createSubscription(subscriptionData: $subscriptionData) {
            user {
                name
                id
            }
            status
        }
    }
`

export const DELETE_SUBSCRIPTION = gql`
    mutation deleteSubscriptionMutation($subscriptionID: ID!) {
        deleteSubscription(subscriptionID: $subscriptionID)
    }
`

export const CREATE_BASE_MENU = gql`
    mutation createBaseMenuMutation {
        createBaseMenu {
            maxPrice
            meals {
                perCategory {
                    chicken
                    dessert
                    fish
                    full
                    gratinated
                    international
                    legume
                    light
                    meat
                    pasta
                    rice
                    starter
                }
                total
            }
        }
    }
`