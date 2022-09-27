import { gql } from "@apollo/client";

export const GET_ALL_ORDERS = gql`
    query getAllOrdersQuery {
        getAllOrders {
            subscription {
                status
            }
            status
            price
        }
    }
`

export const GET_ORDER_DETAILS = gql`
    query getOrderDetailsQuery($orderID: ID!) {
        getOneOrder(orderID: $orderID) {
            subscription {
                status
                user {
                    name
                }
            }
            status
            price
            meals {
                mealID {
                    name
                    category
                }
                quantity
            }
        }
    }
`

export const GET_NEXT_WEEK_ORDERS = gql`
    query getNextWeekOrdersQuery {
        getNextOrders {
            subscription {
                status
            }
            status
            price
            meals {
                mealID {
                    name
                    category
                }
                quantity
            }
        }
    }
`
