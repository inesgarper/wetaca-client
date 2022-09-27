/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMenuQuery
// ====================================================

export interface getMenuQuery_getMenu {
  __typename: "Meal";
  name: string;
  currentlyInMenu: boolean | null;
}

export interface getMenuQuery {
  getMenu: (getMenuQuery_getMenu | null)[] | null;
}
