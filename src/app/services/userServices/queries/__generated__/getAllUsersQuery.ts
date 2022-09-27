/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllUsersQuery
// ====================================================

export interface getAllUsersQuery_getAllUsers {
  __typename: "User";
  name: string;
  lastName: string;
  email: string;
  phoneNumber: number;
}

export interface getAllUsersQuery {
  getAllUsers: (getAllUsersQuery_getAllUsers | null)[] | null;
}
