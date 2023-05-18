// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ProductSecondaryTagRecordModelBase } from "./ProductSecondaryTagRecordModel.base"

/* The TypeScript type of an instance of ProductSecondaryTagRecordModel */
export interface ProductSecondaryTagRecordModelType extends Instance<typeof ProductSecondaryTagRecordModel.Type> {}

/* A graphql query fragment builders for ProductSecondaryTagRecordModel */
export { selectFromProductSecondaryTagRecord, productSecondaryTagRecordModelPrimitives, ProductSecondaryTagRecordModelSelector } from "./ProductSecondaryTagRecordModel.base"

/**
 * ProductSecondaryTagRecordModel
 *
 * Record of type Product Secondary Tag (product_secondary_tag)
 */
export const ProductSecondaryTagRecordModel = ProductSecondaryTagRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
