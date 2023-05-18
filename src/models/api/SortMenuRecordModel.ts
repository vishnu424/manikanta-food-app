// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { SortMenuRecordModelBase } from "./SortMenuRecordModel.base"

/* The TypeScript type of an instance of SortMenuRecordModel */
export interface SortMenuRecordModelType extends Instance<typeof SortMenuRecordModel.Type> {}

/* A graphql query fragment builders for SortMenuRecordModel */
export { selectFromSortMenuRecord, sortMenuRecordModelPrimitives, SortMenuRecordModelSelector } from "./SortMenuRecordModel.base"

/**
 * SortMenuRecordModel
 *
 * Record of type Sort Menu (sort_menu)
 */
export const SortMenuRecordModel = SortMenuRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
