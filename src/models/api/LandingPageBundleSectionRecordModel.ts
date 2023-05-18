// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { LandingPageBundleSectionRecordModelBase } from "./LandingPageBundleSectionRecordModel.base"

/* The TypeScript type of an instance of LandingPageBundleSectionRecordModel */
export interface LandingPageBundleSectionRecordModelType extends Instance<typeof LandingPageBundleSectionRecordModel.Type> {}

/* A graphql query fragment builders for LandingPageBundleSectionRecordModel */
export { selectFromLandingPageBundleSectionRecord, landingPageBundleSectionRecordModelPrimitives, LandingPageBundleSectionRecordModelSelector } from "./LandingPageBundleSectionRecordModel.base"

/**
 * LandingPageBundleSectionRecordModel
 *
 * Block of type Landing Page Bundle Section (landing_page_bundle_section)
 */
export const LandingPageBundleSectionRecordModel = LandingPageBundleSectionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
