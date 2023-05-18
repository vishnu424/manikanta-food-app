// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ReferHistoryModelBase } from "./ReferHistoryModel.base"

/* The TypeScript type of an instance of ReferHistoryModel */
export interface ReferHistoryModelType extends Instance<typeof ReferHistoryModel.Type> {}

/* A graphql query fragment builders for ReferHistoryModel */
export { selectFromReferHistory, referHistoryModelPrimitives, ReferHistoryModelSelector } from "./ReferHistoryModel.base"

/**
 * ReferHistoryModel
 *
 * Referral History
 */
export const ReferHistoryModel = ReferHistoryModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
