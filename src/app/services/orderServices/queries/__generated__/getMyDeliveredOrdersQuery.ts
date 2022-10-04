/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMyDeliveredOrdersQuery
// ====================================================

export interface getMyDeliveredOrdersQuery_getMyDeliveredOrders_meals_mealID {
  __typename: "Meal";
  name: string;
}

export interface getMyDeliveredOrdersQuery_getMyDeliveredOrders_meals {
  __typename: "OrderMeals";
  mealID: getMyDeliveredOrdersQuery_getMyDeliveredOrders_meals_mealID | null;
  quantity: number | null;
}

export interface getMyDeliveredOrdersQuery_getMyDeliveredOrders {
  __typename: "Order";
  price: number | null;
  meals: (getMyDeliveredOrdersQuery_getMyDeliveredOrders_meals | null)[] | null;
}

export interface getMyDeliveredOrdersQuery {
  getMyDeliveredOrders: (getMyDeliveredOrdersQuery_getMyDeliveredOrders | null)[] | null;
}
