/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addMealToMenuMutation
// ====================================================

export interface addMealToMenuMutation_addMealToMenu {
  __typename: "Meal";
  name: string;
}

export interface addMealToMenuMutation {
  addMealToMenu: addMealToMenuMutation_addMealToMenu | null;
}

export interface addMealToMenuMutationVariables {
  mealID?: string | null;
}
