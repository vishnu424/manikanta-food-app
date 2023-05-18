// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * DeliveryDetailBase
 * auto generated base class for the model DeliveryDetailModel.
 *
 * Delivery Details
 */
export const DeliveryDetailModelBase = ModelBase
  .named('DeliveryDetail')
  .props({
    __typename: types.optional(types.literal("DeliveryDetail"), "DeliveryDetail"),
    date: types.union(types.undefined, types.string),
    formattedDate: types.union(types.undefined, types.string),
    isExpress: types.union(types.undefined, types.boolean),
    timeslots: types.union(types.undefined, types.array(types.string)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class DeliveryDetailModelSelector extends QueryBuilder {
  get date() { return this.__attr(`date`) }
  get formattedDate() { return this.__attr(`formattedDate`) }
  get isExpress() { return this.__attr(`isExpress`) }
  get timeslots() { return this.__attr(`timeslots`) }
}
export function selectFromDeliveryDetail() {
  return new DeliveryDetailModelSelector()
}

export const deliveryDetailModelPrimitives = selectFromDeliveryDetail().date.formattedDate.isExpress.timeslots
