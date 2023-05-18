// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ProductBenefitRecordModelBase } from "./ProductBenefitRecordModel.base"

/* The TypeScript type of an instance of ProductBenefitRecordModel */
export interface ProductBenefitRecordModelType extends Instance<typeof ProductBenefitRecordModel.Type> {}

/* A graphql query fragment builders for ProductBenefitRecordModel */
export { selectFromProductBenefitRecord, productBenefitRecordModelPrimitives, ProductBenefitRecordModelSelector } from "./ProductBenefitRecordModel.base"

/**
 * ProductBenefitRecordModel
 *
 * Block of type Product Benefit (product_benefit)
 */
export const ProductBenefitRecordModel = ProductBenefitRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
