// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AttributeModel, AttributeModelType } from "./AttributeModel"
import { AttributeModelSelector } from "./AttributeModel.base"
import { CartLineItemModel, CartLineItemModelType } from "./CartLineItemModel"
import { CartLineItemModelSelector } from "./CartLineItemModel.base"
import { PackCategoryEnumType } from "./PackCategoryEnum"
import { PlanCategoryEnumType } from "./PlanCategoryEnum"
import { RootStoreType } from "./index"


/**
 * CartPlanBase
 * auto generated base class for the model CartPlanModel.
 *
 * Cart Plan
 */
export const CartPlanModelBase = ModelBase
  .named('CartPlan')
  .props({
    __typename: types.optional(types.literal("CartPlan"), "CartPlan"),
    attributes: types.union(types.undefined, types.array(types.late((): any => AttributeModel))),
    category: types.union(types.undefined, PlanCategoryEnumType),
    image: types.union(types.undefined, types.string),
    lineItems: types.union(types.undefined, types.array(types.late((): any => CartLineItemModel))),
    name: types.union(types.undefined, types.string),
    netPrice: types.union(types.undefined, types.number),
    planId: types.identifier,
    subCategory: types.union(types.undefined, types.null, PackCategoryEnumType),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CartPlanModelSelector extends QueryBuilder {
  get category() { return this.__attr(`category`) }
  get image() { return this.__attr(`image`) }
  get name() { return this.__attr(`name`) }
  get netPrice() { return this.__attr(`netPrice`) }
  get planId() { return this.__attr(`planId`) }
  get subCategory() { return this.__attr(`subCategory`) }
  attributes(builder: string | AttributeModelSelector | ((selector: AttributeModelSelector) => AttributeModelSelector) | undefined) { return this.__child(`attributes`, AttributeModelSelector, builder) }
  lineItems(builder: string | CartLineItemModelSelector | ((selector: CartLineItemModelSelector) => CartLineItemModelSelector) | undefined) { return this.__child(`lineItems`, CartLineItemModelSelector, builder) }
}
export function selectFromCartPlan() {
  return new CartPlanModelSelector()
}

export const cartPlanModelPrimitives = selectFromCartPlan().category.image.name.netPrice.planId.subCategory
