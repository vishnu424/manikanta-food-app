// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { SeoFieldModelBase } from "./SeoFieldModel.base"

/* The TypeScript type of an instance of SeoFieldModel */
export interface SeoFieldModelType extends Instance<typeof SeoFieldModel.Type> {}

/* A graphql query fragment builders for SeoFieldModel */
export { selectFromSeoField, seoFieldModelPrimitives, SeoFieldModelSelector } from "./SeoFieldModel.base"

/**
 * SeoFieldModel
 */
export const SeoFieldModel = SeoFieldModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
