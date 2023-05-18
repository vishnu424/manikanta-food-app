// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AttributeModel, AttributeModelType } from "./AttributeModel"
import { AttributeModelSelector } from "./AttributeModel.base"
import { ProductCategoryEnumType } from "./ProductCategoryEnum"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { PromotionModel, PromotionModelType } from "./PromotionModel"
import { PromotionModelSelector } from "./PromotionModel.base"
import { RootStoreType } from "./index"


/**
 * LineItemBase
 * auto generated base class for the model LineItemModel.
 *
 * Order LineItem
 */
export const LineItemModelBase = ModelBase
  .named('LineItem')
  .props({
    __typename: types.optional(types.literal("LineItem"), "LineItem"),
    attributes: types.union(types.undefined, types.array(types.late((): any => AttributeModel))),
    category: types.union(types.undefined, ProductCategoryEnumType),
    grossPrice: types.union(types.undefined, types.null, types.number),
    hasSubProducts: types.union(types.undefined, types.boolean),
    name: types.union(types.undefined, types.string),
    netPrice: types.union(types.undefined, types.null, types.number),
    parentId: types.union(types.undefined, types.null, types.frozen()),
    planId: types.union(types.undefined, types.string),
    product: types.union(types.undefined, types.late((): any => ProductModel)),
    promotionTotal: types.union(types.undefined, types.null, types.number),
    promotions: types.union(types.undefined, types.array(types.late((): any => PromotionModel))),
    qty: types.union(types.undefined, types.number),
    sku: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LineItemModelSelector extends QueryBuilder {
  get category() { return this.__attr(`category`) }
  get grossPrice() { return this.__attr(`grossPrice`) }
  get hasSubProducts() { return this.__attr(`hasSubProducts`) }
  get name() { return this.__attr(`name`) }
  get netPrice() { return this.__attr(`netPrice`) }
  get parentId() { return this.__attr(`parentId`) }
  get planId() { return this.__attr(`planId`) }
  get promotionTotal() { return this.__attr(`promotionTotal`) }
  get qty() { return this.__attr(`qty`) }
  get sku() { return this.__attr(`sku`) }
  attributes(builder: string | AttributeModelSelector | ((selector: AttributeModelSelector) => AttributeModelSelector) | undefined) { return this.__child(`attributes`, AttributeModelSelector, builder) }
  product(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined) { return this.__child(`product`, ProductModelSelector, builder) }
  promotions(builder: string | PromotionModelSelector | ((selector: PromotionModelSelector) => PromotionModelSelector) | undefined) { return this.__child(`promotions`, PromotionModelSelector, builder) }
}
export function selectFromLineItem() {
  return new LineItemModelSelector()
}

export const lineItemModelPrimitives = selectFromLineItem().category.grossPrice.hasSubProducts.name.netPrice.parentId.planId.promotionTotal.qty.sku
