/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createBaseMenuMutation
// ====================================================

export interface createBaseMenuMutation_createBaseMenu_meals_perCategory {
  __typename: "Categories";
  chicken: number | null;
  dessert: number | null;
  fish: number | null;
  full: number | null;
  gratinated: number | null;
  international: number | null;
  legume: number | null;
  light: number | null;
  meat: number | null;
  pasta: number | null;
  rice: number | null;
  starter: number | null;
}

export interface createBaseMenuMutation_createBaseMenu_meals {
  __typename: "Meals";
  perCategory: createBaseMenuMutation_createBaseMenu_meals_perCategory | null;
  total: number | null;
}

export interface createBaseMenuMutation_createBaseMenu {
  __typename: "BaseMenu";
  maxPrice: number | null;
  meals: createBaseMenuMutation_createBaseMenu_meals | null;
}

export interface createBaseMenuMutation {
  createBaseMenu: createBaseMenuMutation_createBaseMenu | null;
}
