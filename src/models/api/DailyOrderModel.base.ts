// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { DailyOrderProductModel, DailyOrderProductModelType } from "./DailyOrderProductModel"
import { DailyOrderProductModelSelector } from "./DailyOrderProductModel.base"
import { MetaModel, MetaModelType } from "./MetaModel"
import { MetaModelSelector } from "./MetaModel.base"
import { RootStoreType } from "./index"


/**
 * DailyOrderBase
 * auto generated base class for the model DailyOrderModel.
 */
export const DailyOrderModelBase = ModelBase
  .named('DailyOrder')
  .props({
    __typename: types.optional(types.literal("DailyOrder"), "DailyOrder"),
    extra: types.union(types.undefined, types.array(types.late((): any => DailyOrderProductModel))),
    meals: types.union(types.undefined, types.array(types.late((): any => DailyOrderProductModel))),
    meta: types.union(types.undefined, types.late((): any => MetaModel)),
    other: types.union(types.undefined, types.array(types.late((): any => DailyOrderProductModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class DailyOrderModelSelector extends QueryBuilder {
  extra(builder: string | DailyOrderProductModelSelector | ((selector: DailyOrderProductModelSelector) => DailyOrderProductModelSelector) | undefined) { return this.__child(`extra`, DailyOrderProductModelSelector, builder) }
  meals(builder: string | DailyOrderProductModelSelector | ((selector: DailyOrderProductModelSelector) => DailyOrderProductModelSelector) | undefined) { return this.__child(`meals`, DailyOrderProductModelSelector, builder) }
  meta(builder: string | MetaModelSelector | ((selector: MetaModelSelector) => MetaModelSelector) | undefined) { return this.__child(`meta`, MetaModelSelector, builder) }
  other(builder: string | DailyOrderProductModelSelector | ((selector: DailyOrderProductModelSelector) => DailyOrderProductModelSelector) | undefined) { return this.__child(`other`, DailyOrderProductModelSelector, builder) }
}
export function selectFromDailyOrder() {
  return new DailyOrderModelSelector()
}

export const dailyOrderModelPrimitives = selectFromDailyOrder()
