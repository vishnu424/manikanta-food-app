// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum SubscriptionPlanStatus {
  ACTIVE="ACTIVE",
PAUSED="PAUSED",
SKIPPED="SKIPPED"
}

/**
* SubscriptionPlanStatus
*/
export const SubscriptionPlanStatusEnumType = types.enumeration("SubscriptionPlanStatus", [
        "ACTIVE",
  "PAUSED",
  "SKIPPED",
      ])
