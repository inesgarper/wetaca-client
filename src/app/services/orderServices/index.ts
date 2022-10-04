import { client } from "../../graphql";
import { GET_ALL_ORDERS, GET_MY_DELIVERED_ORDERS, GET_NEXT_WEEK_ORDERS, GET_ORDER_DETAILS } from "./queries/order.queries";
import { getAllOrdersQuery } from "./queries/__generated__/getAllOrdersQuery";
import { getMyDeliveredOrdersQuery } from "./queries/__generated__/getMyDeliveredOrdersQuery";
import { getNextWeekOrdersQuery } from "./queries/__generated__/getNextWeekOrdersQuery";
import { getOrderDetailsQuery } from "./queries/__generated__/getOrderDetailsQuery";

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
}

export default new OrderService()