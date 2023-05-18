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
 * CartLineItemBase
 * auto generated base class for the model CartLineItemModel.
 *
 * Cart LineItem
 */
export const CartLineItemModelBase = ModelBase
  .named('CartLineItem')
  .props({
    __typename: types.optional(types.literal("CartLineItem"), "CartLineItem"),
    attributes: types.union(types.undefined, types.array(types.late((): any => AttributeModel))),
    product: types.union(types.undefined, types.late((): any => ProductModel)),
    qty: types.union(types.undefined, types.number),
    sku: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CartLineItemModelSelector extends QueryBuilder {
  get qty() { return this.__attr(`qty`) }
  get sku() { return this.__attr(`sku`) }
  attributes(builder: string | AttributeModelSelector | ((selector: AttributeModelSelector) => AttributeModelSelector) | undefined) { return this.__child(`attributes`, AttributeModelSelector, builder) }
  product(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined) { return this.__child(`product`, ProductModelSelector, builder) }
}
export function selectFromCartLineItem() {
  return new CartLineItemModelSelector()
}

export const cartLineItemModelPrimitives = selectFromCartLineItem().qty.sku
