// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum OrderStatus {
  CANCELLED="CANCELLED",
DRAFT="DRAFT",
GIFTONLY="GIFTONLY",
OBSOLETE="OBSOLETE",
PAID="PAID",
REFUNDED="REFUNDED",
UNPAID="UNPAID"
}

/**
* OrderStatus
*/
export const OrderStatusEnumType = types.enumeration("OrderStatus", [
        "CANCELLED",
  "DRAFT",
  "GIFTONLY",
  "OBSOLETE",
  "PAID",
  "REFUNDED",
  "UNPAID",
      ])
