// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ProductCategorySectionRecordModelBase } from "./ProductCategorySectionRecordModel.base"

/* The TypeScript type of an instance of ProductCategorySectionRecordModel */
export interface ProductCategorySectionRecordModelType extends Instance<typeof ProductCategorySectionRecordModel.Type> {}

/* A graphql query fragment builders for ProductCategorySectionRecordModel */
export { selectFromProductCategorySectionRecord, productCategorySectionRecordModelPrimitives, ProductCategorySectionRecordModelSelector } from "./ProductCategorySectionRecordModel.base"

/**
 * ProductCategorySectionRecordModel
 *
 * Block of type Product Category Section (product_category_section)
 */
export const ProductCategorySectionRecordModel = ProductCategorySectionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
