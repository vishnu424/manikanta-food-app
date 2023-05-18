// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { SiteModelBase } from "./SiteModel.base"

/* The TypeScript type of an instance of SiteModel */
export interface SiteModelType extends Instance<typeof SiteModel.Type> {}

/* A graphql query fragment builders for SiteModel */
export { selectFromSite, siteModelPrimitives, SiteModelSelector } from "./SiteModel.base"

/**
 * SiteModel
 */
export const SiteModel = SiteModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
