// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FileFieldModel, FileFieldModelType } from "./FileFieldModel"
import { FileFieldModelSelector } from "./FileFieldModel.base"
import { ItemStatusEnumType } from "./ItemStatusEnum"
import { ProductCategoryRecordModel, ProductCategoryRecordModelType } from "./ProductCategoryRecordModel"
import { ProductCategoryRecordModelSelector } from "./ProductCategoryRecordModel.base"
import { ProductDietaryTagRecordModel, ProductDietaryTagRecordModelType } from "./ProductDietaryTagRecordModel"
import { ProductDietaryTagRecordModelSelector } from "./ProductDietaryTagRecordModel.base"
import { ProductInstructionRecordModel, ProductInstructionRecordModelType } from "./ProductInstructionRecordModel"
import { ProductInstructionRecordModelSelector } from "./ProductInstructionRecordModel.base"
import { ProductModelDescriptionFieldModel, ProductModelDescriptionFieldModelType } from "./ProductModelDescriptionFieldModel"
import { ProductModelDescriptionFieldModelSelector } from "./ProductModelDescriptionFieldModel.base"
import { ProductPrimaryTagRecordModel, ProductPrimaryTagRecordModelType } from "./ProductPrimaryTagRecordModel"
import { ProductPrimaryTagRecordModelSelector } from "./ProductPrimaryTagRecordModel.base"
import { ProductRecordModel, ProductRecordModelType } from "./ProductRecordModel"
import { ProductSecondaryTagRecordModel, ProductSecondaryTagRecordModelType } from "./ProductSecondaryTagRecordModel"
import { ProductSecondaryTagRecordModelSelector } from "./ProductSecondaryTagRecordModel.base"
import { ProductSubcategoryRecordModel, ProductSubcategoryRecordModelType } from "./ProductSubcategoryRecordModel"
import { ProductSubcategoryRecordModelSelector } from "./ProductSubcategoryRecordModel.base"
import { ProductTagRecordModel, ProductTagRecordModelType } from "./ProductTagRecordModel"
import { ProductTagRecordModelSelector } from "./ProductTagRecordModel.base"
import { SiteLocale } from "./SiteLocaleEnum"
import { TagModel, TagModelType } from "./TagModel"
import { TagModelSelector } from "./TagModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  replacementProduct: ProductRecordModelType;
  subProducts: IObservableArray<ProductRecordModelType>;
}

/**
 * ProductRecordBase
 * auto generated base class for the model ProductRecordModel.
 *
 * Record of type Product (product)
 */
