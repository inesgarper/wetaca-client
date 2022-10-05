/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMyNextOrderQuery
// ====================================================

export interface getMyNextOrderQuery_getMyNextOrder_meals_mealID_images {
  __typename: "Images";
  finals: (string | null)[] | null;
}

export interface getMyNextOrderQuery_getMyNextOrder_meals_mealID {
  __typename: "Meal";
  name: string;
  price: number;
  images: getMyNextOrderQuery_getMyNextOrder_meals_mealID_images | null;
}

export interface getMyNextOrderQuery_getMyNextOrder_meals {
  __typename: "OrderMeals";
  mealID: getMyNextOrderQuery_getMyNextOrder_meals_mealID | null;
  quantity: number | null;
}

export interface getMyNextOrderQuery_getMyNextOrder {
  __typename: "Order";
  price: number | null;
  meals: (getMyNextOrderQuery_getMyNextOrder_meals | null)[] | null;
}

export interface getMyNextOrderQuery {
  getMyNextOrder: getMyNextOrderQuery_getMyNextOrder | null;
}
