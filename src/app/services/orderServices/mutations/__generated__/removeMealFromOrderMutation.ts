/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: removeMealFromOrderMutation
// ====================================================

export interface removeMealFromOrderMutation_removeMealFromOrder_mealID {
  __typename: "Meal";
  name: string;
}

export interface removeMealFromOrderMutation_removeMealFromOrder {
  __typename: "OrderMeals";
  mealID: removeMealFromOrderMutation_removeMealFromOrder_mealID | null;
  quantity: number | null;
}

export interface removeMealFromOrderMutation {
  removeMealFromOrder: (removeMealFromOrderMutation_removeMealFromOrder | null)[] | null;
}

export interface removeMealFromOrderMutationVariables {
  mealID?: string | null;
}
