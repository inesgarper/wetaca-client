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

export enum MealType {
  DESSERT = "DESSERT",
  FULL = "FULL",
  LIGHT = "LIGHT",
  STARTER = "STARTER",
  UNIQUE = "UNIQUE",
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

export enum TimeSlot {
  EVENING = "EVENING",
  MORNING = "MORNING",
}

export interface AddressInput {
  street: string;
  number: string;
  city: string;
  province: string;
  postCode: string;
}

export interface AllergensInput {
  celery?: boolean | null;
  gluten?: boolean | null;
  crustaceans?: boolean | null;
  eggs?: boolean | null;
  fish?: boolean | null;
  lupin?: boolean | null;
  milk?: boolean | null;
  molluscs?: boolean | null;
  mustard?: boolean | null;
  peanuts?: boolean | null;
  sesame?: boolean | null;
  soybeans?: boolean | null;
  sulphurDioxide?: boolean | null;
  sulphites?: boolean | null;
}

export interface DeliveryDateInput {
  day?: any | null;
  hour?: TimeSlot | null;
}

export interface ImagesInput {
  finals?: (string | null)[] | null;
  wip?: (string | null)[] | null;
}

export interface MealInput {
  name?: string | null;
  type?: MealType | null;
  ingredients?: string | null;
  category?: MealCategory | null;
  weight?: number | null;
  price?: number | null;
  images?: ImagesInput | null;
  description?: string | null;
  allergens?: AllergensInput | null;
  nutritionalValues?: NutritionalValuesInput | null;
}

export interface NutritionalValuesInput {
  calories?: number | null;
  totalFats?: number | null;
  saturatedFat?: number | null;
  carbs?: number | null;
  protein?: number | null;
  sugar?: number | null;
  fiber?: number | null;
  sodium?: number | null;
}

export interface PaymentMethodsInput {
  cardNumber?: string | null;
  cardName?: string | null;
  securityCode?: number | null;
  expiration?: any | null;
}

export interface SubscriptionInput {
  address?: AddressInput | null;
  deliveryWeekDay?: DayOfTheWeek | null;
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
