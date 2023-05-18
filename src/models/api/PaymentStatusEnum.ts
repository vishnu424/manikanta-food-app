// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PaymentStatus {
  PAID="PAID",
REFUNDED="REFUNDED",
UNPAID="UNPAID"
}

/**
* PaymentStatus
*/
export const PaymentStatusEnumType = types.enumeration("PaymentStatus", [
        "PAID",
  "REFUNDED",
  "UNPAID",
      ])
