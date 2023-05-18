// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { DeliveryDetailModelBase } from "./DeliveryDetailModel.base"

/* The TypeScript type of an instance of DeliveryDetailModel */
export interface DeliveryDetailModelType extends Instance<typeof DeliveryDetailModel.Type> {}

/* A graphql query fragment builders for DeliveryDetailModel */
export { selectFromDeliveryDetail, deliveryDetailModelPrimitives, DeliveryDetailModelSelector } from "./DeliveryDetailModel.base"

/**
 * DeliveryDetailModel
 *
 * Delivery Details
 */
export const DeliveryDetailModel = DeliveryDetailModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
