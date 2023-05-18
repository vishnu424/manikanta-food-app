// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ReviewElementRecordModelBase } from "./ReviewElementRecordModel.base"

/* The TypeScript type of an instance of ReviewElementRecordModel */
export interface ReviewElementRecordModelType extends Instance<typeof ReviewElementRecordModel.Type> {}

/* A graphql query fragment builders for ReviewElementRecordModel */
export { selectFromReviewElementRecord, reviewElementRecordModelPrimitives, ReviewElementRecordModelSelector } from "./ReviewElementRecordModel.base"

/**
 * ReviewElementRecordModel
 *
 * Block of type Review Element (review_element)
 */
export const ReviewElementRecordModel = ReviewElementRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
