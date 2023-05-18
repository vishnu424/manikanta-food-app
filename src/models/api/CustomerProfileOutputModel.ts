// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { CustomerProfileOutputModelBase } from "./CustomerProfileOutputModel.base"

/* The TypeScript type of an instance of CustomerProfileOutputModel */
export interface CustomerProfileOutputModelType extends Instance<typeof CustomerProfileOutputModel.Type> {}

/* A graphql query fragment builders for CustomerProfileOutputModel */
export { selectFromCustomerProfileOutput, customerProfileOutputModelPrimitives, CustomerProfileOutputModelSelector } from "./CustomerProfileOutputModel.base"

/**
 * CustomerProfileOutputModel
 */
export const CustomerProfileOutputModel = CustomerProfileOutputModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
