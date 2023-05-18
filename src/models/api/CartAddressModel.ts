// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { CartAddressModelBase } from "./CartAddressModel.base"

/* The TypeScript type of an instance of CartAddressModel */
export interface CartAddressModelType extends Instance<typeof CartAddressModel.Type> {}

/* A graphql query fragment builders for CartAddressModel */
export { selectFromCartAddress, cartAddressModelPrimitives, CartAddressModelSelector } from "./CartAddressModel.base"

/**
 * CartAddressModel
 *
 * Cart Address
 */
export const CartAddressModel = CartAddressModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
