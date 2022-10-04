import { client } from "../../graphql";
import { UPDATE_DELIVERY_WEEK_DAY, UPDATE_SUBSCRIPTION_STATUS } from "./mutations/subscription.mutations";
import { updateDeliveryWeekDayMutation } from "./mutations/__generated__/updateDeliveryWeekDayMutation";
import { updateSubscriptionStatusMutation } from "./mutations/__generated__/updateSubscriptionStatusMutation";
import { GET_ALL_SUBSCRIPTIONS, GET_MY_SUBSCRIPTION, GET_ONE_USER_SUBSCRIPTION } from "./queries/subscription.queries";
import { getAllSubscriptionsQuery } from "./queries/__generated__/getAllSubscriptionsQuery";
import { getMySubscriptionQuery } from "./queries/__generated__/getMySubscriptionQuery";
import { getOneUserSubscriptionQuery } from "./queries/__generated__/getOneUserSubscriptionQuery";
import { SubscriptionInput } from "../../../../__generated__/globalTypes"
import { createSubscriptionMutation } from "./mutations/__generated__/createSubscriptionMutation";
import { CREATE_BASE_MENU, CREATE_SUBSCRIPTION, DELETE_SUBSCRIPTION } from "./mutations/subscription.mutations";
import { deleteSubscriptionMutation } from "./mutations/__generated__/deleteSubscriptionMutation";
import { createBaseMenuMutation } from "./mutations/__generated__/createBaseMenuMutation";


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
    async createSubscription(subscriptionData: SubscriptionInput): Promise<createSubscriptionMutation["createSubscription"]> {
        try {
            const response = await client.mutate({
                mutation: CREATE_SUBSCRIPTION,
                variables: { subscriptionData }
            })

            if (!response || !response.data) throw new Error("Cannot create the subscription!")

            console.log("DATA: ", response.data)

            return response.data.createSubscription

        } catch (err) {
            console.log(err)
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
    async deleteSubscription(subscriptionID: string): Promise<deleteSubscriptionMutation["deleteSubscription"]> {
        try {
            const response = await client.mutate({
                mutation: DELETE_SUBSCRIPTION,
                variables: { subscriptionID }
            })

            if (!response || !response.data) throw new Error("Cannot delete the subscription!")

            console.log("DATA: ", response.data)

            return response.data.deleteSubscription

        } catch (err) {
            console.log(err)
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
    async createBaseMenu(): Promise<createBaseMenuMutation["createBaseMenu"]> {
        try {
            const response = await client.mutate({
                mutation: CREATE_BASE_MENU,
            })

            if (!response || !response.data) throw new Error("Cannot create the base menu!")

            console.log("DATA: ", response.data)

            return response.data.createBaseMenu

        } catch (err) {
            console.log(err)
            throw (err)
        }
    }

}

export default new SubscriptionService()