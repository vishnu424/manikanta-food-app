// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { FilterValueRecordModelBase } from "./FilterValueRecordModel.base"

/* The TypeScript type of an instance of FilterValueRecordModel */
export interface FilterValueRecordModelType extends Instance<typeof FilterValueRecordModel.Type> {}

/* A graphql query fragment builders for FilterValueRecordModel */
export { selectFromFilterValueRecord, filterValueRecordModelPrimitives, FilterValueRecordModelSelector } from "./FilterValueRecordModel.base"

/**
 * FilterValueRecordModel
 *
 * Block of type Filter Value (filter_value)
 */
export const FilterValueRecordModel = FilterValueRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
