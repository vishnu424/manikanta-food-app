// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { SubscriptionEntityModelBase } from "./SubscriptionEntityModel.base"

/* The TypeScript type of an instance of SubscriptionEntityModel */
export interface SubscriptionEntityModelType extends Instance<typeof SubscriptionEntityModel.Type> {}

/* A graphql query fragment builders for SubscriptionEntityModel */
export { selectFromSubscriptionEntity, subscriptionEntityModelPrimitives, SubscriptionEntityModelSelector } from "./SubscriptionEntityModel.base"

/**
 * SubscriptionEntityModel
 *
 * Subscription
 */
export const SubscriptionEntityModel = SubscriptionEntityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
