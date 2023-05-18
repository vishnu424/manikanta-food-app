// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AttributeBase
 * auto generated base class for the model AttributeModel.
 *
 * Attribute
 */
export const AttributeModelBase = ModelBase
  .named('Attribute')
  .props({
    __typename: types.optional(types.literal("Attribute"), "Attribute"),
    name: types.union(types.undefined, types.string),
    value: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AttributeModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get value() { return this.__attr(`value`) }
}
export function selectFromAttribute() {
  return new AttributeModelSelector()
}

export const attributeModelPrimitives = selectFromAttribute().name.value
