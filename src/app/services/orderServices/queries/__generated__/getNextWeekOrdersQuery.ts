/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubscriptionStatus, OrderStatus, MealCategory } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getNextWeekOrdersQuery
// ====================================================

export interface getNextWeekOrdersQuery_getNextOrders_subscription {
  __typename: "Subscription";
  status: SubscriptionStatus;
}

export interface getNextWeekOrdersQuery_getNextOrders_meals_mealID {
  __typename: "Meal";
  name: string;
  category: MealCategory;
}

export interface getNextWeekOrdersQuery_getNextOrders_meals {
  __typename: "OrderMeals";
  mealID: getNextWeekOrdersQuery_getNextOrders_meals_mealID | null;
  quantity: number | null;
}

export interface getNextWeekOrdersQuery_getNextOrders {
  __typename: "Order";
  subscription: getNextWeekOrdersQuery_getNextOrders_subscription | null;
  status: OrderStatus | null;
  price: number | null;
  meals: (getNextWeekOrdersQuery_getNextOrders_meals | null)[] | null;
}

export interface getNextWeekOrdersQuery {
  getNextOrders: (getNextWeekOrdersQuery_getNextOrders | null)[] | null;
}
