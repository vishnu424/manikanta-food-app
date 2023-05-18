// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { OrderDeliveryModelBase } from "./OrderDeliveryModel.base"

/* The TypeScript type of an instance of OrderDeliveryModel */
export interface OrderDeliveryModelType extends Instance<typeof OrderDeliveryModel.Type> {}

/* A graphql query fragment builders for OrderDeliveryModel */
export { selectFromOrderDelivery, orderDeliveryModelPrimitives, OrderDeliveryModelSelector } from "./OrderDeliveryModel.base"

/**
 * OrderDeliveryModel
 *
 * Order Delivery
 */
export const OrderDeliveryModel = OrderDeliveryModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
