// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AddressModel, AddressModelType } from "./AddressModel"
import { AddressModelSelector } from "./AddressModel.base"
import { RootStoreType } from "./index"


/**
 * OrderDeliveryBase
 * auto generated base class for the model OrderDeliveryModel.
 *
 * Order Delivery
 */
export const OrderDeliveryModelBase = ModelBase
  .named('OrderDelivery')
  .props({
    __typename: types.optional(types.literal("OrderDelivery"), "OrderDelivery"),
    deliveryAddress: types.union(types.undefined, types.late((): any => AddressModel)),
    deliveryDate: types.union(types.undefined, types.frozen()),
    instructions: types.union(types.undefined, types.null, types.string),
    timeSlot: types.union(types.undefined, types.string),
    trackingNumber: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderDeliveryModelSelector extends QueryBuilder {
  get deliveryDate() { return this.__attr(`deliveryDate`) }
  get instructions() { return this.__attr(`instructions`) }
  get timeSlot() { return this.__attr(`timeSlot`) }
  get trackingNumber() { return this.__attr(`trackingNumber`) }
  deliveryAddress(builder: string | AddressModelSelector | ((selector: AddressModelSelector) => AddressModelSelector) | undefined) { return this.__child(`deliveryAddress`, AddressModelSelector, builder) }
}
export function selectFromOrderDelivery() {
  return new OrderDeliveryModelSelector()
}

export const orderDeliveryModelPrimitives = selectFromOrderDelivery().deliveryDate.instructions.timeSlot.trackingNumber
