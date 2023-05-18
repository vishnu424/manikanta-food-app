// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { CustomerAddressModelBase } from "./CustomerAddressModel.base"

/* The TypeScript type of an instance of CustomerAddressModel */
export interface CustomerAddressModelType extends Instance<typeof CustomerAddressModel.Type> {}

/* A graphql query fragment builders for CustomerAddressModel */
export { selectFromCustomerAddress, customerAddressModelPrimitives, CustomerAddressModelSelector } from "./CustomerAddressModel.base"

/**
 * CustomerAddressModel
 *
 * Customer Address
 */
export const CustomerAddressModel = CustomerAddressModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
