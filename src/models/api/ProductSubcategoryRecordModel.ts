// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ProductSubcategoryRecordModelBase } from "./ProductSubcategoryRecordModel.base"

/* The TypeScript type of an instance of ProductSubcategoryRecordModel */
export interface ProductSubcategoryRecordModelType extends Instance<typeof ProductSubcategoryRecordModel.Type> {}

/* A graphql query fragment builders for ProductSubcategoryRecordModel */
export { selectFromProductSubcategoryRecord, productSubcategoryRecordModelPrimitives, ProductSubcategoryRecordModelSelector } from "./ProductSubcategoryRecordModel.base"

/**
 * ProductSubcategoryRecordModel
 *
 * Record of type Product Subcategory (product_subcategory)
 */
export const ProductSubcategoryRecordModel = ProductSubcategoryRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
