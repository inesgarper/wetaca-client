/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getReviewsQuery
// ====================================================

export interface getReviewsQuery_getReviews_meal {
  __typename: "Meal";
  name: string;
}

export interface getReviewsQuery_getReviews {
  __typename: "Review";
  meal: getReviewsQuery_getReviews_meal;
  comment: string | null;
  rating: number;
}

export interface getReviewsQuery {
  getReviews: (getReviewsQuery_getReviews | null)[] | null;
}

export interface getReviewsQueryVariables {
  mealID: string;
}
