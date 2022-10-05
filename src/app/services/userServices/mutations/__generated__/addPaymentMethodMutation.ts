/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaymentMethodsInput } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: addPaymentMethodMutation
// ====================================================

export interface addPaymentMethodMutation_addPaymentMethod_paymentMethods {
  __typename: "PaymentMethods";
  cardName: string | null;
  cardNumber: string | null;
  expiration: any | null;
  securityCode: number | null;
}

export interface addPaymentMethodMutation_addPaymentMethod {
  __typename: "User";
  paymentMethods: (addPaymentMethodMutation_addPaymentMethod_paymentMethods | null)[] | null;
}

export interface addPaymentMethodMutation {
  addPaymentMethod: addPaymentMethodMutation_addPaymentMethod | null;
}

export interface addPaymentMethodMutationVariables {
  paymentMethodData: PaymentMethodsInput;
}
