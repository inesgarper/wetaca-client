/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubscriptionStatus, OrderStatus, MealCategory } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getOrderDetailsQuery
// ====================================================

export interface getOrderDetailsQuery_getOneOrder_subscription_user {
  __typename: "User";
  name: string;
}

export interface getOrderDetailsQuery_getOneOrder_subscription {
  __typename: "Subscription";
  status: SubscriptionStatus;
  user: getOrderDetailsQuery_getOneOrder_subscription_user;
}

export interface getOrderDetailsQuery_getOneOrder_meals_mealID {
  __typename: "Meal";
  name: string;
  category: MealCategory;
}

export interface getOrderDetailsQuery_getOneOrder_meals {
  __typename: "OrderMeals";
  mealID: getOrderDetailsQuery_getOneOrder_meals_mealID | null;
  quantity: number | null;
}

export interface getOrderDetailsQuery_getOneOrder {
  __typename: "Order";
  subscription: getOrderDetailsQuery_getOneOrder_subscription | null;
  status: OrderStatus | null;
  price: number | null;
  meals: (getOrderDetailsQuery_getOneOrder_meals | null)[] | null;
}

export interface getOrderDetailsQuery {
  getOneOrder: getOrderDetailsQuery_getOneOrder | null;
}

export interface getOrderDetailsQueryVariables {
  orderID: string;
}
