// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BlogArticleModelContentFieldModel, BlogArticleModelContentFieldModelType } from "./BlogArticleModelContentFieldModel"
import { BlogArticleModelContentFieldModelSelector } from "./BlogArticleModelContentFieldModel.base"
import { BlogCategoryRecordModel, BlogCategoryRecordModelType } from "./BlogCategoryRecordModel"
import { BlogCategoryRecordModelSelector } from "./BlogCategoryRecordModel.base"
import { FileFieldModel, FileFieldModelType } from "./FileFieldModel"
import { FileFieldModelSelector } from "./FileFieldModel.base"
import { ItemStatusEnumType } from "./ItemStatusEnum"
import { SiteLocale } from "./SiteLocaleEnum"
import { TagModel, TagModelType } from "./TagModel"
import { TagModelSelector } from "./TagModel.base"
import { RootStoreType } from "./index"


/**
 * BlogArticleRecordBase
 * auto generated base class for the model BlogArticleRecordModel.
 *
 * Record of type Blog Article (blog_article)
 */
export const BlogArticleRecordModelBase = ModelBase
  .named('BlogArticleRecord')
  .props({
    __typename: types.optional(types.literal("BlogArticleRecord"), "BlogArticleRecord"),
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
    author: types.union(types.undefined, types.null, types.string),
    authorByline: types.union(types.undefined, types.null, types.string),
    authorImage: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    category: types.union(types.undefined, types.null, types.late((): any => BlogCategoryRecordModel)),
    content: types.union(types.undefined, types.null, types.late((): any => BlogArticleModelContentFieldModel)),
    createdAt: types.union(types.undefined, types.frozen()),
    heroImage: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    id: types.union(types.undefined, types.frozen()),
    ogImage: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    seoDescription: types.union(types.undefined, types.null, types.string),
    seoTitle: types.union(types.undefined, types.null, types.string),
    slug: types.union(types.undefined, types.null, types.string),
    summary: types.union(types.undefined, types.null, types.string),
    title: types.union(types.undefined, types.null, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class BlogArticleRecordModelSelector extends QueryBuilder {
  get _createdAt() { return this.__attr(`_createdAt`) }
  get _firstPublishedAt() { return this.__attr(`_firstPublishedAt`) }
  get _isValid() { return this.__attr(`_isValid`) }
  get _modelApiKey() { return this.__attr(`_modelApiKey`) }
  get _publicationScheduledAt() { return this.__attr(`_publicationScheduledAt`) }
  get _publishedAt() { return this.__attr(`_publishedAt`) }
  get _status() { return this.__attr(`_status`) }
  get _unpublishingScheduledAt() { return this.__attr(`_unpublishingScheduledAt`) }
  get _updatedAt() { return this.__attr(`_updatedAt`) }
  get author() { return this.__attr(`author`) }
  get authorByline() { return this.__attr(`authorByline`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get id() { return this.__attr(`id`) }
  get seoDescription() { return this.__attr(`seoDescription`) }
  get seoTitle() { return this.__attr(`seoTitle`) }
  get slug() { return this.__attr(`slug`) }
  get summary() { return this.__attr(`summary`) }
  get title() { return this.__attr(`title`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  _seoMetaTags(builder: string | TagModelSelector | ((selector: TagModelSelector) => TagModelSelector) | undefined, args?: { locale?: (SiteLocale | null) }) { return this.__child(`_seoMetaTags`+ (args ? '('+['locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), TagModelSelector, builder) }
  authorImage(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`authorImage`, FileFieldModelSelector, builder) }
  category(builder: string | BlogCategoryRecordModelSelector | ((selector: BlogCategoryRecordModelSelector) => BlogCategoryRecordModelSelector) | undefined) { return this.__child(`category`, BlogCategoryRecordModelSelector, builder) }
  content(builder: string | BlogArticleModelContentFieldModelSelector | ((selector: BlogArticleModelContentFieldModelSelector) => BlogArticleModelContentFieldModelSelector) | undefined) { return this.__child(`content`, BlogArticleModelContentFieldModelSelector, builder) }
  heroImage(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`heroImage`, FileFieldModelSelector, builder) }
  ogImage(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`ogImage`, FileFieldModelSelector, builder) }
}
export function selectFromBlogArticleRecord() {
  return new BlogArticleRecordModelSelector()
}

export const blogArticleRecordModelPrimitives = selectFromBlogArticleRecord()._createdAt._firstPublishedAt._isValid._modelApiKey._publicationScheduledAt._publishedAt._status._unpublishingScheduledAt._updatedAt.author.authorByline.createdAt.seoDescription.seoTitle.slug.summary.title.updatedAt
