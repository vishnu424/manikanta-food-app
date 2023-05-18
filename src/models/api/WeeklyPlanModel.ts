// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { WeeklyPlanModelBase } from "./WeeklyPlanModel.base"

/* The TypeScript type of an instance of WeeklyPlanModel */
export interface WeeklyPlanModelType extends Instance<typeof WeeklyPlanModel.Type> {}

/* A graphql query fragment builders for WeeklyPlanModel */
export { selectFromWeeklyPlan, weeklyPlanModelPrimitives, WeeklyPlanModelSelector } from "./WeeklyPlanModel.base"

/**
 * WeeklyPlanModel
 */
export const WeeklyPlanModel = WeeklyPlanModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
