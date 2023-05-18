// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { InstructionRecordModelBase } from "./InstructionRecordModel.base"

/* The TypeScript type of an instance of InstructionRecordModel */
export interface InstructionRecordModelType extends Instance<typeof InstructionRecordModel.Type> {}

/* A graphql query fragment builders for InstructionRecordModel */
export { selectFromInstructionRecord, instructionRecordModelPrimitives, InstructionRecordModelSelector } from "./InstructionRecordModel.base"

/**
 * InstructionRecordModel
 *
 * Block of type Instruction (instruction)
 */
export const InstructionRecordModel = InstructionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
