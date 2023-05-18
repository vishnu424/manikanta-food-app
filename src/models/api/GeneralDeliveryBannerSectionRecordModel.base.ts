// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FileFieldModel, FileFieldModelType } from "./FileFieldModel"
import { FileFieldModelSelector } from "./FileFieldModel.base"
import { ItemStatusEnumType } from "./ItemStatusEnum"
import { SiteLocale } from "./SiteLocaleEnum"
import { TagModel, TagModelType } from "./TagModel"
import { TagModelSelector } from "./TagModel.base"
import { RootStoreType } from "./index"


/**
 * GeneralDeliveryBannerSectionRecordBase
 * auto generated base class for the model GeneralDeliveryBannerSectionRecordModel.
 *
 * Block of type General Delivery Banner Section (general_delivery_banner_section)
 */
export const GeneralDeliveryBannerSectionRecordModelBase = ModelBase
  .named('GeneralDeliveryBannerSectionRecord')
  .props({
    __typename: types.optional(types.literal("GeneralDeliveryBannerSectionRecord"), "GeneralDeliveryBannerSectionRecord"),
    _createdAt: types.union(types.undefined, types.frozen()),
    _firstPublishedAt: types.union(types.undefined, types.null, types.frozen()),
    _isValid: types.union(types.undefined, types.frozen()),
    _modelApiKey: types.union(types.undefined, types.string),
    _publicationScheduledAt: types.union(types.undefined, types.null, types.frozen()),
    _publishedAt: types.union(types.undefined, types.null, types.frozen()),
    /** SEO meta tags */
    _seoMetaTags: types.union(types.undefined, types.array(types.late((): any => TagModel))),
    _status: types.union(types.undefined, ItemStatusEnumType),
    _unpublishingScheduledAt: types.union(types.undefined, types.null, types.frozen()),
    _updatedAt: types.union(types.undefined, types.frozen()),
    buttonLink: types.union(types.undefined, types.null, types.string),
    buttonText: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    desktopBannerImage: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    icon: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    id: types.union(types.undefined, types.frozen()),
    mobileBannerImage: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class GeneralDeliveryBannerSectionRecordModelSelector extends QueryBuilder {
  get _createdAt() { return this.__attr(`_createdAt`) }
  get _firstPublishedAt() { return this.__attr(`_firstPublishedAt`) }
  get _isValid() { return this.__attr(`_isValid`) }
  get _modelApiKey() { return this.__attr(`_modelApiKey`) }
  get _publicationScheduledAt() { return this.__attr(`_publicationScheduledAt`) }
  get _publishedAt() { return this.__attr(`_publishedAt`) }
  get _status() { return this.__attr(`_status`) }
  get _unpublishingScheduledAt() { return this.__attr(`_unpublishingScheduledAt`) }
  get _updatedAt() { return this.__attr(`_updatedAt`) }
  get buttonLink() { return this.__attr(`buttonLink`) }
  get buttonText() { return this.__attr(`buttonText`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get id() { return this.__attr(`id`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  _seoMetaTags(builder: string | TagModelSelector | ((selector: TagModelSelector) => TagModelSelector) | undefined, args?: { locale?: (SiteLocale | null) }) { return this.__child(`_seoMetaTags`+ (args ? '('+['locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), TagModelSelector, builder) }
  desktopBannerImage(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`desktopBannerImage`, FileFieldModelSelector, builder) }
  icon(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`icon`, FileFieldModelSelector, builder) }
  mobileBannerImage(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`mobileBannerImage`, FileFieldModelSelector, builder) }
}
export function selectFromGeneralDeliveryBannerSectionRecord() {
  return new GeneralDeliveryBannerSectionRecordModelSelector()
}

export const generalDeliveryBannerSectionRecordModelPrimitives = selectFromGeneralDeliveryBannerSectionRecord()._createdAt._firstPublishedAt._isValid._modelApiKey._publicationScheduledAt._publishedAt._status._unpublishingScheduledAt._updatedAt.buttonLink.buttonText.createdAt.updatedAt
