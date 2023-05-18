// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { FooterTextSectionRecordModelBase } from "./FooterTextSectionRecordModel.base"

/* The TypeScript type of an instance of FooterTextSectionRecordModel */
export interface FooterTextSectionRecordModelType extends Instance<typeof FooterTextSectionRecordModel.Type> {}

/* A graphql query fragment builders for FooterTextSectionRecordModel */
export { selectFromFooterTextSectionRecord, footerTextSectionRecordModelPrimitives, FooterTextSectionRecordModelSelector } from "./FooterTextSectionRecordModel.base"

/**
 * FooterTextSectionRecordModel
 *
 * Block of type Footer Text Section (footer_text_section)
 */
export const FooterTextSectionRecordModel = FooterTextSectionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
