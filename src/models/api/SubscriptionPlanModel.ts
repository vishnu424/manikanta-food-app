// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { SubscriptionPlanModelBase } from "./SubscriptionPlanModel.base"

/* The TypeScript type of an instance of SubscriptionPlanModel */
export interface SubscriptionPlanModelType extends Instance<typeof SubscriptionPlanModel.Type> {}

/* A graphql query fragment builders for SubscriptionPlanModel */
export { selectFromSubscriptionPlan, subscriptionPlanModelPrimitives, SubscriptionPlanModelSelector } from "./SubscriptionPlanModel.base"

/**
 * SubscriptionPlanModel
 *
 * Subscription Plan
 */
export const SubscriptionPlanModel = SubscriptionPlanModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
