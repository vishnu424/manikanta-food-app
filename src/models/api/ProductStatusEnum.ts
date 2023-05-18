// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum ProductStatus {
  ACTIVE="ACTIVE",
DISCONTINUED="DISCONTINUED",
DRAFT="DRAFT",
OUT_OF_STOCK="OUT_OF_STOCK",
UPCOMING="UPCOMING"
}

/**
* ProductStatus
*/
export const ProductStatusEnumType = types.enumeration("ProductStatus", [
        "ACTIVE",
  "DISCONTINUED",
  "DRAFT",
  "OUT_OF_STOCK",
  "UPCOMING",
      ])
