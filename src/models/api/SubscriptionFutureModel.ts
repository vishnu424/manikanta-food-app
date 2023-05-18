// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { SubscriptionFutureModelBase } from "./SubscriptionFutureModel.base"

/* The TypeScript type of an instance of SubscriptionFutureModel */
export interface SubscriptionFutureModelType extends Instance<typeof SubscriptionFutureModel.Type> {}

/* A graphql query fragment builders for SubscriptionFutureModel */
export { selectFromSubscriptionFuture, subscriptionFutureModelPrimitives, SubscriptionFutureModelSelector } from "./SubscriptionFutureModel.base"

/**
 * SubscriptionFutureModel
 *
 * Subscription Future
 */
export const SubscriptionFutureModel = SubscriptionFutureModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
