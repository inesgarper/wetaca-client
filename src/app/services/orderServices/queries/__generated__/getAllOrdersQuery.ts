/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubscriptionStatus, OrderStatus } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getAllOrdersQuery
// ====================================================

export interface getAllOrdersQuery_getAllOrders_subscription {
  __typename: "Subscription";
  status: SubscriptionStatus;
}

export interface getAllOrdersQuery_getAllOrders {
  __typename: "Order";
  subscription: getAllOrdersQuery_getAllOrders_subscription | null;
  status: OrderStatus | null;
  price: number | null;
}

export interface getAllOrdersQuery {
  getAllOrders: (getAllOrdersQuery_getAllOrders | null)[] | null;
}
