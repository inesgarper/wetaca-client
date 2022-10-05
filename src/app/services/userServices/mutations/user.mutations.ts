import { gql } from "@apollo/client";


export const ADD_PAYMENT_METHOD = gql`
    mutation addPaymentMethodMutation($paymentMethodData: PaymentMethodsInput!) {
        addPaymentMethod(paymentMethodData: $paymentMethodData) {
            paymentMethods {
                cardName
                cardNumber
                expiration
                securityCode
            }
        }
    }
`