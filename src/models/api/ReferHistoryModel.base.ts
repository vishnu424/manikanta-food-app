// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ReferHistoryBase
 * auto generated base class for the model ReferHistoryModel.
 *
 * Referral History
 */
export const ReferHistoryModelBase = ModelBase
  .named('ReferHistory')
  .props({
    __typename: types.optional(types.literal("ReferHistory"), "ReferHistory"),
    count: types.union(types.undefined, types.number),
    year: types.union(types.undefined, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ReferHistoryModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get year() { return this.__attr(`year`) }
}
export function selectFromReferHistory() {
  return new ReferHistoryModelSelector()
}

export const referHistoryModelPrimitives = selectFromReferHistory().count.year
