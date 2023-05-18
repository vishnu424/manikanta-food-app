// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { GoalBasedPlanRtoModelBase } from "./GoalBasedPlanRtoModel.base"

/* The TypeScript type of an instance of GoalBasedPlanRtoModel */
export interface GoalBasedPlanRtoModelType extends Instance<typeof GoalBasedPlanRtoModel.Type> {}

/* A graphql query fragment builders for GoalBasedPlanRtoModel */
export { selectFromGoalBasedPlanRto, goalBasedPlanRtoModelPrimitives, GoalBasedPlanRtoModelSelector } from "./GoalBasedPlanRtoModel.base"

/**
 * GoalBasedPlanRtoModel
 *
 * Goal Based Plan
 */
export const GoalBasedPlanRtoModel = GoalBasedPlanRtoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
