// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { LandingPageRecordModelBase } from "./LandingPageRecordModel.base"

/* The TypeScript type of an instance of LandingPageRecordModel */
export interface LandingPageRecordModelType extends Instance<typeof LandingPageRecordModel.Type> {}

/* A graphql query fragment builders for LandingPageRecordModel */
export { selectFromLandingPageRecord, landingPageRecordModelPrimitives, LandingPageRecordModelSelector } from "./LandingPageRecordModel.base"

/**
 * LandingPageRecordModel
 *
 * Record of type Landing Page (landing_page)
 */
export const LandingPageRecordModel = LandingPageRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
