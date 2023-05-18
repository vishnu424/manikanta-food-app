// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CartTotalBase
 * auto generated base class for the model CartTotalModel.
 *
 * Cart Total
 */
export const CartTotalModelBase = ModelBase
  .named('CartTotal')
  .props({
    __typename: types.optional(types.literal("CartTotal"), "CartTotal"),
    itemTotal: types.union(types.undefined, types.number),
    orderTotal: types.union(types.undefined, types.number),
    shippingTotal: types.union(types.undefined, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CartTotalModelSelector extends QueryBuilder {
  get itemTotal() { return this.__attr(`itemTotal`) }
  get orderTotal() { return this.__attr(`orderTotal`) }
  get shippingTotal() { return this.__attr(`shippingTotal`) }
}
export function selectFromCartTotal() {
  return new CartTotalModelSelector()
}

export const cartTotalModelPrimitives = selectFromCartTotal().itemTotal.orderTotal.shippingTotal
