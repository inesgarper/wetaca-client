import { client } from "../../graphql";
import { GET_ALL_ORDERS, GET_MY_ACTIVE_ORDER, GET_MY_DELIVERED_ORDERS, GET_MY_NEXT_ORDER, GET_NEXT_WEEK_ORDERS, GET_ORDER_DETAILS } from "./queries/order.queries";
import { ADD_MEAL_TO_ORDER, CONFIRM_ORDER, CREATE_ORDER, REMOVE_MEAL_FROM_ORDER, UPDATE_DELIVERY_DATE } from "./mutations/order.mutations";
import { addMealToOrderMutation } from "./mutations/__generated__/addMealToOrderMutation";
import { removeMealFromOrderMutation } from "./mutations/__generated__/removeMealFromOrderMutation";
import { getAllOrdersQuery } from "./queries/__generated__/getAllOrdersQuery";
import { getMyDeliveredOrdersQuery } from "./queries/__generated__/getMyDeliveredOrdersQuery";
import { getNextWeekOrdersQuery } from "./queries/__generated__/getNextWeekOrdersQuery";
import { getOrderDetailsQuery } from "./queries/__generated__/getOrderDetailsQuery";
import { createOrderMutation } from "./mutations/__generated__/createOrderMutation";
import { updateDeliveryDateMutation } from "./mutations/__generated__/updateDeliveryDateMutation";
import { DeliveryDateInput } from "../../../../__generated__/globalTypes"
import { confirmOrderMutation } from "./mutations/__generated__/confirmOrderMutation";
import { getMyActiveOrderQuery } from "./queries/__generated__/getMyActiveOrderQuery";
import { getMyNextOrderQuery } from "./queries/__generated__/getMyNextOrderQuery";

class OrderService {
    async getAllOrders(): Promise<getAllOrdersQuery["getAllOrders"]> {
        try {
            const response = await client.query({
                query: GET_ALL_ORDERS
            })

            if (!response || !response.data) throw new Error("Cannot get orders list!")

            console.log("DATA: ", response.data)

            return response.data.getAllOrders

        } catch (err) {
            console.log(err)
            throw (err)
        }
    }

    async getOrderDetails(orderID: string): Promise<getOrderDetailsQuery["getOneOrder"]> {
        try {
            const response = await client.query({
                query: GET_ORDER_DETAILS,
                variables: { orderID }
            })

            if (!response || !response.data) throw new Error("Cannot get order details!")

            console.log("DATA: ", response.data)

            return response.data.getOneOrder

        } catch (err) {
            console.log(err)
            throw (err)
        }
    }

    async getNextWeekOrders(): Promise<getNextWeekOrdersQuery["getNextOrders"]> {
        try {
            const response = await client.query({
                query: GET_NEXT_WEEK_ORDERS
            })

            if (!response || !response.data) throw new Error("Cannot get orders list!")

            return response.data.getNextOrders

        } catch (err) {
            console.log(err)
            throw (err)
        }
    }

    async getMyActiveOrder(userID: string): Promise<getMyActiveOrderQuery["getMyActiveOrder"]> {
        try {
            const response = await client.query({
                query: GET_MY_ACTIVE_ORDER,
                variables: { userID }
            })

            if (!response || !response.data) throw new Error("Cannot get active order")
            return response.data.getMyActiveOrder

        } catch (err) {
            console.log(err)
            throw (err)
        }
    }
    
    async getMyNextOrder(): Promise<getMyNextOrderQuery["getMyNextOrder"]> {
        try {
            const response = await client.query({
                query: GET_MY_NEXT_ORDER
            })

            if (!response || !response.data) throw new Error("Cannot get next order")
            return response.data.getMyNextOrder

        } catch (err) {
            console.log(err)
            throw (err)
        }
    }

    async getMyDeliveredOrders(): Promise<getMyDeliveredOrdersQuery["getMyDeliveredOrders"]> {
        try {
            const response = await client.query({
                query: GET_MY_DELIVERED_ORDERS
            })

            if (!response || !response.data) throw new Error("Cannot get delivered orders")
            return response.data.getMyDeliveredOrders

        } catch (err) {
            throw (err)
        }
    }

    async addMealToOrder(mealID: string): Promise<addMealToOrderMutation["addMealToOrder"]> {
        try {
            const response = await client.mutate({
                mutation: ADD_MEAL_TO_ORDER,
                variables: { mealID }
            })

            if (!response || !response.data) throw new Error("Cannot add meal to order!")

            console.log("DATA: ", response.data)

            return response.data.addMealToOrder

        } catch (err) {
            console.log(err)
            throw (err)
        }
    }

    async removeMealFromOrder(mealID: string): Promise<removeMealFromOrderMutation["removeMealFromOrder"]> {
        try {
            const response = await client.mutate({
                mutation: REMOVE_MEAL_FROM_ORDER,
                variables: { mealID }
            })

            if (!response || !response.data) throw new Error("Cannot remove meal from order!")

            console.log("DATA: ", response.data)

            return response.data.removeMealFromOrder

        } catch (err) {
            console.log(err)
            throw (err)
        }
    }

    async createOrder(): Promise<createOrderMutation["createOrder"]> {
        try {
            const response = await client.mutate({
                mutation: CREATE_ORDER,
            })

            if (!response || !response.data) throw new Error("Cannot create order!")

            return response.data.createOrder

        } catch (err) {
            throw (err)
        }
    }

    async updateDeliveryDate(deliveryDate: DeliveryDateInput): Promise<updateDeliveryDateMutation["updateDeliveryDate"]> {
        try {
            const response = await client.mutate({
                mutation: UPDATE_DELIVERY_DATE,
                variables: { deliveryDate }
            })

            if (!response || !response.data) throw new Error("Cannot update delivery date!")

            return response.data.updateDeliveryDate

        } catch (err) {
            throw (err)
        }
    }

    async confirmOrder(): Promise<confirmOrderMutation["confirmOrder"]> {
        try {
            const response = await client.mutate({
                mutation: CONFIRM_ORDER
            })

            if (!response || !response.data) throw new Error("Cannot confirm order!")

            return response.data.confirmOrder

        } catch (err) {
            throw (err)
        }
    }
}

export default new OrderService()