export const ProductRecordModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ProductRecord')
  .props({
    __typename: types.optional(types.literal("ProductRecord"), "ProductRecord"),
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
    description: types.union(types.undefined, types.null, types.late((): any => ProductModelDescriptionFieldModel)),
    dietaryTags: types.union(types.undefined, types.array(types.late((): any => ProductDietaryTagRecordModel))),
    discontinuedAt: types.union(types.undefined, types.null, types.frozen()),
    displayCategory: types.union(types.undefined, types.null, types.late((): any => ProductCategoryRecordModel)),
    displayName: types.union(types.undefined, types.null, types.string),
    displayPageImages: types.union(types.undefined, types.array(types.late((): any => FileFieldModel))),
    displaySubcategory: types.union(types.undefined, types.array(types.late((): any => ProductSubcategoryRecordModel))),
    grossPrice: types.union(types.undefined, types.null, types.frozen()),
    id: types.union(types.undefined, types.frozen()),
    liveAt: types.union(types.undefined, types.null, types.frozen()),
    netPrice: types.union(types.undefined, types.null, types.frozen()),
    newTagEndDate: types.union(types.undefined, types.null, types.frozen()),
    newTagStartDate: types.union(types.undefined, types.null, types.frozen()),
    primaryDisplayTag: types.union(types.undefined, types.null, types.late((): any => ProductPrimaryTagRecordModel)),
    productInstruction: types.union(types.undefined, types.null, types.late((): any => ProductInstructionRecordModel)),
    productStatus: types.union(types.undefined, types.null, types.string),
    promotionTotal: types.union(types.undefined, types.null, types.frozen()),
    replacementProduct: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProductRecordModel))),
    secondaryDisplayTag: types.union(types.undefined, types.null, types.late((): any => ProductSecondaryTagRecordModel)),
    sku: types.union(types.undefined, types.null, types.string),
    subProducts: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => ProductRecordModel)))),
    tags: types.union(types.undefined, types.array(types.late((): any => ProductTagRecordModel))),
    tileImage: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ProductRecordModelSelector extends QueryBuilder {
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
  get discontinuedAt() { return this.__attr(`discontinuedAt`) }
  get displayName() { return this.__attr(`displayName`) }
  get grossPrice() { return this.__attr(`grossPrice`) }
  get id() { return this.__attr(`id`) }
  get liveAt() { return this.__attr(`liveAt`) }
  get netPrice() { return this.__attr(`netPrice`) }
  get newTagEndDate() { return this.__attr(`newTagEndDate`) }
  get newTagStartDate() { return this.__attr(`newTagStartDate`) }
  get productStatus() { return this.__attr(`productStatus`) }
  get promotionTotal() { return this.__attr(`promotionTotal`) }
  get sku() { return this.__attr(`sku`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  _seoMetaTags(builder: string | TagModelSelector | ((selector: TagModelSelector) => TagModelSelector) | undefined, args?: { locale?: (SiteLocale | null) }) { return this.__child(`_seoMetaTags`+ (args ? '('+['locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), TagModelSelector, builder) }
  description(builder: string | ProductModelDescriptionFieldModelSelector | ((selector: ProductModelDescriptionFieldModelSelector) => ProductModelDescriptionFieldModelSelector) | undefined) { return this.__child(`description`, ProductModelDescriptionFieldModelSelector, builder) }
  dietaryTags(builder: string | ProductDietaryTagRecordModelSelector | ((selector: ProductDietaryTagRecordModelSelector) => ProductDietaryTagRecordModelSelector) | undefined) { return this.__child(`dietaryTags`, ProductDietaryTagRecordModelSelector, builder) }
  displayCategory(builder: string | ProductCategoryRecordModelSelector | ((selector: ProductCategoryRecordModelSelector) => ProductCategoryRecordModelSelector) | undefined) { return this.__child(`displayCategory`, ProductCategoryRecordModelSelector, builder) }
  displayPageImages(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`displayPageImages`, FileFieldModelSelector, builder) }
  displaySubcategory(builder: string | ProductSubcategoryRecordModelSelector | ((selector: ProductSubcategoryRecordModelSelector) => ProductSubcategoryRecordModelSelector) | undefined) { return this.__child(`displaySubcategory`, ProductSubcategoryRecordModelSelector, builder) }
  primaryDisplayTag(builder: string | ProductPrimaryTagRecordModelSelector | ((selector: ProductPrimaryTagRecordModelSelector) => ProductPrimaryTagRecordModelSelector) | undefined) { return this.__child(`primaryDisplayTag`, ProductPrimaryTagRecordModelSelector, builder) }
  productInstruction(builder: string | ProductInstructionRecordModelSelector | ((selector: ProductInstructionRecordModelSelector) => ProductInstructionRecordModelSelector) | undefined) { return this.__child(`productInstruction`, ProductInstructionRecordModelSelector, builder) }
  replacementProduct(builder: string | ProductRecordModelSelector | ((selector: ProductRecordModelSelector) => ProductRecordModelSelector) | undefined) { return this.__child(`replacementProduct`, ProductRecordModelSelector, builder) }
  secondaryDisplayTag(builder: string | ProductSecondaryTagRecordModelSelector | ((selector: ProductSecondaryTagRecordModelSelector) => ProductSecondaryTagRecordModelSelector) | undefined) { return this.__child(`secondaryDisplayTag`, ProductSecondaryTagRecordModelSelector, builder) }
  subProducts(builder: string | ProductRecordModelSelector | ((selector: ProductRecordModelSelector) => ProductRecordModelSelector) | undefined) { return this.__child(`subProducts`, ProductRecordModelSelector, builder) }
  tags(builder: string | ProductTagRecordModelSelector | ((selector: ProductTagRecordModelSelector) => ProductTagRecordModelSelector) | undefined) { return this.__child(`tags`, ProductTagRecordModelSelector, builder) }
  tileImage(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`tileImage`, FileFieldModelSelector, builder) }
}
export function selectFromProductRecord() {
  return new ProductRecordModelSelector()
}

export const productRecordModelPrimitives = selectFromProductRecord()._createdAt._firstPublishedAt._isValid._modelApiKey._publicationScheduledAt._publishedAt._status._unpublishingScheduledAt._updatedAt.createdAt.discontinuedAt.displayName.grossPrice.liveAt.netPrice.newTagEndDate.newTagStartDate.productStatus.promotionTotal.sku.updatedAt
