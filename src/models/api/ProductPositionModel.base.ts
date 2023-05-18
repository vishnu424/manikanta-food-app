// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ProductPositionBase
 * auto generated base class for the model ProductPositionModel.
 */
export const ProductPositionModelBase = ModelBase
  .named('ProductPosition')
  .props({
    __typename: types.optional(types.literal("ProductPosition"), "ProductPosition"),
    x: types.union(types.undefined, types.number),
    y: types.union(types.undefined, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ProductPositionModelSelector extends QueryBuilder {
  get x() { return this.__attr(`x`) }
  get y() { return this.__attr(`y`) }
}
export function selectFromProductPosition() {
  return new ProductPositionModelSelector()
}

export const productPositionModelPrimitives = selectFromProductPosition().x.y
