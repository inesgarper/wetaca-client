import { client } from "../../graphql";
import { UPDATE_DELIVERY_WEEK_DAY, UPDATE_SUBSCRIPTION_STATUS } from "./mutations/subscription.mutations";
import { updateDeliveryWeekDayMutation } from "./mutations/__generated__/updateDeliveryWeekDayMutation";
import { updateSubscriptionStatusMutation } from "./mutations/__generated__/updateSubscriptionStatusMutation";
import { GET_ALL_SUBSCRIPTIONS, GET_MY_SUBSCRIPTION, GET_ONE_USER_SUBSCRIPTION } from "./queries/subscription.queries";
import { getAllSubscriptionsQuery } from "./queries/__generated__/getAllSubscriptionsQuery";
import { getMySubscriptionQuery } from "./queries/__generated__/getMySubscriptionQuery";
import { getOneUserSubscriptionQuery } from "./queries/__generated__/getOneUserSubscriptionQuery";



class SubscriptionService {
    async getAllSubscriptions(): Promise<getAllSubscriptionsQuery["getAllSubscriptions"]> {
        try {
            const response = await client.query({
                query: GET_ALL_SUBSCRIPTIONS
            })

            if (!response || !response.data) throw new Error("Cannot get subscriptions list!")

            return response.data.getAllSubscriptions

        } catch (err) {
            throw (err)
        }
    }

    async getSubscriptionDetails(userID: string): Promise<getOneUserSubscriptionQuery["getOneUserSubscription"]> {
        try {
            const response = await client.query({
                query: GET_ONE_USER_SUBSCRIPTION,
                variables: { userID }
            })

            if (!response || !response.data) throw new Error("Cannot get subsctiption details!")

            return response.data.getOneUserSubscription

        } catch (err) {
            throw (err)
        }
    }

    async getMySubscription(): Promise<getMySubscriptionQuery["getMySubscription"]> {
        try {
            const response = await client.query({
                query: GET_MY_SUBSCRIPTION,
            })

            if (!response || !response.data) throw new Error("Cannot get subsctiption details!")

            return response.data.getMySubscription

        } catch (err) {
            throw (err)
        }
    }

    async updateSubscriptionStatus(status: string): Promise<updateSubscriptionStatusMutation["updateSubscriptionStatus"]> {
        try {
            const response = await client.mutate({
                mutation: UPDATE_SUBSCRIPTION_STATUS,
                variables: { status }
            })

            if (!response || !response.data) throw new Error("Cannot update subsctiption's status!")

            return response.data.updateSubscriptionStatus

        } catch (err) {
            throw (err)
        }
    }

    async updateDeliveryWeekDay(day: string): Promise<updateDeliveryWeekDayMutation["updateDeliveryWeekDay"]> {
        try {
            const response = await client.mutate({
                mutation: UPDATE_DELIVERY_WEEK_DAY,
                variables: { day }
            })

            if (!response || !response.data) throw new Error("Cannot update subsctiption's delivery week day!")

            return response.data.updateDeliveryWeekDay

        } catch (err) {
            throw (err)
        }
    }
}

export default new SubscriptionService()