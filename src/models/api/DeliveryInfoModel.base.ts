// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { DeliveryDetailModel, DeliveryDetailModelType } from "./DeliveryDetailModel"
import { DeliveryDetailModelSelector } from "./DeliveryDetailModel.base"
import { StateEnumType } from "./StateEnum"
import { RootStoreType } from "./index"


/**
 * DeliveryInfoBase
 * auto generated base class for the model DeliveryInfoModel.
 *
 * delivery info
 */
export const DeliveryInfoModelBase = ModelBase
  .named('DeliveryInfo')
  .props({
    __typename: types.optional(types.literal("DeliveryInfo"), "DeliveryInfo"),
    cutoffTime: types.union(types.undefined, types.null, types.frozen()),
    deliveryDetails: types.union(types.undefined, types.array(types.late((): any => DeliveryDetailModel))),
    error: types.union(types.undefined, types.null, types.string),
    fee: types.union(types.undefined, types.number),
    name: types.union(types.undefined, types.string),
    postcode: types.union(types.undefined, types.number),
    sid: types.union(types.undefined, types.string),
    state: types.union(types.undefined, StateEnumType),
    zoneCode: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class DeliveryInfoModelSelector extends QueryBuilder {
  get cutoffTime() { return this.__attr(`cutoffTime`) }
  get error() { return this.__attr(`error`) }
  get fee() { return this.__attr(`fee`) }
  get name() { return this.__attr(`name`) }
  get postcode() { return this.__attr(`postcode`) }
  get sid() { return this.__attr(`sid`) }
  get state() { return this.__attr(`state`) }
  get zoneCode() { return this.__attr(`zoneCode`) }
  deliveryDetails(builder: string | DeliveryDetailModelSelector | ((selector: DeliveryDetailModelSelector) => DeliveryDetailModelSelector) | undefined) { return this.__child(`deliveryDetails`, DeliveryDetailModelSelector, builder) }
}
export function selectFromDeliveryInfo() {
  return new DeliveryInfoModelSelector()
}

export const deliveryInfoModelPrimitives = selectFromDeliveryInfo().cutoffTime.error.fee.name.postcode.sid.state.zoneCode
