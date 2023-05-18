// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AttributeModel, AttributeModelType } from "./AttributeModel"
import { AttributeModelSelector } from "./AttributeModel.base"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { RootStoreType } from "./index"


/**
 * MealPlanItemBase
 * auto generated base class for the model MealPlanItemModel.
 *
 * Meal Plan Item
 */
export const MealPlanItemModelBase = ModelBase
  .named('MealPlanItem')
  .props({
    __typename: types.optional(types.literal("MealPlanItem"), "MealPlanItem"),
    attributes: types.union(types.undefined, types.null, types.array(types.late((): any => AttributeModel))),
    product: types.union(types.undefined, types.late((): any => ProductModel)),
    productId: types.union(types.undefined, types.string),
    qty: types.union(types.undefined, types.integer),
    sku: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MealPlanItemModelSelector extends QueryBuilder {
  get productId() { return this.__attr(`productId`) }
  get qty() { return this.__attr(`qty`) }
  get sku() { return this.__attr(`sku`) }
  attributes(builder: string | AttributeModelSelector | ((selector: AttributeModelSelector) => AttributeModelSelector) | undefined) { return this.__child(`attributes`, AttributeModelSelector, builder) }
  product(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined) { return this.__child(`product`, ProductModelSelector, builder) }
}
export function selectFromMealPlanItem() {
  return new MealPlanItemModelSelector()
}

export const mealPlanItemModelPrimitives = selectFromMealPlanItem().productId.qty.sku
