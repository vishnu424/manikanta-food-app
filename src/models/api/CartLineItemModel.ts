// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { CartLineItemModelBase } from "./CartLineItemModel.base"

/* The TypeScript type of an instance of CartLineItemModel */
export interface CartLineItemModelType extends Instance<typeof CartLineItemModel.Type> {}

/* A graphql query fragment builders for CartLineItemModel */
export { selectFromCartLineItem, cartLineItemModelPrimitives, CartLineItemModelSelector } from "./CartLineItemModel.base"

/**
 * CartLineItemModel
 *
 * Cart LineItem
 */
export const CartLineItemModel = CartLineItemModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
