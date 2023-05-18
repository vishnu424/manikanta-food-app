// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { FocalPointModelBase } from "./FocalPointModel.base"

/* The TypeScript type of an instance of FocalPointModel */
export interface FocalPointModelType extends Instance<typeof FocalPointModel.Type> {}

/* A graphql query fragment builders for FocalPointModel */
export { selectFromFocalPoint, focalPointModelPrimitives, FocalPointModelSelector } from "./FocalPointModel.base"

/**
 * FocalPointModel
 */
export const FocalPointModel = FocalPointModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
