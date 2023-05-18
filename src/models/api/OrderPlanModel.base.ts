// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AttributeModel, AttributeModelType } from "./AttributeModel"
import { AttributeModelSelector } from "./AttributeModel.base"
import { LineItemModel, LineItemModelType } from "./LineItemModel"
import { LineItemModelSelector } from "./LineItemModel.base"
import { PackCategoryEnumType } from "./PackCategoryEnum"
import { PlanCategoryEnumType } from "./PlanCategoryEnum"
import { RootStoreType } from "./index"


/**
 * OrderPlanBase
 * auto generated base class for the model OrderPlanModel.
 *
 * Order Plan
 */
export const OrderPlanModelBase = ModelBase
  .named('OrderPlan')
  .props({
    __typename: types.optional(types.literal("OrderPlan"), "OrderPlan"),
    attributes: types.union(types.undefined, types.array(types.late((): any => AttributeModel))),
    category: types.union(types.undefined, PlanCategoryEnumType),
    grossPrice: types.union(types.undefined, types.number),
    image: types.union(types.undefined, types.null, types.string),
    lineItems: types.union(types.undefined, types.null, types.array(types.late((): any => LineItemModel))),
    name: types.union(types.undefined, types.string),
    netPrice: types.union(types.undefined, types.number),
    planId: types.union(types.undefined, types.string),
    promotionTotal: types.union(types.undefined, types.number),
    subCategory: types.union(types.undefined, types.null, PackCategoryEnumType),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderPlanModelSelector extends QueryBuilder {
  get category() { return this.__attr(`category`) }
  get grossPrice() { return this.__attr(`grossPrice`) }
  get image() { return this.__attr(`image`) }
  get name() { return this.__attr(`name`) }
  get netPrice() { return this.__attr(`netPrice`) }
  get planId() { return this.__attr(`planId`) }
  get promotionTotal() { return this.__attr(`promotionTotal`) }
  get subCategory() { return this.__attr(`subCategory`) }
  attributes(builder: string | AttributeModelSelector | ((selector: AttributeModelSelector) => AttributeModelSelector) | undefined) { return this.__child(`attributes`, AttributeModelSelector, builder) }
  lineItems(builder: string | LineItemModelSelector | ((selector: LineItemModelSelector) => LineItemModelSelector) | undefined) { return this.__child(`lineItems`, LineItemModelSelector, builder) }
}
export function selectFromOrderPlan() {
  return new OrderPlanModelSelector()
}

export const orderPlanModelPrimitives = selectFromOrderPlan().category.grossPrice.image.name.netPrice.planId.promotionTotal.subCategory
