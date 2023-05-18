// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { OrderPlanModelBase } from "./OrderPlanModel.base"

/* The TypeScript type of an instance of OrderPlanModel */
export interface OrderPlanModelType extends Instance<typeof OrderPlanModel.Type> {}

/* A graphql query fragment builders for OrderPlanModel */
export { selectFromOrderPlan, orderPlanModelPrimitives, OrderPlanModelSelector } from "./OrderPlanModel.base"

/**
 * OrderPlanModel
 *
 * Order Plan
 */
export const OrderPlanModel = OrderPlanModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
