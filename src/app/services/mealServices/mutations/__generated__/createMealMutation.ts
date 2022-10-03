/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MealInput, MealCategory } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createMealMutation
// ====================================================

export interface createMealMutation_createMeal {
  __typename: "Meal";
  name: string;
  category: MealCategory;
  price: number;
}

export interface createMealMutation {
  createMeal: createMealMutation_createMeal | null;
}

export interface createMealMutationVariables {
  mealData?: MealInput | null;
}
