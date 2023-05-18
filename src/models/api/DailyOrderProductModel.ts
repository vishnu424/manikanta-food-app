// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { DailyOrderProductModelBase } from "./DailyOrderProductModel.base"

/* The TypeScript type of an instance of DailyOrderProductModel */
export interface DailyOrderProductModelType extends Instance<typeof DailyOrderProductModel.Type> {}

/* A graphql query fragment builders for DailyOrderProductModel */
export { selectFromDailyOrderProduct, dailyOrderProductModelPrimitives, DailyOrderProductModelSelector } from "./DailyOrderProductModel.base"

/**
 * DailyOrderProductModel
 */
export const DailyOrderProductModel = DailyOrderProductModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
