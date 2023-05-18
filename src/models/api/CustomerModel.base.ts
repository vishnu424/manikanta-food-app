// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CustomerAttributeModel, CustomerAttributeModelType } from "./CustomerAttributeModel"
import { CustomerAttributeModelSelector } from "./CustomerAttributeModel.base"
import { ReferHistoryModel, ReferHistoryModelType } from "./ReferHistoryModel"
import { ReferHistoryModelSelector } from "./ReferHistoryModel.base"
import { RootStoreType } from "./index"


/**
 * CustomerBase
 * auto generated base class for the model CustomerModel.
 *
 * Customer
 */
export const CustomerModelBase = ModelBase
  .named('Customer')
  .props({
    __typename: types.optional(types.literal("Customer"), "Customer"),
    _id: types.identifier,
    attributes: types.union(types.undefined, types.array(types.late((): any => CustomerAttributeModel))),
    createdAt: types.union(types.undefined, types.frozen()),
    credit: types.union(types.undefined, types.number),
    email: types.union(types.undefined, types.string),
    firstName: types.union(types.undefined, types.string),
    lastName: types.union(types.undefined, types.string),
    numberOfOrders: types.union(types.undefined, types.number),
    phone: types.union(types.undefined, types.string),
    referCode: types.union(types.undefined, types.string),
    referHistory: types.union(types.undefined, types.array(types.late((): any => ReferHistoryModel))),
    salesforceId: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CustomerModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get credit() { return this.__attr(`credit`) }
  get email() { return this.__attr(`email`) }
  get firstName() { return this.__attr(`firstName`) }
  get lastName() { return this.__attr(`lastName`) }
  get numberOfOrders() { return this.__attr(`numberOfOrders`) }
  get phone() { return this.__attr(`phone`) }
  get referCode() { return this.__attr(`referCode`) }
  get salesforceId() { return this.__attr(`salesforceId`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  attributes(builder: string | CustomerAttributeModelSelector | ((selector: CustomerAttributeModelSelector) => CustomerAttributeModelSelector) | undefined) { return this.__child(`attributes`, CustomerAttributeModelSelector, builder) }
  referHistory(builder: string | ReferHistoryModelSelector | ((selector: ReferHistoryModelSelector) => ReferHistoryModelSelector) | undefined) { return this.__child(`referHistory`, ReferHistoryModelSelector, builder) }
}
export function selectFromCustomer() {
  return new CustomerModelSelector()
}

export const customerModelPrimitives = selectFromCustomer()._id.createdAt.credit.email.firstName.lastName.numberOfOrders.phone.referCode.salesforceId.updatedAt
