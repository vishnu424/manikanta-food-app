// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { NutritionalInfoModelBase } from "./NutritionalInfoModel.base"

/* The TypeScript type of an instance of NutritionalInfoModel */
export interface NutritionalInfoModelType extends Instance<typeof NutritionalInfoModel.Type> {}

/* A graphql query fragment builders for NutritionalInfoModel */
export { selectFromNutritionalInfo, nutritionalInfoModelPrimitives, NutritionalInfoModelSelector } from "./NutritionalInfoModel.base"

/**
 * NutritionalInfoModel
 *
 * Nutritional Info
 */
export const NutritionalInfoModel = NutritionalInfoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
