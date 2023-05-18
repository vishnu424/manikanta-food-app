// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { GeneralStockistSectionRecordModelBase } from "./GeneralStockistSectionRecordModel.base"

/* The TypeScript type of an instance of GeneralStockistSectionRecordModel */
export interface GeneralStockistSectionRecordModelType extends Instance<typeof GeneralStockistSectionRecordModel.Type> {}

/* A graphql query fragment builders for GeneralStockistSectionRecordModel */
export { selectFromGeneralStockistSectionRecord, generalStockistSectionRecordModelPrimitives, GeneralStockistSectionRecordModelSelector } from "./GeneralStockistSectionRecordModel.base"

/**
 * GeneralStockistSectionRecordModel
 *
 * Block of type General Stockist Section (general_stockist_section)
 */
export const GeneralStockistSectionRecordModel = GeneralStockistSectionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
