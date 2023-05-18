// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FooterColumnModelFooterSectionFieldModelSelector } from "./FooterColumnModelFooterSectionFieldModelSelector"
import { FooterLinkSectionRecordModel, FooterLinkSectionRecordModelType } from "./FooterLinkSectionRecordModel"
import { FooterLinkSectionRecordModelSelector } from "./FooterLinkSectionRecordModel.base"
import { FooterTextSectionRecordModel, FooterTextSectionRecordModelType } from "./FooterTextSectionRecordModel"
import { FooterTextSectionRecordModelSelector } from "./FooterTextSectionRecordModel.base"
import { ItemStatusEnumType } from "./ItemStatusEnum"
import { SiteLocale } from "./SiteLocaleEnum"
import { TagModel, TagModelType } from "./TagModel"
import { TagModelSelector } from "./TagModel.base"
import { RootStoreType } from "./index"


/**
 * FooterColumnRecordBase
 * auto generated base class for the model FooterColumnRecordModel.
 *
 * Block of type Footer Column (footer_column)
 */
export const FooterColumnRecordModelBase = ModelBase
  .named('FooterColumnRecord')
  .props({
    __typename: types.optional(types.literal("FooterColumnRecord"), "FooterColumnRecord"),
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
    footerSection: types.union(types.undefined, types.array(types.union(types.late((): any => FooterLinkSectionRecordModel), types.late((): any => FooterTextSectionRecordModel)))),
    id: types.union(types.undefined, types.frozen()),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FooterColumnRecordModelSelector extends QueryBuilder {
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
  get id() { return this.__attr(`id`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  _seoMetaTags(builder: string | TagModelSelector | ((selector: TagModelSelector) => TagModelSelector) | undefined, args?: { locale?: (SiteLocale | null) }) { return this.__child(`_seoMetaTags`+ (args ? '('+['locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), TagModelSelector, builder) }
  footerSection(builder: string | FooterColumnModelFooterSectionFieldModelSelector | ((selector: FooterColumnModelFooterSectionFieldModelSelector) => FooterColumnModelFooterSectionFieldModelSelector) | undefined) { return this.__child(`footerSection`, FooterColumnModelFooterSectionFieldModelSelector, builder) }
}
export function selectFromFooterColumnRecord() {
  return new FooterColumnRecordModelSelector()
}

export const footerColumnRecordModelPrimitives = selectFromFooterColumnRecord()._createdAt._firstPublishedAt._isValid._modelApiKey._publicationScheduledAt._publishedAt._status._unpublishingScheduledAt._updatedAt.createdAt.updatedAt
