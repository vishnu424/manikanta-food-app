// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ProductCollectionDtoModelBase } from "./ProductCollectionDtoModel.base"

/* The TypeScript type of an instance of ProductCollectionDtoModel */
export interface ProductCollectionDtoModelType extends Instance<typeof ProductCollectionDtoModel.Type> {}

/* A graphql query fragment builders for ProductCollectionDtoModel */
export { selectFromProductCollectionDto, productCollectionDtoModelPrimitives, ProductCollectionDtoModelSelector } from "./ProductCollectionDtoModel.base"

/**
 * ProductCollectionDtoModel
 *
 * Product Collection
 */
export const ProductCollectionDtoModel = ProductCollectionDtoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
