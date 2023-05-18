// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { DailyOrderModelBase } from "./DailyOrderModel.base"

/* The TypeScript type of an instance of DailyOrderModel */
export interface DailyOrderModelType extends Instance<typeof DailyOrderModel.Type> {}

/* A graphql query fragment builders for DailyOrderModel */
export { selectFromDailyOrder, dailyOrderModelPrimitives, DailyOrderModelSelector } from "./DailyOrderModel.base"

/**
 * DailyOrderModel
 */
export const DailyOrderModel = DailyOrderModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
