/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMyActiveOrderQuery
// ====================================================

export interface getMyActiveOrderQuery_getMyActiveOrder_meals_mealID_images {
  __typename: "Images";
  finals: (string | null)[] | null;
}

export interface getMyActiveOrderQuery_getMyActiveOrder_meals_mealID {
  __typename: "Meal";
  name: string;
  price: number;
  images: getMyActiveOrderQuery_getMyActiveOrder_meals_mealID_images | null;
}

export interface getMyActiveOrderQuery_getMyActiveOrder_meals {
  __typename: "OrderMeals";
  mealID: getMyActiveOrderQuery_getMyActiveOrder_meals_mealID | null;
  quantity: number | null;
}

export interface getMyActiveOrderQuery_getMyActiveOrder {
  __typename: "Order";
  price: number | null;
  meals: (getMyActiveOrderQuery_getMyActiveOrder_meals | null)[] | null;
}

export interface getMyActiveOrderQuery {
  getMyActiveOrder: getMyActiveOrderQuery_getMyActiveOrder | null;
}

export interface getMyActiveOrderQueryVariables {
  userID: string;
}
