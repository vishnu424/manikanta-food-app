// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { OrderCustomerModelBase } from "./OrderCustomerModel.base"

/* The TypeScript type of an instance of OrderCustomerModel */
export interface OrderCustomerModelType extends Instance<typeof OrderCustomerModel.Type> {}

/* A graphql query fragment builders for OrderCustomerModel */
export { selectFromOrderCustomer, orderCustomerModelPrimitives, OrderCustomerModelSelector } from "./OrderCustomerModel.base"

/**
 * OrderCustomerModel
 *
 * Order Customer
 */
export const OrderCustomerModel = OrderCustomerModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
