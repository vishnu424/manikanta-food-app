// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { MuxThumbnailFormatType } from "./MuxThumbnailFormatTypeEnum"
import { VideoMp4Res } from "./VideoMp4ResEnum"
import { RootStoreType } from "./index"


/**
 * UploadVideoFieldBase
 * auto generated base class for the model UploadVideoFieldModel.
 */
export const UploadVideoFieldModelBase = ModelBase
  .named('UploadVideoField')
  .props({
    __typename: types.optional(types.literal("UploadVideoField"), "UploadVideoField"),
    duration: types.union(types.undefined, types.null, types.integer),
    framerate: types.union(types.undefined, types.null, types.integer),
    mp4Url: types.union(types.undefined, types.null, types.string),
    muxAssetId: types.union(types.undefined, types.string),
    muxPlaybackId: types.union(types.undefined, types.string),
    streamingUrl: types.union(types.undefined, types.string),
    thumbnailUrl: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UploadVideoFieldModelSelector extends QueryBuilder {
  get duration() { return this.__attr(`duration`) }
  get framerate() { return this.__attr(`framerate`) }
  get mp4Url() { return this.__attr(`mp4Url`) }
  get muxAssetId() { return this.__attr(`muxAssetId`) }
  get muxPlaybackId() { return this.__attr(`muxPlaybackId`) }
  get streamingUrl() { return this.__attr(`streamingUrl`) }
  get thumbnailUrl() { return this.__attr(`thumbnailUrl`) }
}
export function selectFromUploadVideoField() {
  return new UploadVideoFieldModelSelector()
}

export const uploadVideoFieldModelPrimitives = selectFromUploadVideoField().duration.framerate.mp4Url.muxAssetId.muxPlaybackId.streamingUrl.thumbnailUrl
