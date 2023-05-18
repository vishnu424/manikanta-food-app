// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ProductCollectionDtoBase
 * auto generated base class for the model ProductCollectionDtoModel.
 *
 * Product Collection
 */
export const ProductCollectionDtoModelBase = ModelBase
  .named('ProductCollectionDto')
  .props({
    __typename: types.optional(types.literal("ProductCollectionDto"), "ProductCollectionDto"),
    active: types.union(types.undefined, types.boolean),
    description: types.union(types.undefined, types.string),
    meta: types.union(types.undefined, types.null, types.frozen()),
    name: types.union(types.undefined, types.string),
    productSkus: types.union(types.undefined, types.array(types.string)),
    products: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ProductCollectionDtoModelSelector extends QueryBuilder {
  get active() { return this.__attr(`active`) }
  get description() { return this.__attr(`description`) }
  get meta() { return this.__attr(`meta`) }
  get name() { return this.__attr(`name`) }
  get productSkus() { return this.__attr(`productSkus`) }
  get products() { return this.__attr(`products`) }
}
export function selectFromProductCollectionDto() {
  return new ProductCollectionDtoModelSelector()
}

export const productCollectionDtoModelPrimitives = selectFromProductCollectionDto().active.description.meta.name.productSkus.products
