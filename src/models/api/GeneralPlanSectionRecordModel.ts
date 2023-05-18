// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { GeneralPlanSectionRecordModelBase } from "./GeneralPlanSectionRecordModel.base"

/* The TypeScript type of an instance of GeneralPlanSectionRecordModel */
export interface GeneralPlanSectionRecordModelType extends Instance<typeof GeneralPlanSectionRecordModel.Type> {}

/* A graphql query fragment builders for GeneralPlanSectionRecordModel */
export { selectFromGeneralPlanSectionRecord, generalPlanSectionRecordModelPrimitives, GeneralPlanSectionRecordModelSelector } from "./GeneralPlanSectionRecordModel.base"

/**
 * GeneralPlanSectionRecordModel
 *
 * Block of type General Plan Section (general_plan_section)
 */
export const GeneralPlanSectionRecordModel = GeneralPlanSectionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
