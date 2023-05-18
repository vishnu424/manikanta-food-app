// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { GeneralPageLearnMoreRecordModelBase } from "./GeneralPageLearnMoreRecordModel.base"

/* The TypeScript type of an instance of GeneralPageLearnMoreRecordModel */
export interface GeneralPageLearnMoreRecordModelType extends Instance<typeof GeneralPageLearnMoreRecordModel.Type> {}

/* A graphql query fragment builders for GeneralPageLearnMoreRecordModel */
export { selectFromGeneralPageLearnMoreRecord, generalPageLearnMoreRecordModelPrimitives, GeneralPageLearnMoreRecordModelSelector } from "./GeneralPageLearnMoreRecordModel.base"

/**
 * GeneralPageLearnMoreRecordModel
 *
 * Block of type General Page Learn More (general_page_learn_more)
 */
export const GeneralPageLearnMoreRecordModel = GeneralPageLearnMoreRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
