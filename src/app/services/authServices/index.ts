import { client } from "../../graphql"
import { LOG_IN } from "./mutations/auth.mutations"
import { logInMutation } from "./mutations/__generated__/logInMutation"

class AuthService {
    async login(email: string, password: string): Promise<logInMutation["login"]> {
        try {
            const response = await client.mutate({
                mutation: LOG_IN,
                variables: {email, password}
            })

            if (!response || !response.data) throw new Error("Cannot login!")

            console.log("DATA: ", response.data)

            return response.data.login

        } catch (err) {
            console.log(err)
            throw (err)
        }
    }
}

export default new AuthService()