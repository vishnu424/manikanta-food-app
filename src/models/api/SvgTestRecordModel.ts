// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { SvgTestRecordModelBase } from "./SvgTestRecordModel.base"

/* The TypeScript type of an instance of SvgTestRecordModel */
export interface SvgTestRecordModelType extends Instance<typeof SvgTestRecordModel.Type> {}

/* A graphql query fragment builders for SvgTestRecordModel */
export { selectFromSvgTestRecord, svgTestRecordModelPrimitives, SvgTestRecordModelSelector } from "./SvgTestRecordModel.base"

/**
 * SvgTestRecordModel
 *
 * Record of type Svg Test (svg_test)
 */
export const SvgTestRecordModel = SvgTestRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
