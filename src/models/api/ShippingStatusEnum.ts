// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum ShippingStatus {
  DEFAULT="DEFAULT",
DELIVERED="DELIVERED",
LOST="LOST",
NOT_SHIPPED="NOT_SHIPPED",
SHIPPED="SHIPPED"
}

/**
* ShippingStatus
*/
export const ShippingStatusEnumType = types.enumeration("ShippingStatus", [
        "DEFAULT",
  "DELIVERED",
  "LOST",
  "NOT_SHIPPED",
  "SHIPPED",
      ])
