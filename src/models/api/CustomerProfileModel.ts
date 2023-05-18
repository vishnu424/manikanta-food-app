// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { CustomerProfileModelBase } from "./CustomerProfileModel.base"

/* The TypeScript type of an instance of CustomerProfileModel */
export interface CustomerProfileModelType extends Instance<typeof CustomerProfileModel.Type> {}

/* A graphql query fragment builders for CustomerProfileModel */
export { selectFromCustomerProfile, customerProfileModelPrimitives, CustomerProfileModelSelector } from "./CustomerProfileModel.base"

/**
 * CustomerProfileModel
 *
 * Customer Profile
 */
export const CustomerProfileModel = CustomerProfileModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
