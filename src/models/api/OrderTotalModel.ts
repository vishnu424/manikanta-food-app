// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { OrderTotalModelBase } from "./OrderTotalModel.base"

/* The TypeScript type of an instance of OrderTotalModel */
export interface OrderTotalModelType extends Instance<typeof OrderTotalModel.Type> {}

/* A graphql query fragment builders for OrderTotalModel */
export { selectFromOrderTotal, orderTotalModelPrimitives, OrderTotalModelSelector } from "./OrderTotalModel.base"

/**
 * OrderTotalModel
 *
 * Order Summary
 */
export const OrderTotalModel = OrderTotalModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
