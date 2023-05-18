// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { MealPlanRecordModelBase } from "./MealPlanRecordModel.base"

/* The TypeScript type of an instance of MealPlanRecordModel */
export interface MealPlanRecordModelType extends Instance<typeof MealPlanRecordModel.Type> {}

/* A graphql query fragment builders for MealPlanRecordModel */
export { selectFromMealPlanRecord, mealPlanRecordModelPrimitives, MealPlanRecordModelSelector } from "./MealPlanRecordModel.base"

/**
 * MealPlanRecordModel
 *
 * Record of type Meal Plan (meal_plan)
 */
export const MealPlanRecordModel = MealPlanRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
