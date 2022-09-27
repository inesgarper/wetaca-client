/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MealCategory } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getMealDetailsQuery
// ====================================================

export interface getMealDetailsQuery_getMealDetails {
  __typename: "Meal";
  name: string;
  category: MealCategory;
  price: number;
}

export interface getMealDetailsQuery {
  getMealDetails: getMealDetailsQuery_getMealDetails | null;
}

export interface getMealDetailsQueryVariables {
  mealID?: string | null;
}
