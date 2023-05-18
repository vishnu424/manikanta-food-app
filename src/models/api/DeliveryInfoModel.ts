// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { DeliveryInfoModelBase } from "./DeliveryInfoModel.base"

/* The TypeScript type of an instance of DeliveryInfoModel */
export interface DeliveryInfoModelType extends Instance<typeof DeliveryInfoModel.Type> {}

/* A graphql query fragment builders for DeliveryInfoModel */
export { selectFromDeliveryInfo, deliveryInfoModelPrimitives, DeliveryInfoModelSelector } from "./DeliveryInfoModel.base"

/**
 * DeliveryInfoModel
 *
 * delivery info
 */
export const DeliveryInfoModel = DeliveryInfoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
