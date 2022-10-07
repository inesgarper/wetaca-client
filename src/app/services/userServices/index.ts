import { client } from "../../graphql"
import { GET_ALL_USERS, GET_CURRENT_USER } from "./queries/user.queries"
import { getAllUsersQuery } from "./queries/__generated__/getAllUsersQuery"
import { PaymentMethodsInput } from "./../../../../__generated__/globalTypes"
import { addPaymentMethodMutation } from "./mutations/__generated__/addPaymentMethodMutation"
import { ADD_PAYMENT_METHOD } from "./mutations/user.mutations"
import { getCurrentUserQuery } from "./queries/__generated__/getCurrentUserQuery"

class UserService {
    async getAllUsers(): Promise<getAllUsersQuery["getAllUsers"]> {
        try {
            const response = await client.query({
                query: GET_ALL_USERS
            })

            if (!response || !response.data) throw new Error("Cannot get subscriptions list!")

            console.log("DATA: ", response.data)

            return response.data.getAllUsers

        } catch (err) {
            console.log(err)
            throw (err)
        }
    }

    async getCurrentUser(): Promise<getCurrentUserQuery["getCurrentUser"]> {
        try {
            const response = await client.query({
                query: GET_CURRENT_USER
            })

            if (!response || !response.data) throw new Error("Cannot get current user!")

            console.log("DATA: ", response.data)

            return response.data.getCurrentUser

        } catch (err) {
            console.log(err)
            throw (err)
        }
    }


    async addPaymentMethod(paymentMethodData: PaymentMethodsInput): Promise<addPaymentMethodMutation["addPaymentMethod"]> {
        try {
            const response = await client.mutate({
                mutation: ADD_PAYMENT_METHOD,
                variables: {paymentMethodData}
            })

            if (!response || !response.data) throw new Error("Cannot add the payment method!")

            console.log("DATA: ", response.data)

            return response.data.addPaymentMethod
            
        } catch (err){
            console.log(err)
            throw (err)
        }
    }
}

export default new UserService()