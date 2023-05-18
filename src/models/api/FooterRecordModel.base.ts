// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FileFieldModel, FileFieldModelType } from "./FileFieldModel"
import { FileFieldModelSelector } from "./FileFieldModel.base"
import { FooterColumnRecordModel, FooterColumnRecordModelType } from "./FooterColumnRecordModel"
import { FooterColumnRecordModelSelector } from "./FooterColumnRecordModel.base"
import { ItemStatusEnumType } from "./ItemStatusEnum"
import { SiteLocale } from "./SiteLocaleEnum"
import { TagModel, TagModelType } from "./TagModel"
import { TagModelSelector } from "./TagModel.base"
import { RootStoreType } from "./index"


/**
 * FooterRecordBase
 * auto generated base class for the model FooterRecordModel.
 *
 * Record of type Footer (footer)
 */
export const FooterRecordModelBase = ModelBase
  .named('FooterRecord')
  .props({
    __typename: types.optional(types.literal("FooterRecord"), "FooterRecord"),
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
    addressInfo: types.union(types.undefined, types.null, types.string),
    brandLogo: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    copyRight: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    footerSections: types.union(types.undefined, types.array(types.late((): any => FooterColumnRecordModel))),
    id: types.union(types.undefined, types.frozen()),
    paymentIcons: types.union(types.undefined, types.array(types.late((): any => FileFieldModel))),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FooterRecordModelSelector extends QueryBuilder {
  get _createdAt() { return this.__attr(`_createdAt`) }
  get _firstPublishedAt() { return this.__attr(`_firstPublishedAt`) }
  get _isValid() { return this.__attr(`_isValid`) }
  get _modelApiKey() { return this.__attr(`_modelApiKey`) }
  get _publicationScheduledAt() { return this.__attr(`_publicationScheduledAt`) }
  get _publishedAt() { return this.__attr(`_publishedAt`) }
  get _status() { return this.__attr(`_status`) }
  get _unpublishingScheduledAt() { return this.__attr(`_unpublishingScheduledAt`) }
  get _updatedAt() { return this.__attr(`_updatedAt`) }
  get addressInfo() { return this.__attr(`addressInfo`) }
  get copyRight() { return this.__attr(`copyRight`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get id() { return this.__attr(`id`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  _seoMetaTags(builder: string | TagModelSelector | ((selector: TagModelSelector) => TagModelSelector) | undefined, args?: { locale?: (SiteLocale | null) }) { return this.__child(`_seoMetaTags`+ (args ? '('+['locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), TagModelSelector, builder) }
  brandLogo(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`brandLogo`, FileFieldModelSelector, builder) }
  footerSections(builder: string | FooterColumnRecordModelSelector | ((selector: FooterColumnRecordModelSelector) => FooterColumnRecordModelSelector) | undefined) { return this.__child(`footerSections`, FooterColumnRecordModelSelector, builder) }
  paymentIcons(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`paymentIcons`, FileFieldModelSelector, builder) }
}
export function selectFromFooterRecord() {
  return new FooterRecordModelSelector()
}

export const footerRecordModelPrimitives = selectFromFooterRecord()._createdAt._firstPublishedAt._isValid._modelApiKey._publicationScheduledAt._publishedAt._status._unpublishingScheduledAt._updatedAt.addressInfo.copyRight.createdAt.updatedAt
