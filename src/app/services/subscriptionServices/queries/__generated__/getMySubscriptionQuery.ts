/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubscriptionStatus, DayOfTheWeek } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getMySubscriptionQuery
// ====================================================

export interface getMySubscriptionQuery_getMySubscription_address {
  __typename: "Address";
  city: string;
  number: number;
  postCode: number;
  province: string;
  street: string;
}

export interface getMySubscriptionQuery_getMySubscription {
  __typename: "Subscription";
  address: getMySubscriptionQuery_getMySubscription_address;
  status: SubscriptionStatus;
  deliveryWeekDay: DayOfTheWeek;
}

export interface getMySubscriptionQuery {
  getMySubscription: (getMySubscriptionQuery_getMySubscription | null)[] | null;
}
