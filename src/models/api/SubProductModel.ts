// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { SubProductModelBase } from "./SubProductModel.base"

/* The TypeScript type of an instance of SubProductModel */
export interface SubProductModelType extends Instance<typeof SubProductModel.Type> {}

/* A graphql query fragment builders for SubProductModel */
export { selectFromSubProduct, subProductModelPrimitives, SubProductModelSelector } from "./SubProductModel.base"

/**
 * SubProductModel
 *
 * Sub Product
 */
export const SubProductModel = SubProductModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
