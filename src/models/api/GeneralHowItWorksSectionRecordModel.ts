// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { GeneralHowItWorksSectionRecordModelBase } from "./GeneralHowItWorksSectionRecordModel.base"

/* The TypeScript type of an instance of GeneralHowItWorksSectionRecordModel */
export interface GeneralHowItWorksSectionRecordModelType extends Instance<typeof GeneralHowItWorksSectionRecordModel.Type> {}

/* A graphql query fragment builders for GeneralHowItWorksSectionRecordModel */
export { selectFromGeneralHowItWorksSectionRecord, generalHowItWorksSectionRecordModelPrimitives, GeneralHowItWorksSectionRecordModelSelector } from "./GeneralHowItWorksSectionRecordModel.base"

/**
 * GeneralHowItWorksSectionRecordModel
 *
 * Block of type General How It Works Section (general_how_it_works_section)
 */
export const GeneralHowItWorksSectionRecordModel = GeneralHowItWorksSectionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
