// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FutureStatusEnumType } from "./FutureStatusEnum"
import { RootStoreType } from "./index"


/**
 * SubscriptionFutureBase
 * auto generated base class for the model SubscriptionFutureModel.
 *
 * Subscription Future
 */
export const SubscriptionFutureModelBase = ModelBase
  .named('SubscriptionFuture')
  .props({
    __typename: types.optional(types.literal("SubscriptionFuture"), "SubscriptionFuture"),
    deliveryDate: types.union(types.undefined, types.string),
    status: types.union(types.undefined, FutureStatusEnumType),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SubscriptionFutureModelSelector extends QueryBuilder {
  get deliveryDate() { return this.__attr(`deliveryDate`) }
  get status() { return this.__attr(`status`) }
}
export function selectFromSubscriptionFuture() {
  return new SubscriptionFutureModelSelector()
}

export const subscriptionFutureModelPrimitives = selectFromSubscriptionFuture().deliveryDate.status
