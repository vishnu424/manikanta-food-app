// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { MealPlanItemModelBase } from "./MealPlanItemModel.base"

/* The TypeScript type of an instance of MealPlanItemModel */
export interface MealPlanItemModelType extends Instance<typeof MealPlanItemModel.Type> {}

/* A graphql query fragment builders for MealPlanItemModel */
export { selectFromMealPlanItem, mealPlanItemModelPrimitives, MealPlanItemModelSelector } from "./MealPlanItemModel.base"

/**
 * MealPlanItemModel
 *
 * Meal Plan Item
 */
export const MealPlanItemModel = MealPlanItemModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
