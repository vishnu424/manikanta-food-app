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
 * AddressBase
 * auto generated base class for the model AddressModel.
 *
 * Address
 */
export const AddressModelBase = ModelBase
  .named('Address')
  .props({
    __typename: types.optional(types.literal("Address"), "Address"),
    businessName: types.union(types.undefined, types.null, types.string),
    country: types.union(types.undefined, CountryCodeEnumType),
    name: types.union(types.undefined, types.string),
    postcode: types.union(types.undefined, types.string),
    state: types.union(types.undefined, StateEnumType),
    street: types.union(types.undefined, types.string),
    suburb: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AddressModelSelector extends QueryBuilder {
  get businessName() { return this.__attr(`businessName`) }
  get country() { return this.__attr(`country`) }
  get name() { return this.__attr(`name`) }
  get postcode() { return this.__attr(`postcode`) }
  get state() { return this.__attr(`state`) }
  get street() { return this.__attr(`street`) }
  get suburb() { return this.__attr(`suburb`) }
}
export function selectFromAddress() {
  return new AddressModelSelector()
}

export const addressModelPrimitives = selectFromAddress().businessName.country.name.postcode.state.street.suburb
