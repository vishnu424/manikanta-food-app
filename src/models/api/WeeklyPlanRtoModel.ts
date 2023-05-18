// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { WeeklyPlanRtoModelBase } from "./WeeklyPlanRtoModel.base"

/* The TypeScript type of an instance of WeeklyPlanRtoModel */
export interface WeeklyPlanRtoModelType extends Instance<typeof WeeklyPlanRtoModel.Type> {}

/* A graphql query fragment builders for WeeklyPlanRtoModel */
export { selectFromWeeklyPlanRto, weeklyPlanRtoModelPrimitives, WeeklyPlanRtoModelSelector } from "./WeeklyPlanRtoModel.base"

/**
 * WeeklyPlanRtoModel
 */
export const WeeklyPlanRtoModel = WeeklyPlanRtoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
