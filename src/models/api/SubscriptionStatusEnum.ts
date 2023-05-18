// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum SubscriptionStatus {
  ACTIVE="ACTIVE",
CANCELLED="CANCELLED",
FAILED="FAILED",
LAPSED="LAPSED",
PAUSED="PAUSED"
}

/**
* SubscriptionStatus
*/
export const SubscriptionStatusEnumType = types.enumeration("SubscriptionStatus", [
        "ACTIVE",
  "CANCELLED",
  "FAILED",
  "LAPSED",
  "PAUSED",
      ])
