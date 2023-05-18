// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { FixedMaleMealPlanRtoModelBase } from "./FixedMaleMealPlanRtoModel.base"

/* The TypeScript type of an instance of FixedMaleMealPlanRtoModel */
export interface FixedMaleMealPlanRtoModelType extends Instance<typeof FixedMaleMealPlanRtoModel.Type> {}

/* A graphql query fragment builders for FixedMaleMealPlanRtoModel */
export { selectFromFixedMaleMealPlanRto, fixedMaleMealPlanRtoModelPrimitives, FixedMaleMealPlanRtoModelSelector } from "./FixedMaleMealPlanRtoModel.base"

/**
 * FixedMaleMealPlanRtoModel
 */
export const FixedMaleMealPlanRtoModel = FixedMaleMealPlanRtoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
