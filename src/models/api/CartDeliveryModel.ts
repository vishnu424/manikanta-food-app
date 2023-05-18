// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { CartDeliveryModelBase } from "./CartDeliveryModel.base"

/* The TypeScript type of an instance of CartDeliveryModel */
export interface CartDeliveryModelType extends Instance<typeof CartDeliveryModel.Type> {}

/* A graphql query fragment builders for CartDeliveryModel */
export { selectFromCartDelivery, cartDeliveryModelPrimitives, CartDeliveryModelSelector } from "./CartDeliveryModel.base"

/**
 * CartDeliveryModel
 *
 * Cart Delivery
 */
export const CartDeliveryModel = CartDeliveryModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
