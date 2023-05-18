// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PaymentType {
  APPLEPAY="APPLEPAY",
CREDIT="CREDIT",
CREDITCARD="CREDITCARD",
EFT="EFT",
GIFT="GIFT",
GOOGLEPAY="GOOGLEPAY",
PAYPAL="PAYPAL",
ZIPPAY="ZIPPAY"
}

/**
* PaymentType
*/
export const PaymentTypeEnumType = types.enumeration("PaymentType", [
        "APPLEPAY",
  "CREDIT",
  "CREDITCARD",
  "EFT",
  "GIFT",
  "GOOGLEPAY",
  "PAYPAL",
  "ZIPPAY",
      ])
