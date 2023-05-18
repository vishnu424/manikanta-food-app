// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ProductAttributeBase
 * auto generated base class for the model ProductAttributeModel.
 *
 * Product Attribute
 */
export const ProductAttributeModelBase = ModelBase
  .named('ProductAttribute')
  .props({
    __typename: types.optional(types.literal("ProductAttribute"), "ProductAttribute"),
    name: types.union(types.undefined, types.string),
    value: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ProductAttributeModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get value() { return this.__attr(`value`) }
}
export function selectFromProductAttribute() {
  return new ProductAttributeModelSelector()
}

export const productAttributeModelPrimitives = selectFromProductAttribute().name.value
