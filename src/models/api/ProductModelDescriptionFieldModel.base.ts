// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ProductModelDescriptionFieldBase
 * auto generated base class for the model ProductModelDescriptionFieldModel.
 */
export const ProductModelDescriptionFieldModelBase = ModelBase
  .named('ProductModelDescriptionField')
  .props({
    __typename: types.optional(types.literal("ProductModelDescriptionField"), "ProductModelDescriptionField"),
    blocks: types.union(types.undefined, types.array(types.string)),
    links: types.union(types.undefined, types.array(types.string)),
    value: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ProductModelDescriptionFieldModelSelector extends QueryBuilder {
  get blocks() { return this.__attr(`blocks`) }
  get links() { return this.__attr(`links`) }
  get value() { return this.__attr(`value`) }
}
export function selectFromProductModelDescriptionField() {
  return new ProductModelDescriptionFieldModelSelector()
}

export const productModelDescriptionFieldModelPrimitives = selectFromProductModelDescriptionField().blocks.links.value
