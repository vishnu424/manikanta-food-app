// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { LandingPageBenefitsSectionRecordModelBase } from "./LandingPageBenefitsSectionRecordModel.base"

/* The TypeScript type of an instance of LandingPageBenefitsSectionRecordModel */
export interface LandingPageBenefitsSectionRecordModelType extends Instance<typeof LandingPageBenefitsSectionRecordModel.Type> {}

/* A graphql query fragment builders for LandingPageBenefitsSectionRecordModel */
export { selectFromLandingPageBenefitsSectionRecord, landingPageBenefitsSectionRecordModelPrimitives, LandingPageBenefitsSectionRecordModelSelector } from "./LandingPageBenefitsSectionRecordModel.base"

/**
 * LandingPageBenefitsSectionRecordModel
 *
 * Block of type Landing Page Benefits Section (landing_page_benefits_section)
 */
export const LandingPageBenefitsSectionRecordModel = LandingPageBenefitsSectionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
