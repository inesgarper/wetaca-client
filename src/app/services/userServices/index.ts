import { client } from "../../graphql"
import { GET_ALL_USERS } from "./queries/user.queries"
import { getAllUsersQuery } from "./queries/__generated__/getAllUsersQuery"

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
}

export default new UserService()