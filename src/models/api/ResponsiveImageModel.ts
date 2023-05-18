// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ResponsiveImageModelBase } from "./ResponsiveImageModel.base"

/* The TypeScript type of an instance of ResponsiveImageModel */
export interface ResponsiveImageModelType extends Instance<typeof ResponsiveImageModel.Type> {}

/* A graphql query fragment builders for ResponsiveImageModel */
export { selectFromResponsiveImage, responsiveImageModelPrimitives, ResponsiveImageModelSelector } from "./ResponsiveImageModel.base"

/**
 * ResponsiveImageModel
 */
export const ResponsiveImageModel = ResponsiveImageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
