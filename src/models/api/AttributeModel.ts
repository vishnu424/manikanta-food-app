// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { AttributeModelBase } from "./AttributeModel.base"

/* The TypeScript type of an instance of AttributeModel */
export interface AttributeModelType extends Instance<typeof AttributeModel.Type> {}

/* A graphql query fragment builders for AttributeModel */
export { selectFromAttribute, attributeModelPrimitives, AttributeModelSelector } from "./AttributeModel.base"

/**
 * AttributeModel
 *
 * Attribute
 */
export const AttributeModel = AttributeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
