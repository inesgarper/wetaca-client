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

export const GET_MY_ACTIVE_ORDER = gql`
    query getMyActiveOrderQuery($userID: ID!){
        getMyActiveOrder(userID: $userID) {
            price
            meals {
                mealID {
                    name
                    price
                    images {
                        finals
                    }
                }
                quantity
            }
        }
    }
`

export const GET_MY_NEXT_ORDER = gql`
    query getMyNextOrderQuery{
        getMyNextOrder {
            price
            meals {
                mealID {
                    name
                    price
                    images {
                        finals
                    }
                }
                quantity
            }
        }
    }
`

export const GET_MY_DELIVERED_ORDERS = gql`
    query getMyDeliveredOrdersQuery{
        getMyDeliveredOrders {
            price
            meals {
                mealID {
                    name
                }
                quantity
            }
        }
    }
`