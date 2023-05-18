// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { AppContentModelBase } from "./AppContentModel.base"

/* The TypeScript type of an instance of AppContentModel */
export interface AppContentModelType extends Instance<typeof AppContentModel.Type> {}

/* A graphql query fragment builders for AppContentModel */
export { selectFromAppContent, appContentModelPrimitives, AppContentModelSelector } from "./AppContentModel.base"

/**
 * AppContentModel
 *
 * App Content
 */
export const AppContentModel = AppContentModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
