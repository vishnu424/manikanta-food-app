// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { LinkRecordModelBase } from "./LinkRecordModel.base"

/* The TypeScript type of an instance of LinkRecordModel */
export interface LinkRecordModelType extends Instance<typeof LinkRecordModel.Type> {}

/* A graphql query fragment builders for LinkRecordModel */
export { selectFromLinkRecord, linkRecordModelPrimitives, LinkRecordModelSelector } from "./LinkRecordModel.base"

/**
 * LinkRecordModel
 *
 * Block of type Link (link)
 */
export const LinkRecordModel = LinkRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
