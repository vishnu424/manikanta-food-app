// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { LearnMoreCardRecordModelBase } from "./LearnMoreCardRecordModel.base"

/* The TypeScript type of an instance of LearnMoreCardRecordModel */
export interface LearnMoreCardRecordModelType extends Instance<typeof LearnMoreCardRecordModel.Type> {}

/* A graphql query fragment builders for LearnMoreCardRecordModel */
export { selectFromLearnMoreCardRecord, learnMoreCardRecordModelPrimitives, LearnMoreCardRecordModelSelector } from "./LearnMoreCardRecordModel.base"

/**
 * LearnMoreCardRecordModel
 *
 * Block of type Learn More Card (learn_more_card)
 */
export const LearnMoreCardRecordModel = LearnMoreCardRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
