// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { DownloadAppRecordModelBase } from "./DownloadAppRecordModel.base"

/* The TypeScript type of an instance of DownloadAppRecordModel */
export interface DownloadAppRecordModelType extends Instance<typeof DownloadAppRecordModel.Type> {}

/* A graphql query fragment builders for DownloadAppRecordModel */
export { selectFromDownloadAppRecord, downloadAppRecordModelPrimitives, DownloadAppRecordModelSelector } from "./DownloadAppRecordModel.base"

/**
 * DownloadAppRecordModel
 *
 * Record of type Download App (download_app)
 */
export const DownloadAppRecordModel = DownloadAppRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
