import { gql } from "@apollo/client";

export const LOG_IN = gql`
    mutation logInMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            value
        }
    }
`

export const SIGN_UP = gql`
    mutation signUpMutation($userData: UserInput) {
        createUser(userData: $userData) {
            name
            lastName
            email
            password
            phoneNumber
            birthDate
        }
    }
`
