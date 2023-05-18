// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum AgeRanges {
  FROM_18_TO_25="FROM_18_TO_25",
FROM_26_TO_39="FROM_26_TO_39",
FROM_40_TO_49="FROM_40_TO_49",
GREATER_THAN_49="GREATER_THAN_49",
LESS_THAN_18="LESS_THAN_18"
}

/**
* AgeRanges
*/
export const AgeRangesEnumType = types.enumeration("AgeRanges", [
        "FROM_18_TO_25",
  "FROM_26_TO_39",
  "FROM_40_TO_49",
  "GREATER_THAN_49",
  "LESS_THAN_18",
      ])
