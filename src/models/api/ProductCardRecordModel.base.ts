// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ItemStatusEnumType } from "./ItemStatusEnum"
import { ProductRecordModel, ProductRecordModelType } from "./ProductRecordModel"
import { ProductRecordModelSelector } from "./ProductRecordModel.base"
import { SiteLocale } from "./SiteLocaleEnum"
import { TagModel, TagModelType } from "./TagModel"
import { TagModelSelector } from "./TagModel.base"
import { RootStoreType } from "./index"


/**
 * ProductCardRecordBase
 * auto generated base class for the model ProductCardRecordModel.
 *
 * Block of type Product Card (product_card)
 */
export const ProductCardRecordModelBase = ModelBase
  .named('ProductCardRecord')
  .props({
    __typename: types.optional(types.literal("ProductCardRecord"), "ProductCardRecord"),
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
    id: types.union(types.undefined, types.frozen()),
    primaryButtonLink: types.union(types.undefined, types.null, types.string),
    primaryButtonText: types.union(types.undefined, types.null, types.string),
    product: types.union(types.undefined, types.null, types.late((): any => ProductRecordModel)),
    secondaryButtonLink: types.union(types.undefined, types.null, types.string),
    secondaryButtonText: types.union(types.undefined, types.null, types.string),
    shortDescription: types.union(types.undefined, types.null, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ProductCardRecordModelSelector extends QueryBuilder {
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
  get primaryButtonLink() { return this.__attr(`primaryButtonLink`) }
  get primaryButtonText() { return this.__attr(`primaryButtonText`) }
  get secondaryButtonLink() { return this.__attr(`secondaryButtonLink`) }
  get secondaryButtonText() { return this.__attr(`secondaryButtonText`) }
  get shortDescription() { return this.__attr(`shortDescription`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  _seoMetaTags(builder: string | TagModelSelector | ((selector: TagModelSelector) => TagModelSelector) | undefined, args?: { locale?: (SiteLocale | null) }) { return this.__child(`_seoMetaTags`+ (args ? '('+['locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), TagModelSelector, builder) }
  product(builder: string | ProductRecordModelSelector | ((selector: ProductRecordModelSelector) => ProductRecordModelSelector) | undefined) { return this.__child(`product`, ProductRecordModelSelector, builder) }
}
export function selectFromProductCardRecord() {
  return new ProductCardRecordModelSelector()
}

export const productCardRecordModelPrimitives = selectFromProductCardRecord()._createdAt._firstPublishedAt._isValid._modelApiKey._publicationScheduledAt._publishedAt._status._unpublishingScheduledAt._updatedAt.createdAt.primaryButtonLink.primaryButtonText.secondaryButtonLink.secondaryButtonText.shortDescription.updatedAt
