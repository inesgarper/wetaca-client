import { gql } from "@apollo/client";

export const UPDATE_SUBSCRIPTION_STATUS = gql`
    mutation updateSubscriptionStatusMutation($status: String!){
        updateSubscriptionStatus(status: $status) {
            status
        }
    }
`

export const UPDATE_DELIVERY_WEEK_DAY = gql `
    mutation updateDeliveryWeekDayMutation($day: String!){
        updateDeliveryWeekDay(day: $day) {
            deliveryWeekDay
        }
    }
`