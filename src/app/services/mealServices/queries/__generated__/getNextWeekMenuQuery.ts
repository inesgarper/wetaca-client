/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MealCategory } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getNextWeekMenuQuery
// ====================================================

export interface getNextWeekMenuQuery_getNextWeekMenu_unique_images {
  __typename: "Images";
  finals: string[];
}

export interface getNextWeekMenuQuery_getNextWeekMenu_unique {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getNextWeekMenuQuery_getNextWeekMenu_unique_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getNextWeekMenuQuery_getNextWeekMenu_light_images {
  __typename: "Images";
  finals: string[];
}

export interface getNextWeekMenuQuery_getNextWeekMenu_light {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getNextWeekMenuQuery_getNextWeekMenu_light_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getNextWeekMenuQuery_getNextWeekMenu_full_images {
  __typename: "Images";
  finals: string[];
}

export interface getNextWeekMenuQuery_getNextWeekMenu_full {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getNextWeekMenuQuery_getNextWeekMenu_full_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getNextWeekMenuQuery_getNextWeekMenu_veggie_images {
  __typename: "Images";
  finals: string[];
}

export interface getNextWeekMenuQuery_getNextWeekMenu_veggie {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getNextWeekMenuQuery_getNextWeekMenu_veggie_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getNextWeekMenuQuery_getNextWeekMenu_starter_images {
  __typename: "Images";
  finals: string[];
}

export interface getNextWeekMenuQuery_getNextWeekMenu_starter {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getNextWeekMenuQuery_getNextWeekMenu_starter_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getNextWeekMenuQuery_getNextWeekMenu_dessert_images {
  __typename: "Images";
  finals: string[];
}

export interface getNextWeekMenuQuery_getNextWeekMenu_dessert {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getNextWeekMenuQuery_getNextWeekMenu_dessert_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getNextWeekMenuQuery_getNextWeekMenu {
  __typename: "SortedMeals";
  unique: (getNextWeekMenuQuery_getNextWeekMenu_unique | null)[] | null;
  light: (getNextWeekMenuQuery_getNextWeekMenu_light | null)[] | null;
  full: (getNextWeekMenuQuery_getNextWeekMenu_full | null)[] | null;
  veggie: (getNextWeekMenuQuery_getNextWeekMenu_veggie | null)[] | null;
  starter: (getNextWeekMenuQuery_getNextWeekMenu_starter | null)[] | null;
  dessert: (getNextWeekMenuQuery_getNextWeekMenu_dessert | null)[] | null;
}

export interface getNextWeekMenuQuery {
  getNextWeekMenu: getNextWeekMenuQuery_getNextWeekMenu | null;
}
