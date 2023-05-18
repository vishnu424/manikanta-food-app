// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * GoogleAuthRtoBase
 * auto generated base class for the model GoogleAuthRtoModel.
 *
 * Google Auth Response
 */
export const GoogleAuthRtoModelBase = ModelBase
  .named('GoogleAuthRto')
  .props({
    __typename: types.optional(types.literal("GoogleAuthRTO"), "GoogleAuthRTO"),
    url: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class GoogleAuthRtoModelSelector extends QueryBuilder {
  get url() { return this.__attr(`url`) }
}
export function selectFromGoogleAuthRto() {
  return new GoogleAuthRtoModelSelector()
}

export const googleAuthRtoModelPrimitives = selectFromGoogleAuthRto().url
