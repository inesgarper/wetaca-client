/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getNutritionalValuesQuery
// ====================================================

export interface getNutritionalValuesQuery_getNutritionalValues {
  __typename: "NutritionalValues";
  calories: number | null;
}

export interface getNutritionalValuesQuery {
  getNutritionalValues: getNutritionalValuesQuery_getNutritionalValues | null;
}

export interface getNutritionalValuesQueryVariables {
  mealID?: string | null;
}
