// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { FilterSectionRecordModelBase } from "./FilterSectionRecordModel.base"

/* The TypeScript type of an instance of FilterSectionRecordModel */
export interface FilterSectionRecordModelType extends Instance<typeof FilterSectionRecordModel.Type> {}

/* A graphql query fragment builders for FilterSectionRecordModel */
export { selectFromFilterSectionRecord, filterSectionRecordModelPrimitives, FilterSectionRecordModelSelector } from "./FilterSectionRecordModel.base"

/**
 * FilterSectionRecordModel
 *
 * Block of type Filter Section (filter_section)
 */
export const FilterSectionRecordModel = FilterSectionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
