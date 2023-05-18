// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { NutritionalInfoModel, NutritionalInfoModelType } from "./NutritionalInfoModel"
import { NutritionalInfoModelSelector } from "./NutritionalInfoModel.base"
import { ProductAttributeModel, ProductAttributeModelType } from "./ProductAttributeModel"
import { ProductAttributeModelSelector } from "./ProductAttributeModel.base"
import { ProductCategoryEnumType } from "./ProductCategoryEnum"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelOrderBy } from "./ProductModelOrderByEnum"
import { ProductRecordModel, ProductRecordModelType } from "./ProductRecordModel"
import { ProductRecordModelSelector } from "./ProductRecordModel.base"
import { ProductStatusEnumType } from "./ProductStatusEnum"
import { ProductSubCategoryEnumType } from "./ProductSubCategoryEnum"
import { ProductModelFilterRemoteRelRomecms } from "./RootStore.base"
import { SiteLocale } from "./SiteLocaleEnum"
import { SubProductModel, SubProductModelType } from "./SubProductModel"
import { SubProductModelSelector } from "./SubProductModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  replacementProduct: ProductModelType;
}

/**
 * ProductBase
 * auto generated base class for the model ProductModel.
 *
 * Product
 */
export const ProductModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Product')
  .props({
    __typename: types.optional(types.literal("Product"), "Product"),
    _id: types.union(types.undefined, types.string),
    attributes: types.union(types.undefined, types.array(types.late((): any => ProductAttributeModel))),
    barcode: types.union(types.undefined, types.string),
    category: types.union(types.undefined, ProductCategoryEnumType),
    cms: types.union(types.undefined, types.null, types.late((): any => ProductRecordModel)),
    cmsUpdatedAt: types.union(types.undefined, types.frozen()),
    createdAt: types.union(types.undefined, types.frozen()),
    discontinuedAt: types.union(types.undefined, types.null, types.frozen()),
    displayCategory: types.union(types.undefined, ProductCategoryEnumType),
    displaySubCategory: types.union(types.undefined, types.null, types.array(ProductSubCategoryEnumType)),
    grossPrice: types.union(types.undefined, types.number),
    hasSubProducts: types.union(types.undefined, types.boolean),
    liveAt: types.union(types.undefined, types.frozen()),
    name: types.union(types.undefined, types.string),
    netPrice: types.union(types.undefined, types.number),
    nutritionalInfo: types.union(types.undefined, types.late((): any => NutritionalInfoModel)),
    promotionTotal: types.union(types.undefined, types.number),
    ranking: types.union(types.undefined, types.number),
    replacementProduct: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProductModel))),
    shelfLifeDays: types.union(types.undefined, types.null, types.number),
    sku: types.identifier,
    status: types.union(types.undefined, ProductStatusEnumType),
    subCategory: types.union(types.undefined, types.null, types.array(ProductSubCategoryEnumType)),
    subProducts: types.union(types.undefined, types.array(types.late((): any => SubProductModel))),
    updatedAt: types.union(types.undefined, types.frozen()),
    version: types.union(types.undefined, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ProductModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get barcode() { return this.__attr(`barcode`) }
  get category() { return this.__attr(`category`) }
  get cmsUpdatedAt() { return this.__attr(`cmsUpdatedAt`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get discontinuedAt() { return this.__attr(`discontinuedAt`) }
  get displayCategory() { return this.__attr(`displayCategory`) }
  get displaySubCategory() { return this.__attr(`displaySubCategory`) }
  get grossPrice() { return this.__attr(`grossPrice`) }
  get hasSubProducts() { return this.__attr(`hasSubProducts`) }
  get liveAt() { return this.__attr(`liveAt`) }
  get name() { return this.__attr(`name`) }
  get netPrice() { return this.__attr(`netPrice`) }
  get promotionTotal() { return this.__attr(`promotionTotal`) }
  get ranking() { return this.__attr(`ranking`) }
  get shelfLifeDays() { return this.__attr(`shelfLifeDays`) }
  get sku() { return this.__attr(`sku`) }
  get status() { return this.__attr(`status`) }
  get subCategory() { return this.__attr(`subCategory`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get version() { return this.__attr(`version`) }
  attributes(builder: string | ProductAttributeModelSelector | ((selector: ProductAttributeModelSelector) => ProductAttributeModelSelector) | undefined) { return this.__child(`attributes`, ProductAttributeModelSelector, builder) }
  cms(builder: string | ProductRecordModelSelector | ((selector: ProductRecordModelSelector) => ProductRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductModelFilterRemoteRelRomecms | null), locale?: (SiteLocale | null), orderBy?: (ProductModelOrderBy | null)[] }) { return this.__child(`cms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductRecordModelSelector, builder) }
  nutritionalInfo(builder: string | NutritionalInfoModelSelector | ((selector: NutritionalInfoModelSelector) => NutritionalInfoModelSelector) | undefined) { return this.__child(`nutritionalInfo`, NutritionalInfoModelSelector, builder) }
  replacementProduct(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined) { return this.__child(`replacementProduct`, ProductModelSelector, builder) }
  subProducts(builder: string | SubProductModelSelector | ((selector: SubProductModelSelector) => SubProductModelSelector) | undefined) { return this.__child(`subProducts`, SubProductModelSelector, builder) }
}
export function selectFromProduct() {
  return new ProductModelSelector()
}

export const productModelPrimitives = selectFromProduct()._id.barcode.category.cmsUpdatedAt.createdAt.discontinuedAt.displayCategory.displaySubCategory.grossPrice.hasSubProducts.liveAt.name.netPrice.promotionTotal.ranking.shelfLifeDays.sku.status.subCategory.updatedAt.version
