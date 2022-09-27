/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MealCategory } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getMealsByCategoryQuery
// ====================================================

export interface getMealsByCategoryQuery_getMealsByCategory {
  __typename: "Meal";
  name: string;
  category: MealCategory;
}

export interface getMealsByCategoryQuery {
  getMealsByCategory: (getMealsByCategoryQuery_getMealsByCategory | null)[] | null;
}

export interface getMealsByCategoryQueryVariables {
  mealCategory?: MealCategory | null;
}
