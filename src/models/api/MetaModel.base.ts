// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * MetaBase
 * auto generated base class for the model MetaModel.
 */
export const MetaModelBase = ModelBase
  .named('Meta')
  .props({
    __typename: types.optional(types.literal("Meta"), "Meta"),
    activeLevel: types.union(types.undefined, types.null, types.number),
    calories: types.union(types.undefined, types.null, types.number),
    day: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MetaModelSelector extends QueryBuilder {
  get activeLevel() { return this.__attr(`activeLevel`) }
  get calories() { return this.__attr(`calories`) }
  get day() { return this.__attr(`day`) }
}
export function selectFromMeta() {
  return new MetaModelSelector()
}

export const metaModelPrimitives = selectFromMeta().activeLevel.calories.day
