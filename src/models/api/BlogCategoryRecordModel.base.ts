// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BlogArticleRecordModel, BlogArticleRecordModelType } from "./BlogArticleRecordModel"
import { BlogArticleRecordModelSelector } from "./BlogArticleRecordModel.base"
import { FileFieldModel, FileFieldModelType } from "./FileFieldModel"
import { FileFieldModelSelector } from "./FileFieldModel.base"
import { ItemStatusEnumType } from "./ItemStatusEnum"
import { SiteLocale } from "./SiteLocaleEnum"
import { TagModel, TagModelType } from "./TagModel"
import { TagModelSelector } from "./TagModel.base"
import { RootStoreType } from "./index"


/**
 * BlogCategoryRecordBase
 * auto generated base class for the model BlogCategoryRecordModel.
 *
 * Record of type Blog Category (blog_category)
 */
export const BlogCategoryRecordModelBase = ModelBase
  .named('BlogCategoryRecord')
  .props({
    __typename: types.optional(types.literal("BlogCategoryRecord"), "BlogCategoryRecord"),
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
    highlightedArticles: types.union(types.undefined, types.array(types.late((): any => BlogArticleRecordModel))),
    id: types.union(types.undefined, types.frozen()),
    name: types.union(types.undefined, types.null, types.string),
    ogImage: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    position: types.union(types.undefined, types.null, types.frozen()),
    seoDescription: types.union(types.undefined, types.null, types.string),
    seoTitle: types.union(types.undefined, types.null, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class BlogCategoryRecordModelSelector extends QueryBuilder {
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
  get name() { return this.__attr(`name`) }
  get position() { return this.__attr(`position`) }
  get seoDescription() { return this.__attr(`seoDescription`) }
  get seoTitle() { return this.__attr(`seoTitle`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  _seoMetaTags(builder: string | TagModelSelector | ((selector: TagModelSelector) => TagModelSelector) | undefined, args?: { locale?: (SiteLocale | null) }) { return this.__child(`_seoMetaTags`+ (args ? '('+['locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), TagModelSelector, builder) }
  highlightedArticles(builder: string | BlogArticleRecordModelSelector | ((selector: BlogArticleRecordModelSelector) => BlogArticleRecordModelSelector) | undefined) { return this.__child(`highlightedArticles`, BlogArticleRecordModelSelector, builder) }
  ogImage(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`ogImage`, FileFieldModelSelector, builder) }
}
export function selectFromBlogCategoryRecord() {
  return new BlogCategoryRecordModelSelector()
}

export const blogCategoryRecordModelPrimitives = selectFromBlogCategoryRecord()._createdAt._firstPublishedAt._isValid._modelApiKey._publicationScheduledAt._publishedAt._status._unpublishingScheduledAt._updatedAt.createdAt.name.position.seoDescription.seoTitle.updatedAt
