// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CartAddressModel, CartAddressModelType } from "./CartAddressModel"
import { CartAddressModelSelector } from "./CartAddressModel.base"
import { RootStoreType } from "./index"


/**
 * CartDeliveryBase
 * auto generated base class for the model CartDeliveryModel.
 *
 * Cart Delivery
 */
export const CartDeliveryModelBase = ModelBase
  .named('CartDelivery')
  .props({
    __typename: types.optional(types.literal("CartDelivery"), "CartDelivery"),
    deliveryAddress: types.union(types.undefined, types.null, types.late((): any => CartAddressModel)),
    deliveryDate: types.union(types.undefined, types.null, types.frozen()),
    timeSlot: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CartDeliveryModelSelector extends QueryBuilder {
  get deliveryDate() { return this.__attr(`deliveryDate`) }
  get timeSlot() { return this.__attr(`timeSlot`) }
  deliveryAddress(builder: string | CartAddressModelSelector | ((selector: CartAddressModelSelector) => CartAddressModelSelector) | undefined) { return this.__child(`deliveryAddress`, CartAddressModelSelector, builder) }
}
export function selectFromCartDelivery() {
  return new CartDeliveryModelSelector()
}

export const cartDeliveryModelPrimitives = selectFromCartDelivery().deliveryDate.timeSlot
