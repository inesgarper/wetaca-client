/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MealCategory } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getAllMealsQuery
// ====================================================

export interface getAllMealsQuery_getAllMeals_unique_images {
  __typename: "Images";
  finals: string[];
}

export interface getAllMealsQuery_getAllMeals_unique {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getAllMealsQuery_getAllMeals_unique_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getAllMealsQuery_getAllMeals_light_images {
  __typename: "Images";
  finals: string[];
}

export interface getAllMealsQuery_getAllMeals_light {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getAllMealsQuery_getAllMeals_light_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getAllMealsQuery_getAllMeals_full_images {
  __typename: "Images";
  finals: string[];
}

export interface getAllMealsQuery_getAllMeals_full {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getAllMealsQuery_getAllMeals_full_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getAllMealsQuery_getAllMeals_veggie_images {
  __typename: "Images";
  finals: string[];
}

export interface getAllMealsQuery_getAllMeals_veggie {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getAllMealsQuery_getAllMeals_veggie_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getAllMealsQuery_getAllMeals_starter_images {
  __typename: "Images";
  finals: string[];
}

export interface getAllMealsQuery_getAllMeals_starter {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getAllMealsQuery_getAllMeals_starter_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getAllMealsQuery_getAllMeals_dessert_images {
  __typename: "Images";
  finals: string[];
}

export interface getAllMealsQuery_getAllMeals_dessert {
  __typename: "Meal";
  id: string;
  name: string;
  category: MealCategory;
  price: number;
  images: getAllMealsQuery_getAllMeals_dessert_images;
  currentlyInMenu: boolean | null;
  nextWeekInMenu: boolean | null;
}

export interface getAllMealsQuery_getAllMeals {
  __typename: "SortedMeals";
  unique: (getAllMealsQuery_getAllMeals_unique | null)[] | null;
  light: (getAllMealsQuery_getAllMeals_light | null)[] | null;
  full: (getAllMealsQuery_getAllMeals_full | null)[] | null;
  veggie: (getAllMealsQuery_getAllMeals_veggie | null)[] | null;
  starter: (getAllMealsQuery_getAllMeals_starter | null)[] | null;
  dessert: (getAllMealsQuery_getAllMeals_dessert | null)[] | null;
}

export interface getAllMealsQuery {
  getAllMeals: getAllMealsQuery_getAllMeals | null;
}
