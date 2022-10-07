/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MealCategory } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getMenuQuery
// ====================================================

export interface getMenuQuery_getMenu_unique_images {
  __typename: "Images";
  finals: string[];
}

export interface getMenuQuery_getMenu_unique {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getMenuQuery_getMenu_unique_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getMenuQuery_getMenu_light_images {
  __typename: "Images";
  finals: string[];
}

export interface getMenuQuery_getMenu_light {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getMenuQuery_getMenu_light_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getMenuQuery_getMenu_full_images {
  __typename: "Images";
  finals: string[];
}

export interface getMenuQuery_getMenu_full {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getMenuQuery_getMenu_full_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getMenuQuery_getMenu_veggie_images {
  __typename: "Images";
  finals: string[];
}

export interface getMenuQuery_getMenu_veggie {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getMenuQuery_getMenu_veggie_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getMenuQuery_getMenu_starter_images {
  __typename: "Images";
  finals: string[];
}

export interface getMenuQuery_getMenu_starter {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getMenuQuery_getMenu_starter_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getMenuQuery_getMenu_dessert_images {
  __typename: "Images";
  finals: string[];
}

export interface getMenuQuery_getMenu_dessert {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getMenuQuery_getMenu_dessert_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getMenuQuery_getMenu {
  __typename: "SortedMeals";
  unique: (getMenuQuery_getMenu_unique | null)[] | null;
  light: (getMenuQuery_getMenu_light | null)[] | null;
  full: (getMenuQuery_getMenu_full | null)[] | null;
  veggie: (getMenuQuery_getMenu_veggie | null)[] | null;
  starter: (getMenuQuery_getMenu_starter | null)[] | null;
  dessert: (getMenuQuery_getMenu_dessert | null)[] | null;
}

export interface getMenuQuery {
  getMenu: getMenuQuery_getMenu | null;
}
