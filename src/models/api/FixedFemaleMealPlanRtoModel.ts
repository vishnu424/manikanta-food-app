// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { FixedFemaleMealPlanRtoModelBase } from "./FixedFemaleMealPlanRtoModel.base"

/* The TypeScript type of an instance of FixedFemaleMealPlanRtoModel */
export interface FixedFemaleMealPlanRtoModelType extends Instance<typeof FixedFemaleMealPlanRtoModel.Type> {}

/* A graphql query fragment builders for FixedFemaleMealPlanRtoModel */
export { selectFromFixedFemaleMealPlanRto, fixedFemaleMealPlanRtoModelPrimitives, FixedFemaleMealPlanRtoModelSelector } from "./FixedFemaleMealPlanRtoModel.base"

/**
 * FixedFemaleMealPlanRtoModel
 */
export const FixedFemaleMealPlanRtoModel = FixedFemaleMealPlanRtoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
