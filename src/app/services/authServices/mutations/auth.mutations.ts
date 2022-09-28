import { gql } from "@apollo/client";

export const LOG_IN = gql`
    mutation logInMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            value
        }
    }
`