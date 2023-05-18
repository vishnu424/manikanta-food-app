// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ProductTagRecordModelBase } from "./ProductTagRecordModel.base"

/* The TypeScript type of an instance of ProductTagRecordModel */
export interface ProductTagRecordModelType extends Instance<typeof ProductTagRecordModel.Type> {}

/* A graphql query fragment builders for ProductTagRecordModel */
export { selectFromProductTagRecord, productTagRecordModelPrimitives, ProductTagRecordModelSelector } from "./ProductTagRecordModel.base"

/**
 * ProductTagRecordModel
 *
 * Record of type Product Tag (product_tag)
 */
export const ProductTagRecordModel = ProductTagRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
