// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { LandingPageHeaderSectionRecordModelBase } from "./LandingPageHeaderSectionRecordModel.base"

/* The TypeScript type of an instance of LandingPageHeaderSectionRecordModel */
export interface LandingPageHeaderSectionRecordModelType extends Instance<typeof LandingPageHeaderSectionRecordModel.Type> {}

/* A graphql query fragment builders for LandingPageHeaderSectionRecordModel */
export { selectFromLandingPageHeaderSectionRecord, landingPageHeaderSectionRecordModelPrimitives, LandingPageHeaderSectionRecordModelSelector } from "./LandingPageHeaderSectionRecordModel.base"

/**
 * LandingPageHeaderSectionRecordModel
 *
 * Block of type Landing Page Header Section (landing_page_header_section)
 */
export const LandingPageHeaderSectionRecordModel = LandingPageHeaderSectionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
