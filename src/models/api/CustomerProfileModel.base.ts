// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CustomerAddressModel, CustomerAddressModelType } from "./CustomerAddressModel"
import { CustomerAddressModelSelector } from "./CustomerAddressModel.base"
import { CustomerPaymentModel, CustomerPaymentModelType } from "./CustomerPaymentModel"
import { CustomerPaymentModelSelector } from "./CustomerPaymentModel.base"
import { GenderEnumType } from "./GenderEnum"
import { RootStoreType } from "./index"


/**
 * CustomerProfileBase
 * auto generated base class for the model CustomerProfileModel.
 *
 * Customer Profile
 */
export const CustomerProfileModelBase = ModelBase
  .named('CustomerProfile')
  .props({
    __typename: types.optional(types.literal("CustomerProfile"), "CustomerProfile"),
    addresses: types.union(types.undefined, types.null, types.array(types.late((): any => CustomerAddressModel))),
    birthday: types.union(types.undefined, types.null, types.string),
    credit: types.union(types.undefined, types.number),
    email: types.union(types.undefined, types.string),
    first: types.union(types.undefined, types.string),
    gender: types.union(types.undefined, types.null, GenderEnumType),
    id: types.identifier,
    last: types.union(types.undefined, types.string),
    payments: types.union(types.undefined, types.null, types.array(types.late((): any => CustomerPaymentModel))),
    phone: types.union(types.undefined, types.null, types.string),
    postcode: types.union(types.undefined, types.null, types.string),
    referCode: types.union(types.undefined, types.string),
    salesforceId: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CustomerProfileModelSelector extends QueryBuilder {
  get birthday() { return this.__attr(`birthday`) }
  get credit() { return this.__attr(`credit`) }
  get email() { return this.__attr(`email`) }
  get first() { return this.__attr(`first`) }
  get gender() { return this.__attr(`gender`) }
  get id() { return this.__attr(`id`) }
  get last() { return this.__attr(`last`) }
  get phone() { return this.__attr(`phone`) }
  get postcode() { return this.__attr(`postcode`) }
  get referCode() { return this.__attr(`referCode`) }
  get salesforceId() { return this.__attr(`salesforceId`) }
  addresses(builder: string | CustomerAddressModelSelector | ((selector: CustomerAddressModelSelector) => CustomerAddressModelSelector) | undefined) { return this.__child(`addresses`, CustomerAddressModelSelector, builder) }
  payments(builder: string | CustomerPaymentModelSelector | ((selector: CustomerPaymentModelSelector) => CustomerPaymentModelSelector) | undefined) { return this.__child(`payments`, CustomerPaymentModelSelector, builder) }
}
export function selectFromCustomerProfile() {
  return new CustomerProfileModelSelector()
}

export const customerProfileModelPrimitives = selectFromCustomerProfile().birthday.credit.email.first.gender.last.phone.postcode.referCode.salesforceId
