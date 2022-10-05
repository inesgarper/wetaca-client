import { gql } from "@apollo/client";


export const CREATE_ORDER = gql`
    mutation createOrderMutation {
        createOrder {
            status
        }
    }
`

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

export const UPDATE_DELIVERY_DATE = gql`
    mutation updateDeliveryDateMutation($deliveryDate: DeliveryDateInput) {
        updateDeliveryDate(deliveryDate: $deliveryDate) {
            deliveryDate {
                day
                hour
            }
        }
    }
`

export const CONFIRM_ORDER = gql`
    mutation confirmOrderMutation{
        confirmOrder{
            price
        }
    }
`