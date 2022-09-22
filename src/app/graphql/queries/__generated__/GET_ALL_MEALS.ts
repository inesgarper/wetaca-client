import { MealCategory } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GET_ALL_MEALS
// ====================================================

export interface MEAL_getAllMeals {
  __typename: "Meal";
  name: string;
  category: MealCategory;
  price: number;
}

export interface GET_ALL_MEALS {
  getAllMeals: (MEAL_getAllMeals | null)[] | null;
}
