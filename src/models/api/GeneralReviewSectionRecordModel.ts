// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { GeneralReviewSectionRecordModelBase } from "./GeneralReviewSectionRecordModel.base"

/* The TypeScript type of an instance of GeneralReviewSectionRecordModel */
export interface GeneralReviewSectionRecordModelType extends Instance<typeof GeneralReviewSectionRecordModel.Type> {}

/* A graphql query fragment builders for GeneralReviewSectionRecordModel */
export { selectFromGeneralReviewSectionRecord, generalReviewSectionRecordModelPrimitives, GeneralReviewSectionRecordModelSelector } from "./GeneralReviewSectionRecordModel.base"

/**
 * GeneralReviewSectionRecordModel
 *
 * Block of type General Review Section (general_review_section)
 */
export const GeneralReviewSectionRecordModel = GeneralReviewSectionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
