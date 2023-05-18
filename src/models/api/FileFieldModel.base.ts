// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ColorFieldModel, ColorFieldModelType } from "./ColorFieldModel"
import { ColorFieldModelSelector } from "./ColorFieldModel.base"
import { FocalPointModel, FocalPointModelType } from "./FocalPointModel"
import { FocalPointModelSelector } from "./FocalPointModel.base"
import { ResponsiveImageModel, ResponsiveImageModelType } from "./ResponsiveImageModel"
import { ResponsiveImageModelSelector } from "./ResponsiveImageModel.base"
import { ImgixParams } from "./RootStore.base"
import { SiteLocale } from "./SiteLocaleEnum"
import { UploadVideoFieldModel, UploadVideoFieldModelType } from "./UploadVideoFieldModel"
import { UploadVideoFieldModelSelector } from "./UploadVideoFieldModel.base"
import { RootStoreType } from "./index"


/**
 * FileFieldBase
 * auto generated base class for the model FileFieldModel.
 */
export const FileFieldModelBase = ModelBase
  .named('FileField')
  .props({
    // __typename: types.optional(types.literal("FileField"), "FileField"),
    // _createdAt: types.union(types.undefined, types.frozen()),
    // _updatedAt: types.union(types.undefined, types.frozen()),
    alt: types.union(types.undefined, types.null, types.string),
    // author: types.union(types.undefined, types.null, types.string),
    // basename: types.union(types.undefined, types.string),
    // blurUpThumb: types.union(types.undefined, types.null, types.string),
    // blurhash: types.union(types.undefined, types.null, types.string),
    // colors: types.union(types.undefined, types.array(types.late((): any => ColorFieldModel))),
    // copyright: types.union(types.undefined, types.null, types.string),
    // customData: types.union(types.undefined, types.frozen()),
    // exifInfo: types.union(types.undefined, types.frozen()),
    // filename: types.union(types.undefined, types.string),
    // focalPoint: types.union(types.undefined, types.null, types.late((): any => FocalPointModel)),
    // format: types.union(types.undefined, types.string),
    height: types.union(types.undefined, types.null, types.frozen()),
    // id: types.union(types.undefined, types.frozen()),
    // md5: types.union(types.undefined, types.string),
    // mimeType: types.union(types.undefined, types.string),
    // notes: types.union(types.undefined, types.null, types.string),
    // responsiveImage: types.union(types.undefined, types.null, types.late((): any => ResponsiveImageModel)),
    // size: types.union(types.undefined, types.frozen()),
    // smartTags: types.union(types.undefined, types.array(types.string)),
    // tags: types.union(types.undefined, types.array(types.string)),
    title: types.union(types.undefined, types.null, types.string),
    url: types.union(types.undefined, types.string),
    // video: types.union(types.undefined, types.null, types.late((): any => UploadVideoFieldModel)),
    width: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FileFieldModelSelector extends QueryBuilder {
  get _createdAt() { return this.__attr(`_createdAt`) }
  get _updatedAt() { return this.__attr(`_updatedAt`) }
  get alt() { return this.__attr(`alt`) }
  get author() { return this.__attr(`author`) }
  get basename() { return this.__attr(`basename`) }
  get blurUpThumb() { return this.__attr(`blurUpThumb`) }
  get blurhash() { return this.__attr(`blurhash`) }
  get copyright() { return this.__attr(`copyright`) }
  get customData() { return this.__attr(`customData`) }
  get exifInfo() { return this.__attr(`exifInfo`) }
  get filename() { return this.__attr(`filename`) }
  get format() { return this.__attr(`format`) }
  get height() { return this.__attr(`height`) }
  get id() { return this.__attr(`id`) }
  get md5() { return this.__attr(`md5`) }
  get mimeType() { return this.__attr(`mimeType`) }
  get notes() { return this.__attr(`notes`) }
  get size() { return this.__attr(`size`) }
  get smartTags() { return this.__attr(`smartTags`) }
  get tags() { return this.__attr(`tags`) }
  get title() { return this.__attr(`title`) }
  get url() { return this.__attr(`url`) }
  get width() { return this.__attr(`width`) }
  colors(builder: string | ColorFieldModelSelector | ((selector: ColorFieldModelSelector) => ColorFieldModelSelector) | undefined) { return this.__child(`colors`, ColorFieldModelSelector, builder) }
  focalPoint(builder: string | FocalPointModelSelector | ((selector: FocalPointModelSelector) => FocalPointModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], locale?: (SiteLocale | null) }) { return this.__child(`focalPoint`+ (args ? '('+['fallbackLocales', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), FocalPointModelSelector, builder) }
  responsiveImage(builder: string | ResponsiveImageModelSelector | ((selector: ResponsiveImageModelSelector) => ResponsiveImageModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], imgixParams?: (ImgixParams | null), locale?: (SiteLocale | null), sizes?: (string | null) }) { return this.__child(`responsiveImage`+ (args ? '('+['fallbackLocales', 'imgixParams', 'locale', 'sizes'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ResponsiveImageModelSelector, builder) }
  video(builder: string | UploadVideoFieldModelSelector | ((selector: UploadVideoFieldModelSelector) => UploadVideoFieldModelSelector) | undefined) { return this.__child(`video`, UploadVideoFieldModelSelector, builder) }
}
export function selectFromFileField() {
  return new FileFieldModelSelector()
}

export const fileFieldModelPrimitives = selectFromFileField()._createdAt._updatedAt.alt.author.basename.blurUpThumb.blurhash.copyright.customData.exifInfo.filename.format.height.md5.mimeType.notes.size.smartTags.tags.title.url.width
