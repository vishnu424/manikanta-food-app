// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum ItemStatus {
  draft="draft",
published="published",
updated="updated"
}

/**
* ItemStatus
*/
export const ItemStatusEnumType = types.enumeration("ItemStatus", [
        "draft",
  "published",
  "updated",
      ])
