/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubscriptionStatus } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateSubscriptionStatusMutation
// ====================================================

export interface updateSubscriptionStatusMutation_updateSubscriptionStatus {
  __typename: "Subscription";
  status: SubscriptionStatus;
}

export interface updateSubscriptionStatusMutation {
  updateSubscriptionStatus: updateSubscriptionStatusMutation_updateSubscriptionStatus | null;
}

export interface updateSubscriptionStatusMutationVariables {
  status: string;
}
