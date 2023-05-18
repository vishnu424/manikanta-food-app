// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { DiscountTypeEnumType } from "./DiscountTypeEnum"
import { RootStoreType } from "./index"


/**
 * PromotionBase
 * auto generated base class for the model PromotionModel.
 *
 * Promotion
 */
export const PromotionModelBase = ModelBase
  .named('Promotion')
  .props({
    __typename: types.optional(types.literal("Promotion"), "Promotion"),
    code: types.union(types.undefined, types.null, types.string),
    desc: types.union(types.undefined, types.null, types.string),
    promotionId: types.union(types.undefined, types.null, types.string),
    type: types.union(types.undefined, DiscountTypeEnumType),
    value: types.union(types.undefined, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PromotionModelSelector extends QueryBuilder {
  get code() { return this.__attr(`code`) }
  get desc() { return this.__attr(`desc`) }
  get promotionId() { return this.__attr(`promotionId`) }
  get type() { return this.__attr(`type`) }
  get value() { return this.__attr(`value`) }
}
export function selectFromPromotion() {
  return new PromotionModelSelector()
}

export const promotionModelPrimitives = selectFromPromotion().code.desc.promotionId.type.value
