// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { MealPlanModelBase } from "./MealPlanModel.base"

/* The TypeScript type of an instance of MealPlanModel */
export interface MealPlanModelType extends Instance<typeof MealPlanModel.Type> {}

/* A graphql query fragment builders for MealPlanModel */
export { selectFromMealPlan, mealPlanModelPrimitives, MealPlanModelSelector } from "./MealPlanModel.base"

/**
 * MealPlanModel
 *
 * Meal Plan
 */
export const MealPlanModel = MealPlanModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
