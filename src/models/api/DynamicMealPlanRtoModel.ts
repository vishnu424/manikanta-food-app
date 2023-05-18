// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { DynamicMealPlanRtoModelBase } from "./DynamicMealPlanRtoModel.base"

/* The TypeScript type of an instance of DynamicMealPlanRtoModel */
export interface DynamicMealPlanRtoModelType extends Instance<typeof DynamicMealPlanRtoModel.Type> {}

/* A graphql query fragment builders for DynamicMealPlanRtoModel */
export { selectFromDynamicMealPlanRto, dynamicMealPlanRtoModelPrimitives, DynamicMealPlanRtoModelSelector } from "./DynamicMealPlanRtoModel.base"

/**
 * DynamicMealPlanRtoModel
 */
export const DynamicMealPlanRtoModel = DynamicMealPlanRtoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
