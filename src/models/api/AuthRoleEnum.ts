// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum AuthRole {
  ADMIN="ADMIN",
AMBASSADOR="AMBASSADOR",
ANONYMOUS="ANONYMOUS",
CUSTOMER="CUSTOMER",
DEVELOPER="DEVELOPER",
GUEST="GUEST",
STAFF="STAFF"
}

/**
* AuthRole
*/
export const AuthRoleEnumType = types.enumeration("AuthRole", [
        "ADMIN",
  "AMBASSADOR",
  "ANONYMOUS",
  "CUSTOMER",
  "DEVELOPER",
  "GUEST",
  "STAFF",
      ])
