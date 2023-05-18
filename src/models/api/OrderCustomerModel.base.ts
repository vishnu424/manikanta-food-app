// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderCustomerBase
 * auto generated base class for the model OrderCustomerModel.
 *
 * Order Customer
 */
export const OrderCustomerModelBase = ModelBase
  .named('OrderCustomer')
  .props({
    __typename: types.optional(types.literal("OrderCustomer"), "OrderCustomer"),
    email: types.union(types.undefined, types.string),
    firstName: types.union(types.undefined, types.string),
    lastName: types.union(types.undefined, types.string),
    phone: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderCustomerModelSelector extends QueryBuilder {
  get email() { return this.__attr(`email`) }
  get firstName() { return this.__attr(`firstName`) }
  get lastName() { return this.__attr(`lastName`) }
  get phone() { return this.__attr(`phone`) }
}
export function selectFromOrderCustomer() {
  return new OrderCustomerModelSelector()
}

export const orderCustomerModelPrimitives = selectFromOrderCustomer().email.firstName.lastName.phone
