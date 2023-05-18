// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { PromotionModelBase } from "./PromotionModel.base"

/* The TypeScript type of an instance of PromotionModel */
export interface PromotionModelType extends Instance<typeof PromotionModel.Type> {}

/* A graphql query fragment builders for PromotionModel */
export { selectFromPromotion, promotionModelPrimitives, PromotionModelSelector } from "./PromotionModel.base"

/**
 * PromotionModel
 *
 * Promotion
 */
export const PromotionModel = PromotionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
