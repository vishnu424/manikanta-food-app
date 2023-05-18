// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ItemStatusEnumType } from "./ItemStatusEnum"
import { ProductCategoryCardRecordModel, ProductCategoryCardRecordModelType } from "./ProductCategoryCardRecordModel"
import { ProductCategoryCardRecordModelSelector } from "./ProductCategoryCardRecordModel.base"
import { SiteLocale } from "./SiteLocaleEnum"
import { TagModel, TagModelType } from "./TagModel"
import { TagModelSelector } from "./TagModel.base"
import { RootStoreType } from "./index"


/**
 * ProductCategorySectionRecordBase
 * auto generated base class for the model ProductCategorySectionRecordModel.
 *
 * Block of type Product Category Section (product_category_section)
 */
export const ProductCategorySectionRecordModelBase = ModelBase
  .named('ProductCategorySectionRecord')
  .props({
    __typename: types.optional(types.literal("ProductCategorySectionRecord"), "ProductCategorySectionRecord"),
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
    buttonType: types.union(types.undefined, types.null, types.string),
    cards: types.union(types.undefined, types.array(types.late((): any => ProductCategoryCardRecordModel))),
    createdAt: types.union(types.undefined, types.frozen()),
    id: types.union(types.undefined, types.frozen()),
    title: types.union(types.undefined, types.null, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ProductCategorySectionRecordModelSelector extends QueryBuilder {
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
  get buttonType() { return this.__attr(`buttonType`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get id() { return this.__attr(`id`) }
  get title() { return this.__attr(`title`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  _seoMetaTags(builder: string | TagModelSelector | ((selector: TagModelSelector) => TagModelSelector) | undefined, args?: { locale?: (SiteLocale | null) }) { return this.__child(`_seoMetaTags`+ (args ? '('+['locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), TagModelSelector, builder) }
  cards(builder: string | ProductCategoryCardRecordModelSelector | ((selector: ProductCategoryCardRecordModelSelector) => ProductCategoryCardRecordModelSelector) | undefined) { return this.__child(`cards`, ProductCategoryCardRecordModelSelector, builder) }
}
export function selectFromProductCategorySectionRecord() {
  return new ProductCategorySectionRecordModelSelector()
}

export const productCategorySectionRecordModelPrimitives = selectFromProductCategorySectionRecord()._createdAt._firstPublishedAt._isValid._modelApiKey._publicationScheduledAt._publishedAt._status._unpublishingScheduledAt._updatedAt.buttonLink.buttonText.buttonType.createdAt.title.updatedAt
