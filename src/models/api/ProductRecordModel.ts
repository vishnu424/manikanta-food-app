// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ProductRecordModelBase } from "./ProductRecordModel.base"

/* The TypeScript type of an instance of ProductRecordModel */
export interface ProductRecordModelType extends Instance<typeof ProductRecordModel.Type> {}

/* A graphql query fragment builders for ProductRecordModel */
export { selectFromProductRecord, productRecordModelPrimitives, ProductRecordModelSelector } from "./ProductRecordModel.base"

/**
 * ProductRecordModel
 *
 * Record of type Product (product)
 */
export const ProductRecordModel = ProductRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
