// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { PlanTileRecordModelBase } from "./PlanTileRecordModel.base"

/* The TypeScript type of an instance of PlanTileRecordModel */
export interface PlanTileRecordModelType extends Instance<typeof PlanTileRecordModel.Type> {}

/* A graphql query fragment builders for PlanTileRecordModel */
export { selectFromPlanTileRecord, planTileRecordModelPrimitives, PlanTileRecordModelSelector } from "./PlanTileRecordModel.base"

/**
 * PlanTileRecordModel
 *
 * Block of type Plan Tile (plan_tile)
 */
export const PlanTileRecordModel = PlanTileRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
