// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { FileFieldModelBase } from "./FileFieldModel.base"

/* The TypeScript type of an instance of FileFieldModel */
export interface FileFieldModelType extends Instance<typeof FileFieldModel.Type> {}

/* A graphql query fragment builders for FileFieldModel */
export { selectFromFileField, fileFieldModelPrimitives, FileFieldModelSelector } from "./FileFieldModel.base"

/**
 * FileFieldModel
 */
export const FileFieldModel = FileFieldModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
