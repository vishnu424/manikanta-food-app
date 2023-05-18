// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ProductInstructionRecordModelBase } from "./ProductInstructionRecordModel.base"

/* The TypeScript type of an instance of ProductInstructionRecordModel */
export interface ProductInstructionRecordModelType extends Instance<typeof ProductInstructionRecordModel.Type> {}

/* A graphql query fragment builders for ProductInstructionRecordModel */
export { selectFromProductInstructionRecord, productInstructionRecordModelPrimitives, ProductInstructionRecordModelSelector } from "./ProductInstructionRecordModel.base"

/**
 * ProductInstructionRecordModel
 *
 * Record of type Product Instruction (product_instruction)
 */
export const ProductInstructionRecordModel = ProductInstructionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
