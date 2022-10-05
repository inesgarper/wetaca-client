/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeliveryDateInput, TimeSlot } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateDeliveryDateMutation
// ====================================================

export interface updateDeliveryDateMutation_updateDeliveryDate_deliveryDate {
  __typename: "DeliveryDate";
  day: any | null;
  hour: TimeSlot | null;
}

export interface updateDeliveryDateMutation_updateDeliveryDate {
  __typename: "Order";
  deliveryDate: updateDeliveryDateMutation_updateDeliveryDate_deliveryDate | null;
}

export interface updateDeliveryDateMutation {
  updateDeliveryDate: updateDeliveryDateMutation_updateDeliveryDate | null;
}

export interface updateDeliveryDateMutationVariables {
  deliveryDate?: DeliveryDateInput | null;
}
