// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { FilterRecordModelBase } from "./FilterRecordModel.base"

/* The TypeScript type of an instance of FilterRecordModel */
export interface FilterRecordModelType extends Instance<typeof FilterRecordModel.Type> {}

/* A graphql query fragment builders for FilterRecordModel */
export { selectFromFilterRecord, filterRecordModelPrimitives, FilterRecordModelSelector } from "./FilterRecordModel.base"

/**
 * FilterRecordModel
 *
 * Record of type Filter (filter)
 */
export const FilterRecordModel = FilterRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
