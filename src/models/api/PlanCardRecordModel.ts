// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { PlanCardRecordModelBase } from "./PlanCardRecordModel.base"

/* The TypeScript type of an instance of PlanCardRecordModel */
export interface PlanCardRecordModelType extends Instance<typeof PlanCardRecordModel.Type> {}

/* A graphql query fragment builders for PlanCardRecordModel */
export { selectFromPlanCardRecord, planCardRecordModelPrimitives, PlanCardRecordModelSelector } from "./PlanCardRecordModel.base"

/**
 * PlanCardRecordModel
 *
 * Block of type Plan Card (plan_card)
 */
export const PlanCardRecordModel = PlanCardRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
