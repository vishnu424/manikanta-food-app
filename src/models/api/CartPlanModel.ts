// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { CartPlanModelBase } from "./CartPlanModel.base"

/* The TypeScript type of an instance of CartPlanModel */
export interface CartPlanModelType extends Instance<typeof CartPlanModel.Type> {}

/* A graphql query fragment builders for CartPlanModel */
export { selectFromCartPlan, cartPlanModelPrimitives, CartPlanModelSelector } from "./CartPlanModel.base"

/**
 * CartPlanModel
 *
 * Cart Plan
 */
export const CartPlanModel = CartPlanModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
