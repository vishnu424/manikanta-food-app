// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CountryCodeEnumType } from "./CountryCodeEnum"
import { StateEnumType } from "./StateEnum"
import { RootStoreType } from "./index"


/**
 * CustomerAddressBase
 * auto generated base class for the model CustomerAddressModel.
 *
 * Customer Address
 */
export const CustomerAddressModelBase = ModelBase
  .named('CustomerAddress')
  .props({
    __typename: types.optional(types.literal("CustomerAddress"), "CustomerAddress"),
    addressId: types.identifier,
    businessName: types.union(types.undefined, types.null, types.string),
    country: types.union(types.undefined, CountryCodeEnumType),
    firstName: types.union(types.undefined, types.string),
    instructions: types.union(types.undefined, types.null, types.string),
    lastName: types.union(types.undefined, types.string),
    method: types.union(types.undefined, types.string),
    phone: types.union(types.undefined, types.string),
    postcode: types.union(types.undefined, types.string),
    preferred: types.union(types.undefined, types.boolean),
    state: types.union(types.undefined, StateEnumType),
    street: types.union(types.undefined, types.string),
    suburb: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CustomerAddressModelSelector extends QueryBuilder {
  get addressId() { return this.__attr(`addressId`) }
  get businessName() { return this.__attr(`businessName`) }
  get country() { return this.__attr(`country`) }
  get firstName() { return this.__attr(`firstName`) }
  get instructions() { return this.__attr(`instructions`) }
  get lastName() { return this.__attr(`lastName`) }
  get method() { return this.__attr(`method`) }
  get phone() { return this.__attr(`phone`) }
  get postcode() { return this.__attr(`postcode`) }
  get preferred() { return this.__attr(`preferred`) }
  get state() { return this.__attr(`state`) }
  get street() { return this.__attr(`street`) }
  get suburb() { return this.__attr(`suburb`) }
}
export function selectFromCustomerAddress() {
  return new CustomerAddressModelSelector()
}

export const customerAddressModelPrimitives = selectFromCustomerAddress().addressId.businessName.country.firstName.instructions.lastName.method.phone.postcode.preferred.state.street.suburb
