/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: removeMealFromOrderMutation
// ====================================================

export interface removeMealFromOrderMutation_removeMealFromOrder_meals_mealID_images {
  __typename: "Images";
  finals: (string | null)[] | null;
}

export interface removeMealFromOrderMutation_removeMealFromOrder_meals_mealID {
  __typename: "Meal";
  name: string;
  price: number;
  images: removeMealFromOrderMutation_removeMealFromOrder_meals_mealID_images | null;
}

export interface removeMealFromOrderMutation_removeMealFromOrder_meals {
  __typename: "OrderMeals";
  mealID: removeMealFromOrderMutation_removeMealFromOrder_meals_mealID | null;
  quantity: number | null;
}

export interface removeMealFromOrderMutation_removeMealFromOrder {
  __typename: "Order";
  price: number | null;
  meals: (removeMealFromOrderMutation_removeMealFromOrder_meals | null)[] | null;
}

export interface removeMealFromOrderMutation {
  removeMealFromOrder: removeMealFromOrderMutation_removeMealFromOrder | null;
}

export interface removeMealFromOrderMutationVariables {
  mealID?: string | null;
}
