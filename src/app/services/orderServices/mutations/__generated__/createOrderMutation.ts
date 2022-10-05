/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderStatus } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createOrderMutation
// ====================================================

export interface createOrderMutation_createOrder {
  __typename: "Order";
  status: OrderStatus | null;
}

export interface createOrderMutation {
  createOrder: createOrderMutation_createOrder | null;
}
