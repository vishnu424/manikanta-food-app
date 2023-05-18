// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ProductDietaryTagRecordModelBase } from "./ProductDietaryTagRecordModel.base"

/* The TypeScript type of an instance of ProductDietaryTagRecordModel */
export interface ProductDietaryTagRecordModelType extends Instance<typeof ProductDietaryTagRecordModel.Type> {}

/* A graphql query fragment builders for ProductDietaryTagRecordModel */
export { selectFromProductDietaryTagRecord, productDietaryTagRecordModelPrimitives, ProductDietaryTagRecordModelSelector } from "./ProductDietaryTagRecordModel.base"

/**
 * ProductDietaryTagRecordModel
 *
 * Record of type Product Dietary Tag (product_dietary_tag)
 */
export const ProductDietaryTagRecordModel = ProductDietaryTagRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
