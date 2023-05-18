// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { FooterLinkSectionRecordModelBase } from "./FooterLinkSectionRecordModel.base"

/* The TypeScript type of an instance of FooterLinkSectionRecordModel */
export interface FooterLinkSectionRecordModelType extends Instance<typeof FooterLinkSectionRecordModel.Type> {}

/* A graphql query fragment builders for FooterLinkSectionRecordModel */
export { selectFromFooterLinkSectionRecord, footerLinkSectionRecordModelPrimitives, FooterLinkSectionRecordModelSelector } from "./FooterLinkSectionRecordModel.base"

/**
 * FooterLinkSectionRecordModel
 *
 * Block of type Footer Link Section (footer_link_section)
 */
export const FooterLinkSectionRecordModel = FooterLinkSectionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
