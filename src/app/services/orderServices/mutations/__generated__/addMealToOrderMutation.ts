/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addMealToOrderMutation
// ====================================================

export interface addMealToOrderMutation_addMealToOrder_meals_mealID_images {
  __typename: "Images";
  finals: string[];
}

export interface addMealToOrderMutation_addMealToOrder_meals_mealID {
  __typename: "Meal";
  name: string;
  price: number;
  images: addMealToOrderMutation_addMealToOrder_meals_mealID_images;
}

export interface addMealToOrderMutation_addMealToOrder_meals {
  __typename: "OrderMeals";
  mealID: addMealToOrderMutation_addMealToOrder_meals_mealID | null;
  quantity: number | null;
}

export interface addMealToOrderMutation_addMealToOrder {
  __typename: "Order";
  price: number | null;
  meals: (addMealToOrderMutation_addMealToOrder_meals | null)[] | null;
}

export interface addMealToOrderMutation {
  addMealToOrder: addMealToOrderMutation_addMealToOrder | null;
}

export interface addMealToOrderMutationVariables {
  mealID?: string | null;
}
