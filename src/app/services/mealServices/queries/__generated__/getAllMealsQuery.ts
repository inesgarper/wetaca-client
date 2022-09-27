/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MealCategory } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getAllMealsQuery
// ====================================================

export interface getAllMealsQuery_getAllMeals {
  __typename: "Meal";
  name: string;
  category: MealCategory;
  price: number;
}

export interface getAllMealsQuery {
  getAllMeals: (getAllMealsQuery_getAllMeals | null)[] | null;
}
