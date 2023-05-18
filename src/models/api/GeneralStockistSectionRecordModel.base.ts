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
 * GeneralStockistSectionRecordBase
 * auto generated base class for the model GeneralStockistSectionRecordModel.
 *
 * Block of type General Stockist Section (general_stockist_section)
 */
export const GeneralStockistSectionRecordModelBase = ModelBase
  .named('GeneralStockistSectionRecord')
  .props({
    __typename: types.optional(types.literal("GeneralStockistSectionRecord"), "GeneralStockistSectionRecord"),
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
    createdAt: types.union(types.undefined, types.frozen()),
    description: types.union(types.undefined, types.null, types.string),
    desktopImage: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    id: types.union(types.undefined, types.frozen()),
    mobileImage: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    primaryButtonLink: types.union(types.undefined, types.null, types.string),
    primaryButtonText: types.union(types.undefined, types.null, types.string),
    secondaryButtonLink: types.union(types.undefined, types.null, types.string),
    secondaryButtonText: types.union(types.undefined, types.null, types.string),
    stockistDesktopImage: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    stockistMobileImage: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    title: types.union(types.undefined, types.null, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class GeneralStockistSectionRecordModelSelector extends QueryBuilder {
  get _createdAt() { return this.__attr(`_createdAt`) }
  get _firstPublishedAt() { return this.__attr(`_firstPublishedAt`) }
  get _isValid() { return this.__attr(`_isValid`) }
  get _modelApiKey() { return this.__attr(`_modelApiKey`) }
  get _publicationScheduledAt() { return this.__attr(`_publicationScheduledAt`) }
  get _publishedAt() { return this.__attr(`_publishedAt`) }
  get _status() { return this.__attr(`_status`) }
  get _unpublishingScheduledAt() { return this.__attr(`_unpublishingScheduledAt`) }
  get _updatedAt() { return this.__attr(`_updatedAt`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get primaryButtonLink() { return this.__attr(`primaryButtonLink`) }
  get primaryButtonText() { return this.__attr(`primaryButtonText`) }
  get secondaryButtonLink() { return this.__attr(`secondaryButtonLink`) }
  get secondaryButtonText() { return this.__attr(`secondaryButtonText`) }
  get title() { return this.__attr(`title`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  _seoMetaTags(builder: string | TagModelSelector | ((selector: TagModelSelector) => TagModelSelector) | undefined, args?: { locale?: (SiteLocale | null) }) { return this.__child(`_seoMetaTags`+ (args ? '('+['locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), TagModelSelector, builder) }
  desktopImage(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`desktopImage`, FileFieldModelSelector, builder) }
  mobileImage(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`mobileImage`, FileFieldModelSelector, builder) }
  stockistDesktopImage(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`stockistDesktopImage`, FileFieldModelSelector, builder) }
  stockistMobileImage(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`stockistMobileImage`, FileFieldModelSelector, builder) }
}
export function selectFromGeneralStockistSectionRecord() {
  return new GeneralStockistSectionRecordModelSelector()
}

export const generalStockistSectionRecordModelPrimitives = selectFromGeneralStockistSectionRecord()._createdAt._firstPublishedAt._isValid._modelApiKey._publicationScheduledAt._publishedAt._status._unpublishingScheduledAt._updatedAt.createdAt.description.primaryButtonLink.primaryButtonText.secondaryButtonLink.secondaryButtonText.title.updatedAt
