// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { GeneralPageRecordModelBase } from "./GeneralPageRecordModel.base"

/* The TypeScript type of an instance of GeneralPageRecordModel */
export interface GeneralPageRecordModelType extends Instance<typeof GeneralPageRecordModel.Type> {}

/* A graphql query fragment builders for GeneralPageRecordModel */
export { selectFromGeneralPageRecord, generalPageRecordModelPrimitives, GeneralPageRecordModelSelector } from "./GeneralPageRecordModel.base"

/**
 * GeneralPageRecordModel
 *
 * Record of type General Page (general_page)
 */
export const GeneralPageRecordModel = GeneralPageRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
