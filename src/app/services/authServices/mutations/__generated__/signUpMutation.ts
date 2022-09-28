/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInput } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: signUpMutation
// ====================================================

export interface signUpMutation_createUser {
  __typename: "User";
  name: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: number;
  birthDate: any;
}

export interface signUpMutation {
  createUser: signUpMutation_createUser | null;
}

export interface signUpMutationVariables {
  userData?: UserInput | null;
}
