// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { UploadVideoFieldModelBase } from "./UploadVideoFieldModel.base"

/* The TypeScript type of an instance of UploadVideoFieldModel */
export interface UploadVideoFieldModelType extends Instance<typeof UploadVideoFieldModel.Type> {}

/* A graphql query fragment builders for UploadVideoFieldModel */
export { selectFromUploadVideoField, uploadVideoFieldModelPrimitives, UploadVideoFieldModelSelector } from "./UploadVideoFieldModel.base"

/**
 * UploadVideoFieldModel
 */
export const UploadVideoFieldModel = UploadVideoFieldModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
