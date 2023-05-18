// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ListElementRecordModelBase } from "./ListElementRecordModel.base"

/* The TypeScript type of an instance of ListElementRecordModel */
export interface ListElementRecordModelType extends Instance<typeof ListElementRecordModel.Type> {}

/* A graphql query fragment builders for ListElementRecordModel */
export { selectFromListElementRecord, listElementRecordModelPrimitives, ListElementRecordModelSelector } from "./ListElementRecordModel.base"

/**
 * ListElementRecordModel
 *
 * Block of type List Element (list_element)
 */
export const ListElementRecordModel = ListElementRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
