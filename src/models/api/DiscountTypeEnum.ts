// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum DiscountType {
  CREDIT="CREDIT",
GIFT="GIFT",
PROMOTION="PROMOTION",
REFERRAL="REFERRAL",
SHIPPING="SHIPPING",
VOUCHER="VOUCHER"
}

/**
* DiscountType
*/
export const DiscountTypeEnumType = types.enumeration("DiscountType", [
        "CREDIT",
  "GIFT",
  "PROMOTION",
  "REFERRAL",
  "SHIPPING",
  "VOUCHER",
      ])
