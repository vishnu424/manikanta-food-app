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
 * CartAddressBase
 * auto generated base class for the model CartAddressModel.
 *
 * Cart Address
 */
export const CartAddressModelBase = ModelBase
  .named('CartAddress')
  .props({
    __typename: types.optional(types.literal("CartAddress"), "CartAddress"),
    addressId: types.identifier,
    businessName: types.union(types.undefined, types.null, types.string),
    country: types.union(types.undefined, CountryCodeEnumType),
    firstName: types.union(types.undefined, types.null, types.string),
    instructions: types.union(types.undefined, types.null, types.string),
    lastName: types.union(types.undefined, types.null, types.string),
    postcode: types.union(types.undefined, types.string),
    state: types.union(types.undefined, StateEnumType),
    street: types.union(types.undefined, types.string),
    suburb: types.union(types.undefined, types.string),
    zoneCode: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CartAddressModelSelector extends QueryBuilder {
  get addressId() { return this.__attr(`addressId`) }
  get businessName() { return this.__attr(`businessName`) }
  get country() { return this.__attr(`country`) }
  get firstName() { return this.__attr(`firstName`) }
  get instructions() { return this.__attr(`instructions`) }
  get lastName() { return this.__attr(`lastName`) }
  get postcode() { return this.__attr(`postcode`) }
  get state() { return this.__attr(`state`) }
  get street() { return this.__attr(`street`) }
  get suburb() { return this.__attr(`suburb`) }
  get zoneCode() { return this.__attr(`zoneCode`) }
}
export function selectFromCartAddress() {
  return new CartAddressModelSelector()
}

export const cartAddressModelPrimitives = selectFromCartAddress().addressId.businessName.country.firstName.instructions.lastName.postcode.state.street.suburb.zoneCode
