// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { LandingPageProductSectionRecordModelBase } from "./LandingPageProductSectionRecordModel.base"

/* The TypeScript type of an instance of LandingPageProductSectionRecordModel */
export interface LandingPageProductSectionRecordModelType extends Instance<typeof LandingPageProductSectionRecordModel.Type> {}

/* A graphql query fragment builders for LandingPageProductSectionRecordModel */
export { selectFromLandingPageProductSectionRecord, landingPageProductSectionRecordModelPrimitives, LandingPageProductSectionRecordModelSelector } from "./LandingPageProductSectionRecordModel.base"

/**
 * LandingPageProductSectionRecordModel
 *
 * Block of type Landing Page Product Section (landing_page_product_section)
 */
export const LandingPageProductSectionRecordModel = LandingPageProductSectionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
