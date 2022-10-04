/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addMealToOrderMutation
// ====================================================

export interface addMealToOrderMutation_addMealToOrder_mealID {
  __typename: "Meal";
  name: string;
}

export interface addMealToOrderMutation_addMealToOrder {
  __typename: "OrderMeals";
  mealID: addMealToOrderMutation_addMealToOrder_mealID | null;
  quantity: number | null;
}

export interface addMealToOrderMutation {
  addMealToOrder: (addMealToOrderMutation_addMealToOrder | null)[] | null;
}

export interface addMealToOrderMutationVariables {
  mealID?: string | null;
}
