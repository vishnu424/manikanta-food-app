// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CustomerAttributeBase
 * auto generated base class for the model CustomerAttributeModel.
 *
 * Customer Attribute
 */
export const CustomerAttributeModelBase = ModelBase
  .named('CustomerAttribute')
  .props({
    __typename: types.optional(types.literal("CustomerAttribute"), "CustomerAttribute"),
    name: types.union(types.undefined, types.string),
    value: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CustomerAttributeModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get value() { return this.__attr(`value`) }
}
export function selectFromCustomerAttribute() {
  return new CustomerAttributeModelSelector()
}

export const customerAttributeModelPrimitives = selectFromCustomerAttribute().name.value
