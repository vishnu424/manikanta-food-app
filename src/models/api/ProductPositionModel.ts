// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ProductPositionModelBase } from "./ProductPositionModel.base"

/* The TypeScript type of an instance of ProductPositionModel */
export interface ProductPositionModelType extends Instance<typeof ProductPositionModel.Type> {}

/* A graphql query fragment builders for ProductPositionModel */
export { selectFromProductPosition, productPositionModelPrimitives, ProductPositionModelSelector } from "./ProductPositionModel.base"

/**
 * ProductPositionModel
 */
export const ProductPositionModel = ProductPositionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
