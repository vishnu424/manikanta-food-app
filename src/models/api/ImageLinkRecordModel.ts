// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ImageLinkRecordModelBase } from "./ImageLinkRecordModel.base"

/* The TypeScript type of an instance of ImageLinkRecordModel */
export interface ImageLinkRecordModelType extends Instance<typeof ImageLinkRecordModel.Type> {}

/* A graphql query fragment builders for ImageLinkRecordModel */
export { selectFromImageLinkRecord, imageLinkRecordModelPrimitives, ImageLinkRecordModelSelector } from "./ImageLinkRecordModel.base"

/**
 * ImageLinkRecordModel
 *
 * Block of type Image Link (image_link)
 */
export const ImageLinkRecordModel = ImageLinkRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
