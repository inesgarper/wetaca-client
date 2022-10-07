/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCurrentUserQuery
// ====================================================

export interface getCurrentUserQuery_getCurrentUser {
  __typename: "User";
  name: string;
  email: string;
  id: string;
}

export interface getCurrentUserQuery {
  getCurrentUser: getCurrentUserQuery_getCurrentUser | null;
}
