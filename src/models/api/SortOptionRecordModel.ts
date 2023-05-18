// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { SortOptionRecordModelBase } from "./SortOptionRecordModel.base"

/* The TypeScript type of an instance of SortOptionRecordModel */
export interface SortOptionRecordModelType extends Instance<typeof SortOptionRecordModel.Type> {}

/* A graphql query fragment builders for SortOptionRecordModel */
export { selectFromSortOptionRecord, sortOptionRecordModelPrimitives, SortOptionRecordModelSelector } from "./SortOptionRecordModel.base"

/**
 * SortOptionRecordModel
 *
 * Block of type Sort Option (sort_option)
 */
export const SortOptionRecordModel = SortOptionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
