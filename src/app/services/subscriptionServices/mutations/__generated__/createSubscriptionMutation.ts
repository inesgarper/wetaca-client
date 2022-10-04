/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubscriptionInput, SubscriptionStatus } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createSubscriptionMutation
// ====================================================

export interface createSubscriptionMutation_createSubscription {
  __typename: "Subscription";
  status: SubscriptionStatus;
}

export interface createSubscriptionMutation {
  createSubscription: createSubscriptionMutation_createSubscription | null;
}

export interface createSubscriptionMutationVariables {
  subscriptionData: SubscriptionInput;
}
