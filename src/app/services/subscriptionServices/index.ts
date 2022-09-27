import { client } from "../../graphql";
import { GET_ALL_SUBSCRIPTIONS, GET_ONE_USER_SUBSCRIPTION } from "./queries/subscription.queries";
import { getAllSubscriptionsQuery } from "./queries/__generated__/getAllSubscriptionsQuery";
import { getOneUserSubscriptionQuery } from "./queries/__generated__/getOneUserSubscriptionQuery";



class SubscriptionService {
    async getAllSubscriptions(): Promise<getAllSubscriptionsQuery["getAllSubscriptions"]> {
        try {
            const response = await client.query({
                query: GET_ALL_SUBSCRIPTIONS
            })

            if (!response || !response.data) throw new Error("Cannot get subscriptions list!")

            console.log("DATA: ", response.data)

            return response.data.getAllSubscriptions

        } catch (err) {
            console.log(err)
            throw (err)
        }
    }

    async getSubscriptionDetails(userID: string): Promise<getOneUserSubscriptionQuery["getOneUserSubscription"]> {
        try {
            const response = await client.query({
                query: GET_ONE_USER_SUBSCRIPTION,
                variables: {userID}
            })

            if (!response || !response.data) throw new Error("Cannot get subsctiption details!")

            console.log("DATA: ", response.data)

            return response.data.getOneUserSubscription

        } catch (err) {
            console.log(err)
            throw (err)
        }
    } 
}

export default new SubscriptionService()