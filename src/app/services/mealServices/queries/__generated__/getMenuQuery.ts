/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMenuQuery
// ====================================================

export interface getMenuQuery_getMenu_images {
  __typename: "Images";
  finals: (string | null)[] | null;
}

export interface getMenuQuery_getMenu {
  __typename: "Meal";
  id: string;
  name: string;
  images: getMenuQuery_getMenu_images | null;
}

export interface getMenuQuery {
  getMenu: (getMenuQuery_getMenu | null)[] | null;
}
