// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProductPositionModel, ProductPositionModelType } from "./ProductPositionModel"
import { ProductPositionModelSelector } from "./ProductPositionModel.base"
import { WlpProductFlagsEnumType } from "./WlpProductFlagsEnum"
import { RootStoreType } from "./index"


/**
 * DailyOrderProductBase
 * auto generated base class for the model DailyOrderProductModel.
 */
export const DailyOrderProductModelBase = ModelBase
  .named('DailyOrderProduct')
  .props({
    __typename: types.optional(types.literal("DailyOrderProduct"), "DailyOrderProduct"),
    activity: types.union(types.undefined, types.null, types.frozen()),
    flag: types.union(types.undefined, types.null, WlpProductFlagsEnumType),
    flagName: types.union(types.undefined, types.null, WlpProductFlagsEnumType),
    position: types.union(types.undefined, types.late((): any => ProductPositionModel)),
    product: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class DailyOrderProductModelSelector extends QueryBuilder {
  get activity() { return this.__attr(`activity`) }
  get flag() { return this.__attr(`flag`) }
  get flagName() { return this.__attr(`flagName`) }
  get product() { return this.__attr(`product`) }
  position(builder: string | ProductPositionModelSelector | ((selector: ProductPositionModelSelector) => ProductPositionModelSelector) | undefined) { return this.__child(`position`, ProductPositionModelSelector, builder) }
}
export function selectFromDailyOrderProduct() {
  return new DailyOrderProductModelSelector()
}

export const dailyOrderProductModelPrimitives = selectFromDailyOrderProduct().activity.flag.flagName.product
