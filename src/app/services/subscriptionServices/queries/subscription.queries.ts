import { gql } from "@apollo/client";

export const GET_ALL_SUBSCRIPTIONS = gql`
    query getAllSubscriptionsQuery {
        getAllSubscriptions {
            user {
                name
            }
            status
            baseMenu {
                meals {
                    total
                    perCategory {
                        meat
                        chicken
                        fish
                        pasta
                        rice
                        gratinated
                        legume
                        international
                        veggie
                        starter
                        full
                        light
                        dessert
                    }
                }
                maxPrice
            }
            address {
                street
                number
                city
                province
                postCode
            }
            deliveryWeekDay
        }
    }
`

export const GET_ONE_USER_SUBSCRIPTION = gql`
    query getOneUserSubscriptionQuery($userID: ID!) {
        getOneUserSubscription(userID: $userID) {
            user {
                name
            }
            status
            baseMenu {
                meals {
                    total
                    perCategory {
                        meat
                        chicken
                        fish
                        pasta
                        rice
                        gratinated
                        legume
                        international
                        veggie
                        starter
                        full
                        light
                        dessert
                    }
                }
                maxPrice
            }
            address {
                street
                number
                city
                province
                postCode
            }
            deliveryWeekDay
        }
    }
`

export const GET_MY_SUBSCRIPTION = gql`
    query getMySubscriptionQuery{
        getMySubscription {
            address {
                city
                number
                postCode
                province
                street
            }
            status
            deliveryWeekDay
        }
    }
`