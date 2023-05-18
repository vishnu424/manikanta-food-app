// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { CustomerInfoModelBase } from "./CustomerInfoModel.base"

/* The TypeScript type of an instance of CustomerInfoModel */
export interface CustomerInfoModelType extends Instance<typeof CustomerInfoModel.Type> {}

/* A graphql query fragment builders for CustomerInfoModel */
export { selectFromCustomerInfo, customerInfoModelPrimitives, CustomerInfoModelSelector } from "./CustomerInfoModel.base"

/**
 * CustomerInfoModel
 *
 * Customer Info
 */
export const CustomerInfoModel = CustomerInfoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
