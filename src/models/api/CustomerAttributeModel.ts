// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { CustomerAttributeModelBase } from "./CustomerAttributeModel.base"

/* The TypeScript type of an instance of CustomerAttributeModel */
export interface CustomerAttributeModelType extends Instance<typeof CustomerAttributeModel.Type> {}

/* A graphql query fragment builders for CustomerAttributeModel */
export { selectFromCustomerAttribute, customerAttributeModelPrimitives, CustomerAttributeModelSelector } from "./CustomerAttributeModel.base"

/**
 * CustomerAttributeModel
 *
 * Customer Attribute
 */
export const CustomerAttributeModel = CustomerAttributeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
