// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ProductCardRecordModelBase } from "./ProductCardRecordModel.base"

/* The TypeScript type of an instance of ProductCardRecordModel */
export interface ProductCardRecordModelType extends Instance<typeof ProductCardRecordModel.Type> {}

/* A graphql query fragment builders for ProductCardRecordModel */
export { selectFromProductCardRecord, productCardRecordModelPrimitives, ProductCardRecordModelSelector } from "./ProductCardRecordModel.base"

/**
 * ProductCardRecordModel
 *
 * Block of type Product Card (product_card)
 */
export const ProductCardRecordModel = ProductCardRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
