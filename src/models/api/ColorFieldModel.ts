// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ColorFieldModelBase } from "./ColorFieldModel.base"

/* The TypeScript type of an instance of ColorFieldModel */
export interface ColorFieldModelType extends Instance<typeof ColorFieldModel.Type> {}

/* A graphql query fragment builders for ColorFieldModel */
export { selectFromColorField, colorFieldModelPrimitives, ColorFieldModelSelector } from "./ColorFieldModel.base"

/**
 * ColorFieldModel
 */
export const ColorFieldModel = ColorFieldModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
