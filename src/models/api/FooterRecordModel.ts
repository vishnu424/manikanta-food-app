// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { FooterRecordModelBase } from "./FooterRecordModel.base"

/* The TypeScript type of an instance of FooterRecordModel */
export interface FooterRecordModelType extends Instance<typeof FooterRecordModel.Type> {}

/* A graphql query fragment builders for FooterRecordModel */
export { selectFromFooterRecord, footerRecordModelPrimitives, FooterRecordModelSelector } from "./FooterRecordModel.base"

/**
 * FooterRecordModel
 *
 * Record of type Footer (footer)
 */
export const FooterRecordModel = FooterRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
