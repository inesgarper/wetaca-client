import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
    query getAllUsersQuery {
        getAllUsers {
            name
            lastName
            email
            phoneNumber
        }
    }
`

export const GET_CURRENT_USER = gql`
    query getCurrentUserQuery {
        getCurrentUser {
            name
            email
            id
        }
    }
`
