// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { GlobalSeoFieldModelBase } from "./GlobalSeoFieldModel.base"

/* The TypeScript type of an instance of GlobalSeoFieldModel */
export interface GlobalSeoFieldModelType extends Instance<typeof GlobalSeoFieldModel.Type> {}

/* A graphql query fragment builders for GlobalSeoFieldModel */
export { selectFromGlobalSeoField, globalSeoFieldModelPrimitives, GlobalSeoFieldModelSelector } from "./GlobalSeoFieldModel.base"

/**
 * GlobalSeoFieldModel
 */
export const GlobalSeoFieldModel = GlobalSeoFieldModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
