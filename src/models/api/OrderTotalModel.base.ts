// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderTotalBase
 * auto generated base class for the model OrderTotalModel.
 *
 * Order Summary
 */
export const OrderTotalModelBase = ModelBase
  .named('OrderTotal')
  .props({
    __typename: types.optional(types.literal("OrderTotal"), "OrderTotal"),
    grandTotal: types.union(types.undefined, types.number),
    itemTotal: types.union(types.undefined, types.number),
    orderPromotionTotal: types.union(types.undefined, types.number),
    orderTotal: types.union(types.undefined, types.number),
    shippingPromotionTotal: types.union(types.undefined, types.number),
    shippingTotal: types.union(types.undefined, types.number),
    taxTotal: types.union(types.undefined, types.number),
    totalPaid: types.union(types.undefined, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderTotalModelSelector extends QueryBuilder {
  get grandTotal() { return this.__attr(`grandTotal`) }
  get itemTotal() { return this.__attr(`itemTotal`) }
  get orderPromotionTotal() { return this.__attr(`orderPromotionTotal`) }
  get orderTotal() { return this.__attr(`orderTotal`) }
  get shippingPromotionTotal() { return this.__attr(`shippingPromotionTotal`) }
  get shippingTotal() { return this.__attr(`shippingTotal`) }
  get taxTotal() { return this.__attr(`taxTotal`) }
  get totalPaid() { return this.__attr(`totalPaid`) }
}
export function selectFromOrderTotal() {
  return new OrderTotalModelSelector()
}

export const orderTotalModelPrimitives = selectFromOrderTotal().grandTotal.itemTotal.orderPromotionTotal.orderTotal.shippingPromotionTotal.shippingTotal.taxTotal.totalPaid
