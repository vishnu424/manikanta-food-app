// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { NutritionalPanelInfoModelBase } from "./NutritionalPanelInfoModel.base"

/* The TypeScript type of an instance of NutritionalPanelInfoModel */
export interface NutritionalPanelInfoModelType extends Instance<typeof NutritionalPanelInfoModel.Type> {}

/* A graphql query fragment builders for NutritionalPanelInfoModel */
export { selectFromNutritionalPanelInfo, nutritionalPanelInfoModelPrimitives, NutritionalPanelInfoModelSelector } from "./NutritionalPanelInfoModel.base"

/**
 * NutritionalPanelInfoModel
 *
 * Nutritional Panel Info
 */
export const NutritionalPanelInfoModel = NutritionalPanelInfoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
