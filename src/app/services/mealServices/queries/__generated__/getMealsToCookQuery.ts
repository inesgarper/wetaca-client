/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMealsToCookQuery
// ====================================================

export interface getMealsToCookQuery_getMealsToCook_meal {
  __typename: "Meal";
  name: string;
}

export interface getMealsToCookQuery_getMealsToCook {
  __typename: "MealToCook";
  meal: getMealsToCookQuery_getMealsToCook_meal | null;
  quantity: number | null;
}

export interface getMealsToCookQuery {
  getMealsToCook: (getMealsToCookQuery_getMealsToCook | null)[] | null;
}
