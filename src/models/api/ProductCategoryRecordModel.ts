// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ProductCategoryRecordModelBase } from "./ProductCategoryRecordModel.base"

/* The TypeScript type of an instance of ProductCategoryRecordModel */
export interface ProductCategoryRecordModelType extends Instance<typeof ProductCategoryRecordModel.Type> {}

/* A graphql query fragment builders for ProductCategoryRecordModel */
export { selectFromProductCategoryRecord, productCategoryRecordModelPrimitives, ProductCategoryRecordModelSelector } from "./ProductCategoryRecordModel.base"

/**
 * ProductCategoryRecordModel
 *
 * Record of type Product Category (product_category)
 */
export const ProductCategoryRecordModel = ProductCategoryRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
