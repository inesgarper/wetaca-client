/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubscriptionStatus, DayOfTheWeek } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getAllSubscriptionsQuery
// ====================================================

export interface getAllSubscriptionsQuery_getAllSubscriptions_user {
  __typename: "User";
  name: string;
}

export interface getAllSubscriptionsQuery_getAllSubscriptions_baseMenu_meals_perCategory {
  __typename: "Categories";
  meat: number | null;
  chicken: number | null;
  fish: number | null;
  pasta: number | null;
  rice: number | null;
  gratinated: number | null;
  legume: number | null;
  international: number | null;
  veggie: number | null;
  starter: number | null;
  full: number | null;
  light: number | null;
  dessert: number | null;
}

export interface getAllSubscriptionsQuery_getAllSubscriptions_baseMenu_meals {
  __typename: "Meals";
  total: number | null;
  perCategory: getAllSubscriptionsQuery_getAllSubscriptions_baseMenu_meals_perCategory | null;
}

export interface getAllSubscriptionsQuery_getAllSubscriptions_baseMenu {
  __typename: "BaseMenu";
  meals: getAllSubscriptionsQuery_getAllSubscriptions_baseMenu_meals | null;
  maxPrice: number | null;
}

export interface getAllSubscriptionsQuery_getAllSubscriptions_address {
  __typename: "Address";
  street: string;
  number: number;
  city: string;
  province: string;
  postCode: number;
}

export interface getAllSubscriptionsQuery_getAllSubscriptions {
  __typename: "Subscription";
  user: getAllSubscriptionsQuery_getAllSubscriptions_user;
  status: SubscriptionStatus;
  baseMenu: getAllSubscriptionsQuery_getAllSubscriptions_baseMenu | null;
  address: getAllSubscriptionsQuery_getAllSubscriptions_address;
  deliveryWeekDay: DayOfTheWeek;
}

export interface getAllSubscriptionsQuery {
  getAllSubscriptions: (getAllSubscriptionsQuery_getAllSubscriptions | null)[] | null;
}
