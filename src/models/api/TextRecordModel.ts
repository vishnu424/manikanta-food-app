// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { TextRecordModelBase } from "./TextRecordModel.base"

/* The TypeScript type of an instance of TextRecordModel */
export interface TextRecordModelType extends Instance<typeof TextRecordModel.Type> {}

/* A graphql query fragment builders for TextRecordModel */
export { selectFromTextRecord, textRecordModelPrimitives, TextRecordModelSelector } from "./TextRecordModel.base"

/**
 * TextRecordModel
 *
 * Block of type Text (text)
 */
export const TextRecordModel = TextRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
