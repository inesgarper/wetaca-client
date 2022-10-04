/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DayOfTheWeek } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateDeliveryWeekDayMutation
// ====================================================

export interface updateDeliveryWeekDayMutation_updateDeliveryWeekDay {
  __typename: "Subscription";
  deliveryWeekDay: DayOfTheWeek;
}

export interface updateDeliveryWeekDayMutation {
  updateDeliveryWeekDay: updateDeliveryWeekDayMutation_updateDeliveryWeekDay | null;
}

export interface updateDeliveryWeekDayMutationVariables {
  day: string;
}
