/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum DayOfTheWeek {
  MONDAY = "MONDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
}

export enum MealCategory {
  CHICKEN = "CHICKEN",
  DESSERT = "DESSERT",
  FISH = "FISH",
  FULL = "FULL",
  GRATINATED = "GRATINATED",
  INTERNATIONAL = "INTERNATIONAL",
  LEGUME = "LEGUME",
  LIGHT = "LIGHT",
  MEAT = "MEAT",
  PASTA = "PASTA",
  RICE = "RICE",
  STARTER = "STARTER",
  VEGGIE = "VEGGIE",
}

export enum OrderStatus {
  ACTIVED = "ACTIVED",
  DELIVERED = "DELIVERED",
  ORDERED = "ORDERED",
}

export enum SubscriptionStatus {
  ACTIVED = "ACTIVED",
  CANCELLED = "CANCELLED",
  PAUSED = "PAUSED",
}

export interface UserInput {
  name?: string | null;
  lastName?: string | null;
  email?: string | null;
  password?: string | null;
  phoneNumber?: string | null;
  birthDate?: any | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
