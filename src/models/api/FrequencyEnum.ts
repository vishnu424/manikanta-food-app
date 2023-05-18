// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum Frequency {
  FORTNIGHTLY="FORTNIGHTLY",
MONTHLY="MONTHLY",
ONCE="ONCE",
WEEKLY="WEEKLY"
}

/**
* Frequency
*/
export const FrequencyEnumType = types.enumeration("Frequency", [
        "FORTNIGHTLY",
  "MONTHLY",
  "ONCE",
  "WEEKLY",
      ])
