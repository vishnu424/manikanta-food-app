// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { FooterColumnRecordModelBase } from "./FooterColumnRecordModel.base"

/* The TypeScript type of an instance of FooterColumnRecordModel */
export interface FooterColumnRecordModelType extends Instance<typeof FooterColumnRecordModel.Type> {}

/* A graphql query fragment builders for FooterColumnRecordModel */
export { selectFromFooterColumnRecord, footerColumnRecordModelPrimitives, FooterColumnRecordModelSelector } from "./FooterColumnRecordModel.base"

/**
 * FooterColumnRecordModel
 *
 * Block of type Footer Column (footer_column)
 */
export const FooterColumnRecordModel = FooterColumnRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
