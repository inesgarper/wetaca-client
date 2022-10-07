/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: removeMealFromMenuMutation
// ====================================================

export interface removeMealFromMenuMutation_removeMealFromMenu {
  __typename: "Meal";
  name: string;
}

export interface removeMealFromMenuMutation {
  removeMealFromMenu: removeMealFromMenuMutation_removeMealFromMenu | null;
}

export interface removeMealFromMenuMutationVariables {
  mealID?: string | null;
}
