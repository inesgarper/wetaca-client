/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubscriptionStatus, DayOfTheWeek } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getOneUserSubscriptionQuery
// ====================================================

export interface getOneUserSubscriptionQuery_getOneUserSubscription_user {
  __typename: "User";
  name: string;
}

export interface getOneUserSubscriptionQuery_getOneUserSubscription_baseMenu_meals_perCategory {
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

export interface getOneUserSubscriptionQuery_getOneUserSubscription_baseMenu_meals {
  __typename: "Meals";
  total: number | null;
  perCategory: getOneUserSubscriptionQuery_getOneUserSubscription_baseMenu_meals_perCategory | null;
}

export interface getOneUserSubscriptionQuery_getOneUserSubscription_baseMenu {
  __typename: "BaseMenu";
  meals: getOneUserSubscriptionQuery_getOneUserSubscription_baseMenu_meals | null;
  maxPrice: number | null;
}

export interface getOneUserSubscriptionQuery_getOneUserSubscription_address {
  __typename: "Address";
  street: string;
  number: number;
  city: string;
  province: string;
  postCode: number;
}

export interface getOneUserSubscriptionQuery_getOneUserSubscription {
  __typename: "Subscription";
  user: getOneUserSubscriptionQuery_getOneUserSubscription_user;
  status: SubscriptionStatus;
  baseMenu: getOneUserSubscriptionQuery_getOneUserSubscription_baseMenu | null;
  address: getOneUserSubscriptionQuery_getOneUserSubscription_address;
  deliveryWeekDay: DayOfTheWeek;
}

export interface getOneUserSubscriptionQuery {
  getOneUserSubscription: getOneUserSubscriptionQuery_getOneUserSubscription | null;
}

export interface getOneUserSubscriptionQueryVariables {
  userID: string;
}
