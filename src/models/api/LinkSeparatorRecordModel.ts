// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { LinkSeparatorRecordModelBase } from "./LinkSeparatorRecordModel.base"

/* The TypeScript type of an instance of LinkSeparatorRecordModel */
export interface LinkSeparatorRecordModelType extends Instance<typeof LinkSeparatorRecordModel.Type> {}

/* A graphql query fragment builders for LinkSeparatorRecordModel */
export { selectFromLinkSeparatorRecord, linkSeparatorRecordModelPrimitives, LinkSeparatorRecordModelSelector } from "./LinkSeparatorRecordModel.base"

/**
 * LinkSeparatorRecordModel
 *
 * Block of type Link Separator (link_separator)
 */
export const LinkSeparatorRecordModel = LinkSeparatorRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
