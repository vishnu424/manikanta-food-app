// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { CustomerPaymentModelBase } from "./CustomerPaymentModel.base"

/* The TypeScript type of an instance of CustomerPaymentModel */
export interface CustomerPaymentModelType extends Instance<typeof CustomerPaymentModel.Type> {}

/* A graphql query fragment builders for CustomerPaymentModel */
export { selectFromCustomerPayment, customerPaymentModelPrimitives, CustomerPaymentModelSelector } from "./CustomerPaymentModel.base"

/**
 * CustomerPaymentModel
 *
 * Customer Payment
 */
export const CustomerPaymentModel = CustomerPaymentModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
