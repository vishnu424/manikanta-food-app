// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ProductCategoryCardRecordModelBase } from "./ProductCategoryCardRecordModel.base"

/* The TypeScript type of an instance of ProductCategoryCardRecordModel */
export interface ProductCategoryCardRecordModelType extends Instance<typeof ProductCategoryCardRecordModel.Type> {}

/* A graphql query fragment builders for ProductCategoryCardRecordModel */
export { selectFromProductCategoryCardRecord, productCategoryCardRecordModelPrimitives, ProductCategoryCardRecordModelSelector } from "./ProductCategoryCardRecordModel.base"

/**
 * ProductCategoryCardRecordModel
 *
 * Block of type Product Category Card (product_category_card)
 */
export const ProductCategoryCardRecordModel = ProductCategoryCardRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
