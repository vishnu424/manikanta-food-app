// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AuthRoleEnumType } from "./AuthRoleEnum"
import { RootStoreType } from "./index"


/**
 * CustomerInfoBase
 * auto generated base class for the model CustomerInfoModel.
 *
 * Customer Info
 */
export const CustomerInfoModelBase = ModelBase
  .named('CustomerInfo')
  .props({
    __typename: types.optional(types.literal("CustomerInfo"), "CustomerInfo"),
    _id: types.union(types.undefined, types.string),
    email: types.union(types.undefined, types.null, types.string),
    firstName: types.union(types.undefined, types.null, types.string),
    lastName: types.union(types.undefined, types.null, types.string),
    role: types.union(types.undefined, AuthRoleEnumType),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CustomerInfoModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get email() { return this.__attr(`email`) }
  get firstName() { return this.__attr(`firstName`) }
  get lastName() { return this.__attr(`lastName`) }
  get role() { return this.__attr(`role`) }
}
export function selectFromCustomerInfo() {
  return new CustomerInfoModelSelector()
}

export const customerInfoModelPrimitives = selectFromCustomerInfo()._id.email.firstName.lastName.role
