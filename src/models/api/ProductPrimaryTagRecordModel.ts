// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ProductPrimaryTagRecordModelBase } from "./ProductPrimaryTagRecordModel.base"

/* The TypeScript type of an instance of ProductPrimaryTagRecordModel */
export interface ProductPrimaryTagRecordModelType extends Instance<typeof ProductPrimaryTagRecordModel.Type> {}

/* A graphql query fragment builders for ProductPrimaryTagRecordModel */
export { selectFromProductPrimaryTagRecord, productPrimaryTagRecordModelPrimitives, ProductPrimaryTagRecordModelSelector } from "./ProductPrimaryTagRecordModel.base"

/**
 * ProductPrimaryTagRecordModel
 *
 * Record of type Product Primary Tag (product_primary_tag)
 */
export const ProductPrimaryTagRecordModel = ProductPrimaryTagRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
