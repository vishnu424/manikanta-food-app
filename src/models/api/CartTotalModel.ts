// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { CartTotalModelBase } from "./CartTotalModel.base"

/* The TypeScript type of an instance of CartTotalModel */
export interface CartTotalModelType extends Instance<typeof CartTotalModel.Type> {}

/* A graphql query fragment builders for CartTotalModel */
export { selectFromCartTotal, cartTotalModelPrimitives, CartTotalModelSelector } from "./CartTotalModel.base"

/**
 * CartTotalModel
 *
 * Cart Total
 */
export const CartTotalModel = CartTotalModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
