// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { RootStoreType } from "./index"


/**
 * SubProductBase
 * auto generated base class for the model SubProductModel.
 *
 * Sub Product
 */
export const SubProductModelBase = ModelBase
  .named('SubProduct')
  .props({
    __typename: types.optional(types.literal("SubProduct"), "SubProduct"),
    // product: types.union(types.undefined, types.late((): any => ProductModel)),
    productId: types.union(types.undefined, types.string),
    qty: types.union(types.undefined, types.null, types.number),
    sku: types.union(types.undefined, types.null, types.reference(types.late(() => ProductModel)),),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SubProductModelSelector extends QueryBuilder {
  get productId() { return this.__attr(`productId`) }
  get qty() { return this.__attr(`qty`) }
  get sku() { return this.__attr(`sku`) }
  product(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined) { return this.__child(`product`, ProductModelSelector, builder) }
}
export function selectFromSubProduct() {
  return new SubProductModelSelector()
}

export const subProductModelPrimitives = selectFromSubProduct().productId.qty.sku
