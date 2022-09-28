/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: logInMutation
// ====================================================

export interface logInMutation_login {
  __typename: "Token";
  value: string;
}

export interface logInMutation {
  login: logInMutation_login | null;
}

export interface logInMutationVariables {
  email: string;
  password: string;
}
