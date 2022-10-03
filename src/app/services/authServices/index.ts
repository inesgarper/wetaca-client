import { client } from "../../graphql"
import { LOG_IN, SIGN_UP } from "./mutations/auth.mutations"
import { logInMutation } from "./mutations/__generated__/logInMutation"
import { signUpMutation } from "./mutations/__generated__/signUpMutation"
import { UserInput } from "../../../../__generated__/globalTypes"

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

    async signup(userData: UserInput): Promise<signUpMutation["createUser"]> {
        try {
            console.log(userData)
            const response = await client.mutate({
                mutation: SIGN_UP,
                variables: {userData}
            })

            if (!response || !response.data) throw new Error("Cannot login!")

            console.log("DATA: ", response.data)

            return response.data.signup
        } catch (err) {
            console.log(err)
            throw (err)
        }
    }
}

export default new AuthService()