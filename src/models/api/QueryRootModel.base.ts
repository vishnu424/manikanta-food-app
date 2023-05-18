// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ActiveLevels } from "./ActiveLevelsEnum"
import { AgeRanges } from "./AgeRangesEnum"
import { AppContentModel, AppContentModelType } from "./AppContentModel"
import { AppContentModelSelector } from "./AppContentModel.base"
import { BlogArticleModelOrderBy } from "./BlogArticleModelOrderByEnum"
import { BlogArticleRecordModel, BlogArticleRecordModelType } from "./BlogArticleRecordModel"
import { BlogArticleRecordModelSelector } from "./BlogArticleRecordModel.base"
import { BlogCategoryModelOrderBy } from "./BlogCategoryModelOrderByEnum"
import { BlogCategoryRecordModel, BlogCategoryRecordModelType } from "./BlogCategoryRecordModel"
import { BlogCategoryRecordModelSelector } from "./BlogCategoryRecordModel.base"
import { CartModel, CartModelType } from "./CartModel"
import { CartModelSelector } from "./CartModel.base"
import { CollectionMetadataModel, CollectionMetadataModelType } from "./CollectionMetadataModel"
import { CollectionMetadataModelSelector } from "./CollectionMetadataModel.base"
import { ContentSubType } from "./ContentSubTypeEnum"
import { ContentType } from "./ContentTypeEnum"
import { CustomerInfoModel, CustomerInfoModelType } from "./CustomerInfoModel"
import { CustomerInfoModelSelector } from "./CustomerInfoModel.base"
import { CustomerProfileOutputModel, CustomerProfileOutputModelType } from "./CustomerProfileOutputModel"
import { CustomerProfileOutputModelSelector } from "./CustomerProfileOutputModel.base"
import { DeliveryInfoLookupType } from "./DeliveryInfoLookupTypeEnum"
import { DeliveryInfoModel, DeliveryInfoModelType } from "./DeliveryInfoModel"
import { DeliveryInfoModelSelector } from "./DeliveryInfoModel.base"
import { DownloadAppModelOrderBy } from "./DownloadAppModelOrderByEnum"
import { DownloadAppRecordModel, DownloadAppRecordModelType } from "./DownloadAppRecordModel"
import { DownloadAppRecordModelSelector } from "./DownloadAppRecordModel.base"
import { DynamicMealPlanRtoModel, DynamicMealPlanRtoModelType } from "./DynamicMealPlanRtoModel"
import { DynamicMealPlanRtoModelSelector } from "./DynamicMealPlanRtoModel.base"
import { FileFieldModel, FileFieldModelType } from "./FileFieldModel"
import { FileFieldModelSelector } from "./FileFieldModel.base"
import { FilterModelOrderBy } from "./FilterModelOrderByEnum"
import { FilterRecordModel, FilterRecordModelType } from "./FilterRecordModel"
import { FilterRecordModelSelector } from "./FilterRecordModel.base"
import { FixedFemaleMealPlanRtoModel, FixedFemaleMealPlanRtoModelType } from "./FixedFemaleMealPlanRtoModel"
import { FixedFemaleMealPlanRtoModelSelector } from "./FixedFemaleMealPlanRtoModel.base"
import { FixedMaleMealPlanRtoModel, FixedMaleMealPlanRtoModelType } from "./FixedMaleMealPlanRtoModel"
import { FixedMaleMealPlanRtoModelSelector } from "./FixedMaleMealPlanRtoModel.base"
import { FooterRecordModel, FooterRecordModelType } from "./FooterRecordModel"
import { FooterRecordModelSelector } from "./FooterRecordModel.base"
import { Gender } from "./GenderEnum"
import { GeneralPageModelOrderBy } from "./GeneralPageModelOrderByEnum"
import { GeneralPageRecordModel, GeneralPageRecordModelType } from "./GeneralPageRecordModel"
import { GeneralPageRecordModelSelector } from "./GeneralPageRecordModel.base"
import { GoalBasedPlanRtoModel, GoalBasedPlanRtoModelType } from "./GoalBasedPlanRtoModel"
import { GoalBasedPlanRtoModelSelector } from "./GoalBasedPlanRtoModel.base"
import { Goal } from "./GoalEnum"
import { GoogleAuthRtoModel, GoogleAuthRtoModelType } from "./GoogleAuthRtoModel"
import { GoogleAuthRtoModelSelector } from "./GoogleAuthRtoModel.base"
import { LandingPageModelOrderBy } from "./LandingPageModelOrderByEnum"
import { LandingPageRecordModel, LandingPageRecordModelType } from "./LandingPageRecordModel"
import { LandingPageRecordModelSelector } from "./LandingPageRecordModel.base"
import { MealPlanModel, MealPlanModelType } from "./MealPlanModel"
import { MealPlanModelSelector } from "./MealPlanModel.base"
import { MealPlanModelOrderBy } from "./MealPlanModelOrderByEnum"
import { MealPlanRecordModel, MealPlanRecordModelType } from "./MealPlanRecordModel"
import { MealPlanRecordModelSelector } from "./MealPlanRecordModel.base"
import { MealPlanSubCategory } from "./MealPlanSubCategoryEnum"
import { NavbarRecordModel, NavbarRecordModelType } from "./NavbarRecordModel"
import { NavbarRecordModelSelector } from "./NavbarRecordModel.base"
import { OrderModel, OrderModelType } from "./OrderModel"
import { OrderModelSelector } from "./OrderModel.base"
import { OrderPlanModel, OrderPlanModelType } from "./OrderPlanModel"
import { OrderPlanModelSelector } from "./OrderPlanModel.base"
import { ProductCategoryModelOrderBy } from "./ProductCategoryModelOrderByEnum"
import { ProductCategoryRecordModel, ProductCategoryRecordModelType } from "./ProductCategoryRecordModel"
import { ProductCategoryRecordModelSelector } from "./ProductCategoryRecordModel.base"
import { ProductCollectionDtoModel, ProductCollectionDtoModelType } from "./ProductCollectionDtoModel"
import { ProductCollectionDtoModelSelector } from "./ProductCollectionDtoModel.base"
import { ProductDietaryTagModelOrderBy } from "./ProductDietaryTagModelOrderByEnum"
import { ProductDietaryTagRecordModel, ProductDietaryTagRecordModelType } from "./ProductDietaryTagRecordModel"
import { ProductDietaryTagRecordModelSelector } from "./ProductDietaryTagRecordModel.base"
import { ProductInstructionModelOrderBy } from "./ProductInstructionModelOrderByEnum"
import { ProductInstructionRecordModel, ProductInstructionRecordModelType } from "./ProductInstructionRecordModel"
import { ProductInstructionRecordModelSelector } from "./ProductInstructionRecordModel.base"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { ProductModelOrderBy } from "./ProductModelOrderByEnum"
import { ProductPrimaryTagModelOrderBy } from "./ProductPrimaryTagModelOrderByEnum"
import { ProductPrimaryTagRecordModel, ProductPrimaryTagRecordModelType } from "./ProductPrimaryTagRecordModel"
import { ProductPrimaryTagRecordModelSelector } from "./ProductPrimaryTagRecordModel.base"
import { ProductRecordModel, ProductRecordModelType } from "./ProductRecordModel"
import { ProductRecordModelSelector } from "./ProductRecordModel.base"
import { ProductSecondaryTagModelOrderBy } from "./ProductSecondaryTagModelOrderByEnum"
import { ProductSecondaryTagRecordModel, ProductSecondaryTagRecordModelType } from "./ProductSecondaryTagRecordModel"
import { ProductSecondaryTagRecordModelSelector } from "./ProductSecondaryTagRecordModel.base"
import { ProductSubcategoryModelOrderBy } from "./ProductSubcategoryModelOrderByEnum"
import { ProductSubcategoryRecordModel, ProductSubcategoryRecordModelType } from "./ProductSubcategoryRecordModel"
import { ProductSubcategoryRecordModelSelector } from "./ProductSubcategoryRecordModel.base"
import { ProductTagModelOrderBy } from "./ProductTagModelOrderByEnum"
import { ProductTagRecordModel, ProductTagRecordModelType } from "./ProductTagRecordModel"
import { ProductTagRecordModelSelector } from "./ProductTagRecordModel.base"
import { BlogArticleModelFilter, BlogCategoryModelFilter, DownloadAppModelFilter, FilterModelFilter, GeneralPageModelFilter, LandingPageModelFilter, MealPlanModelFilter, MealPlanSortInput, MealPlanWhereInput, OrderSortInput, OrderWhereInput, ProductCategoryModelFilter, ProductCollectionSortInput, ProductCollectionWhereInput, ProductDietaryTagModelFilter, ProductInstructionModelFilter, ProductModelFilter, ProductPrimaryTagModelFilter, ProductSecondaryTagModelFilter, ProductSortInput, ProductSubcategoryModelFilter, ProductTagModelFilter, ProductWhereInput, SortMenuModelFilter, SvgTestModelFilter, UploadFilter, WeeklyPlanSortInput, WeeklyPlanWhereInput, WlpMealPlanSortInput } from "./RootStore.base"
import { SiteLocale } from "./SiteLocaleEnum"
import { SiteModel, SiteModelType } from "./SiteModel"
import { SiteModelSelector } from "./SiteModel.base"
import { SortMenuModelOrderBy } from "./SortMenuModelOrderByEnum"
import { SortMenuRecordModel, SortMenuRecordModelType } from "./SortMenuRecordModel"
import { SortMenuRecordModelSelector } from "./SortMenuRecordModel.base"
import { SubscriptionEntityModel, SubscriptionEntityModelType } from "./SubscriptionEntityModel"
import { SubscriptionEntityModelSelector } from "./SubscriptionEntityModel.base"
import { SvgTestModelOrderBy } from "./SvgTestModelOrderByEnum"
import { SvgTestRecordModel, SvgTestRecordModelType } from "./SvgTestRecordModel"
import { SvgTestRecordModelSelector } from "./SvgTestRecordModel.base"
import { UploadOrderBy } from "./UploadOrderByEnum"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { WeeklyPlanRtoModel, WeeklyPlanRtoModelType } from "./WeeklyPlanRtoModel"
import { WeeklyPlanRtoModelSelector } from "./WeeklyPlanRtoModel.base"
import { WlpMealPlanRtoModelSelector } from "./WlpMealPlanRtoModelSelector"
import { RootStoreType } from "./index"


/**
 * QueryRootBase
 * auto generated base class for the model QueryRootModel.
 */
export const QueryRootModelBase = ModelBase
  .named('QueryRoot')
  .props({
    __typename: types.optional(types.literal("query_root"), "query_root"),
    /** Returns meta information regarding a record collection */
    _allBlogArticlesMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding a record collection */
    _allBlogCategoriesMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding a record collection */
    _allDownloadAppsMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding a record collection */
    _allFiltersMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding a record collection */
    _allGeneralPagesMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding a record collection */
    _allLandingPagesMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding a record collection */
    _allMealPlansMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding a record collection */
    _allProductCategoriesMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding a record collection */
    _allProductDietaryTagsMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding a record collection */
    _allProductInstructionsMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding a record collection */
    _allProductPrimaryTagsMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding a record collection */
    _allProductSecondaryTagsMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding a record collection */
    _allProductSubcategoriesMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding a record collection */
    _allProductTagsMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding a record collection */
    _allProductsMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding a record collection */
    _allSortMenusMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding a record collection */
    _allSvgTestsMetaCms: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
    /** Returns meta information regarding an assets collection */
    _allUploadsMetaCms: types.union(types.undefined, types.null, types.late((): any => CollectionMetadataModel)),
    /** Returns the single instance record */
    _siteCms: types.union(types.undefined, types.late((): any => SiteModel)),
    /** Returns a collection of records */
    allBlogArticlesCms: types.union(types.undefined, types.array(types.late((): any => BlogArticleRecordModel))),
    /** Returns a collection of records */
    allBlogCategoriesCms: types.union(types.undefined, types.array(types.late((): any => BlogCategoryRecordModel))),
    /** Returns a collection of records */
    allDownloadAppsCms: types.union(types.undefined, types.array(types.late((): any => DownloadAppRecordModel))),
    /** Returns a collection of records */
    allFiltersCms: types.union(types.undefined, types.array(types.late((): any => FilterRecordModel))),
    /** Returns a collection of records */
    allGeneralPagesCms: types.union(types.undefined, types.array(types.late((): any => GeneralPageRecordModel))),
    /** Returns a collection of records */
    allLandingPagesCms: types.union(types.undefined, types.array(types.late((): any => LandingPageRecordModel))),
    /** Returns a collection of records */
    allMealPlansCms: types.union(types.undefined, types.array(types.late((): any => MealPlanRecordModel))),
    /** Returns a collection of records */
    allProductCategoriesCms: types.union(types.undefined, types.array(types.late((): any => ProductCategoryRecordModel))),
    /** Returns a collection of records */
    allProductDietaryTagsCms: types.union(types.undefined, types.array(types.late((): any => ProductDietaryTagRecordModel))),
    /** Returns a collection of records */
    allProductInstructionsCms: types.union(types.undefined, types.array(types.late((): any => ProductInstructionRecordModel))),
    /** Returns a collection of records */
    allProductPrimaryTagsCms: types.union(types.undefined, types.array(types.late((): any => ProductPrimaryTagRecordModel))),
    /** Returns a collection of records */
    allProductSecondaryTagsCms: types.union(types.undefined, types.array(types.late((): any => ProductSecondaryTagRecordModel))),
    /** Returns a collection of records */
    allProductSubcategoriesCms: types.union(types.undefined, types.array(types.late((): any => ProductSubcategoryRecordModel))),
    /** Returns a collection of records */
    allProductTagsCms: types.union(types.undefined, types.array(types.late((): any => ProductTagRecordModel))),
    /** Returns a collection of records */
    allProductsCms: types.union(types.undefined, types.array(types.late((): any => ProductRecordModel))),
    /** Returns a collection of records */
    allSortMenusCms: types.union(types.undefined, types.array(types.late((): any => SortMenuRecordModel))),
    /** Returns a collection of records */
    allSvgTestsCms: types.union(types.undefined, types.array(types.late((): any => SvgTestRecordModel))),
    /** Returns a collection of assets */
    allUploadsCms: types.union(types.undefined, types.array(types.late((): any => FileFieldModel))),
    appContent: types.union(types.undefined, types.array(types.late((): any => AppContentModel))),
    authStatus: types.union(types.undefined, types.string),
    /** Returns a specific record */
    blogArticleCms: types.union(types.undefined, types.null, types.late((): any => BlogArticleRecordModel)),
    /** Returns a specific record */
    blogCategoryCms: types.union(types.undefined, types.null, types.late((): any => BlogCategoryRecordModel)),
    cart: types.union(types.undefined, types.late((): any => CartModel)),
    customer: types.union(types.undefined, types.late((): any => CustomerProfileOutputModel)),
    customerInfo: types.union(types.undefined, types.late((): any => CustomerInfoModel)),
    deliveryInfo: types.union(types.undefined, types.array(types.late((): any => DeliveryInfoModel))),
    /** Returns a specific record */
    downloadAppCms: types.union(types.undefined, types.null, types.late((): any => DownloadAppRecordModel)),
    /** Returns a specific record */
    filterCms: types.union(types.undefined, types.null, types.late((): any => FilterRecordModel)),
    /** Returns the single instance record */
    footerCms: types.union(types.undefined, types.null, types.late((): any => FooterRecordModel)),
    /** Returns a specific record */
    generalPageCms: types.union(types.undefined, types.null, types.late((): any => GeneralPageRecordModel)),
    goalBasedPlans: types.union(types.undefined, types.array(types.late((): any => GoalBasedPlanRtoModel))),
    googleAuth: types.union(types.undefined, types.late((): any => GoogleAuthRtoModel)),
    /** Returns a specific record */
    landingPageCms: types.union(types.undefined, types.null, types.late((): any => LandingPageRecordModel)),
    mealPlan: types.union(types.undefined, types.late((): any => MealPlanModel)),
    /** Returns a specific record */
    mealPlanCms: types.union(types.undefined, types.null, types.late((): any => MealPlanRecordModel)),
    mealPlans: types.union(types.undefined, types.array(types.late((): any => MealPlanModel))),
    /** Returns the single instance record */
    navbarCms: types.union(types.undefined, types.null, types.late((): any => NavbarRecordModel)),
    order: types.union(types.undefined, types.null, types.late((): any => OrderModel)),
    orders: types.union(types.undefined, types.array(types.late((): any => OrderModel))),
    product: types.union(types.undefined, types.late((): any => ProductModel)),
    /** Returns a specific record */
    productCategoryCms: types.union(types.undefined, types.null, types.late((): any => ProductCategoryRecordModel)),
    /** Returns a specific record */
    productCms: types.union(types.undefined, types.null, types.late((): any => ProductRecordModel)),
    productCollection: types.union(types.undefined, types.late((): any => ProductCollectionDtoModel)),
    productCollections: types.union(types.undefined, types.array(types.late((): any => ProductCollectionDtoModel))),
    /** Returns a specific record */
    productDietaryTagCms: types.union(types.undefined, types.null, types.late((): any => ProductDietaryTagRecordModel)),
    /** Returns a specific record */
    productInstructionCms: types.union(types.undefined, types.null, types.late((): any => ProductInstructionRecordModel)),
    /** Returns a specific record */
    productPrimaryTagCms: types.union(types.undefined, types.null, types.late((): any => ProductPrimaryTagRecordModel)),
    /** Returns a specific record */
    productSecondaryTagCms: types.union(types.undefined, types.null, types.late((): any => ProductSecondaryTagRecordModel)),
    /** Returns a specific record */
    productSubcategoryCms: types.union(types.undefined, types.null, types.late((): any => ProductSubcategoryRecordModel)),
    /** Returns a specific record */
    productTagCms: types.union(types.undefined, types.null, types.late((): any => ProductTagRecordModel)),
    products: types.union(types.undefined, types.array(types.late((): any => ProductModel))),
    reorder: types.union(types.undefined, types.array(types.late((): any => OrderPlanModel))),
    /** Returns a specific record */
    sortMenuCms: types.union(types.undefined, types.null, types.late((): any => SortMenuRecordModel)),
    subscription: types.union(types.undefined, types.null, types.late((): any => SubscriptionEntityModel)),
    /** Returns a specific record */
    svgTestCms: types.union(types.undefined, types.null, types.late((): any => SvgTestRecordModel)),
    /** Returns a specific asset */
    uploadCms: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    user: types.union(types.undefined, types.late((): any => UserModel)),
    weeklyPlan: types.union(types.undefined, types.late((): any => WeeklyPlanRtoModel)),
    weeklyPlans: types.union(types.undefined, types.array(types.late((): any => WeeklyPlanRtoModel))),
    wlpMealPlan: types.union(types.undefined, types.union(types.late((): any => DynamicMealPlanRtoModel), types.late((): any => FixedFemaleMealPlanRtoModel), types.late((): any => FixedMaleMealPlanRtoModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class QueryRootModelSelector extends QueryBuilder {
  get authStatus() { return this.__attr(`authStatus`) }
  _allBlogArticlesMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (BlogArticleModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allBlogArticlesMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allBlogCategoriesMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (BlogCategoryModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allBlogCategoriesMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allDownloadAppsMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (DownloadAppModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allDownloadAppsMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allFiltersMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (FilterModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allFiltersMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allGeneralPagesMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (GeneralPageModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allGeneralPagesMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allLandingPagesMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (LandingPageModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allLandingPagesMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allMealPlansMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (MealPlanModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allMealPlansMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allProductCategoriesMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductCategoryModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allProductCategoriesMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allProductDietaryTagsMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductDietaryTagModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allProductDietaryTagsMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allProductInstructionsMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductInstructionModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allProductInstructionsMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allProductPrimaryTagsMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductPrimaryTagModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allProductPrimaryTagsMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allProductSecondaryTagsMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductSecondaryTagModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allProductSecondaryTagsMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allProductSubcategoriesMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductSubcategoryModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allProductSubcategoriesMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allProductTagsMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductTagModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allProductTagsMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allProductsMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allProductsMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allSortMenusMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (SortMenuModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allSortMenusMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allSvgTestsMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (SvgTestModelFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allSvgTestsMetaCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _allUploadsMetaCms(builder: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) | undefined, args?: { filter?: (UploadFilter | null), locale?: (SiteLocale | null) }) { return this.__child(`_allUploadsMetaCms`+ (args ? '('+['filter', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CollectionMetadataModelSelector, builder) }
  _siteCms(builder: string | SiteModelSelector | ((selector: SiteModelSelector) => SiteModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], locale?: (SiteLocale | null) }) { return this.__child(`_siteCms`+ (args ? '('+['fallbackLocales', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), SiteModelSelector, builder) }
  allBlogArticlesCms(builder: string | BlogArticleRecordModelSelector | ((selector: BlogArticleRecordModelSelector) => BlogArticleRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (BlogArticleModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (BlogArticleModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allBlogArticlesCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), BlogArticleRecordModelSelector, builder) }
  allBlogCategoriesCms(builder: string | BlogCategoryRecordModelSelector | ((selector: BlogCategoryRecordModelSelector) => BlogCategoryRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (BlogCategoryModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (BlogCategoryModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allBlogCategoriesCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), BlogCategoryRecordModelSelector, builder) }
  allDownloadAppsCms(builder: string | DownloadAppRecordModelSelector | ((selector: DownloadAppRecordModelSelector) => DownloadAppRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (DownloadAppModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (DownloadAppModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allDownloadAppsCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), DownloadAppRecordModelSelector, builder) }
  allFiltersCms(builder: string | FilterRecordModelSelector | ((selector: FilterRecordModelSelector) => FilterRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (FilterModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (FilterModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allFiltersCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), FilterRecordModelSelector, builder) }
  allGeneralPagesCms(builder: string | GeneralPageRecordModelSelector | ((selector: GeneralPageRecordModelSelector) => GeneralPageRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (GeneralPageModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (GeneralPageModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allGeneralPagesCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), GeneralPageRecordModelSelector, builder) }
  allLandingPagesCms(builder: string | LandingPageRecordModelSelector | ((selector: LandingPageRecordModelSelector) => LandingPageRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (LandingPageModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (LandingPageModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allLandingPagesCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), LandingPageRecordModelSelector, builder) }
  allMealPlansCms(builder: string | MealPlanRecordModelSelector | ((selector: MealPlanRecordModelSelector) => MealPlanRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (MealPlanModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (MealPlanModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allMealPlansCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), MealPlanRecordModelSelector, builder) }
  allProductCategoriesCms(builder: string | ProductCategoryRecordModelSelector | ((selector: ProductCategoryRecordModelSelector) => ProductCategoryRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductCategoryModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (ProductCategoryModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allProductCategoriesCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductCategoryRecordModelSelector, builder) }
  allProductDietaryTagsCms(builder: string | ProductDietaryTagRecordModelSelector | ((selector: ProductDietaryTagRecordModelSelector) => ProductDietaryTagRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductDietaryTagModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (ProductDietaryTagModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allProductDietaryTagsCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductDietaryTagRecordModelSelector, builder) }
  allProductInstructionsCms(builder: string | ProductInstructionRecordModelSelector | ((selector: ProductInstructionRecordModelSelector) => ProductInstructionRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductInstructionModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (ProductInstructionModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allProductInstructionsCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductInstructionRecordModelSelector, builder) }
  allProductPrimaryTagsCms(builder: string | ProductPrimaryTagRecordModelSelector | ((selector: ProductPrimaryTagRecordModelSelector) => ProductPrimaryTagRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductPrimaryTagModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (ProductPrimaryTagModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allProductPrimaryTagsCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductPrimaryTagRecordModelSelector, builder) }
  allProductSecondaryTagsCms(builder: string | ProductSecondaryTagRecordModelSelector | ((selector: ProductSecondaryTagRecordModelSelector) => ProductSecondaryTagRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductSecondaryTagModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (ProductSecondaryTagModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allProductSecondaryTagsCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductSecondaryTagRecordModelSelector, builder) }
  allProductSubcategoriesCms(builder: string | ProductSubcategoryRecordModelSelector | ((selector: ProductSubcategoryRecordModelSelector) => ProductSubcategoryRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductSubcategoryModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (ProductSubcategoryModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allProductSubcategoriesCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductSubcategoryRecordModelSelector, builder) }
  allProductTagsCms(builder: string | ProductTagRecordModelSelector | ((selector: ProductTagRecordModelSelector) => ProductTagRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductTagModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (ProductTagModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allProductTagsCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductTagRecordModelSelector, builder) }
  allProductsCms(builder: string | ProductRecordModelSelector | ((selector: ProductRecordModelSelector) => ProductRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (ProductModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allProductsCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductRecordModelSelector, builder) }
  allSortMenusCms(builder: string | SortMenuRecordModelSelector | ((selector: SortMenuRecordModelSelector) => SortMenuRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (SortMenuModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (SortMenuModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allSortMenusCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), SortMenuRecordModelSelector, builder) }
  allSvgTestsCms(builder: string | SvgTestRecordModelSelector | ((selector: SvgTestRecordModelSelector) => SvgTestRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (SvgTestModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (SvgTestModelOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allSvgTestsCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), SvgTestRecordModelSelector, builder) }
  allUploadsCms(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (UploadFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (UploadOrderBy | null)[], skip?: (any | null) }) { return this.__child(`allUploadsCms`+ (args ? '('+['fallbackLocales', 'filter', 'first', 'locale', 'orderBy', 'skip'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), FileFieldModelSelector, builder) }
  appContent(builder: string | AppContentModelSelector | ((selector: AppContentModelSelector) => AppContentModelSelector) | undefined, args: { subType?: (ContentSubType | null), type: ContentType }) { return this.__child(`appContent`+ (args ? '('+['subType', 'type'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AppContentModelSelector, builder) }
  blogArticleCms(builder: string | BlogArticleRecordModelSelector | ((selector: BlogArticleRecordModelSelector) => BlogArticleRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (BlogArticleModelFilter | null), locale?: (SiteLocale | null), orderBy?: (BlogArticleModelOrderBy | null)[] }) { return this.__child(`blogArticleCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), BlogArticleRecordModelSelector, builder) }
  blogCategoryCms(builder: string | BlogCategoryRecordModelSelector | ((selector: BlogCategoryRecordModelSelector) => BlogCategoryRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (BlogCategoryModelFilter | null), locale?: (SiteLocale | null), orderBy?: (BlogCategoryModelOrderBy | null)[] }) { return this.__child(`blogCategoryCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), BlogCategoryRecordModelSelector, builder) }
  cart(builder: string | CartModelSelector | ((selector: CartModelSelector) => CartModelSelector) | undefined) { return this.__child(`cart`, CartModelSelector, builder) }
  customer(builder: string | CustomerProfileOutputModelSelector | ((selector: CustomerProfileOutputModelSelector) => CustomerProfileOutputModelSelector) | undefined) { return this.__child(`customer`, CustomerProfileOutputModelSelector, builder) }
  customerInfo(builder: string | CustomerInfoModelSelector | ((selector: CustomerInfoModelSelector) => CustomerInfoModelSelector) | undefined) { return this.__child(`customerInfo`, CustomerInfoModelSelector, builder) }
  deliveryInfo(builder: string | DeliveryInfoModelSelector | ((selector: DeliveryInfoModelSelector) => DeliveryInfoModelSelector) | undefined, args: { date?: (any | null), disableExpress?: (boolean | null), lookup: string, maxDaysInFuture?: (number | null), maxDeliveryDayCount?: (number | null), skipHolidays?: (boolean | null), type?: (DeliveryInfoLookupType | null) }) { return this.__child(`deliveryInfo`+ (args ? '('+['date', 'disableExpress', 'lookup', 'maxDaysInFuture', 'maxDeliveryDayCount', 'skipHolidays', 'type'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), DeliveryInfoModelSelector, builder) }
  downloadAppCms(builder: string | DownloadAppRecordModelSelector | ((selector: DownloadAppRecordModelSelector) => DownloadAppRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (DownloadAppModelFilter | null), locale?: (SiteLocale | null), orderBy?: (DownloadAppModelOrderBy | null)[] }) { return this.__child(`downloadAppCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), DownloadAppRecordModelSelector, builder) }
  filterCms(builder: string | FilterRecordModelSelector | ((selector: FilterRecordModelSelector) => FilterRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (FilterModelFilter | null), locale?: (SiteLocale | null), orderBy?: (FilterModelOrderBy | null)[] }) { return this.__child(`filterCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), FilterRecordModelSelector, builder) }
  footerCms(builder: string | FooterRecordModelSelector | ((selector: FooterRecordModelSelector) => FooterRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], locale?: (SiteLocale | null) }) { return this.__child(`footerCms`+ (args ? '('+['fallbackLocales', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), FooterRecordModelSelector, builder) }
  generalPageCms(builder: string | GeneralPageRecordModelSelector | ((selector: GeneralPageRecordModelSelector) => GeneralPageRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (GeneralPageModelFilter | null), locale?: (SiteLocale | null), orderBy?: (GeneralPageModelOrderBy | null)[] }) { return this.__child(`generalPageCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), GeneralPageRecordModelSelector, builder) }
  goalBasedPlans(builder: string | GoalBasedPlanRtoModelSelector | ((selector: GoalBasedPlanRtoModelSelector) => GoalBasedPlanRtoModelSelector) | undefined, args: { ageRange: AgeRanges, calorie: number, gender: Gender, goal: Goal }) { return this.__child(`goalBasedPlans`+ (args ? '('+['ageRange', 'calorie', 'gender', 'goal'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), GoalBasedPlanRtoModelSelector, builder) }
  googleAuth(builder: string | GoogleAuthRtoModelSelector | ((selector: GoogleAuthRtoModelSelector) => GoogleAuthRtoModelSelector) | undefined) { return this.__child(`googleAuth`, GoogleAuthRtoModelSelector, builder) }
  landingPageCms(builder: string | LandingPageRecordModelSelector | ((selector: LandingPageRecordModelSelector) => LandingPageRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (LandingPageModelFilter | null), locale?: (SiteLocale | null), orderBy?: (LandingPageModelOrderBy | null)[] }) { return this.__child(`landingPageCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), LandingPageRecordModelSelector, builder) }
  mealPlan(builder: string | MealPlanModelSelector | ((selector: MealPlanModelSelector) => MealPlanModelSelector) | undefined, args: { key: string }) { return this.__child(`mealPlan`+ (args ? '('+['key'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), MealPlanModelSelector, builder) }
  mealPlanCms(builder: string | MealPlanRecordModelSelector | ((selector: MealPlanRecordModelSelector) => MealPlanRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (MealPlanModelFilter | null), locale?: (SiteLocale | null), orderBy?: (MealPlanModelOrderBy | null)[] }) { return this.__child(`mealPlanCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), MealPlanRecordModelSelector, builder) }
  mealPlans(builder: string | MealPlanModelSelector | ((selector: MealPlanModelSelector) => MealPlanModelSelector) | undefined, args?: { limit?: (number | null), offset?: (number | null), sort?: MealPlanSortInput[], where?: (MealPlanWhereInput | null) }) { return this.__child(`mealPlans`+ (args ? '('+['limit', 'offset', 'sort', 'where'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), MealPlanModelSelector, builder) }
  navbarCms(builder: string | NavbarRecordModelSelector | ((selector: NavbarRecordModelSelector) => NavbarRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], locale?: (SiteLocale | null) }) { return this.__child(`navbarCms`+ (args ? '('+['fallbackLocales', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), NavbarRecordModelSelector, builder) }
  order(builder: string | OrderModelSelector | ((selector: OrderModelSelector) => OrderModelSelector) | undefined, args: { lookup: string }) { return this.__child(`order`+ (args ? '('+['lookup'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrderModelSelector, builder) }
  orders(builder: string | OrderModelSelector | ((selector: OrderModelSelector) => OrderModelSelector) | undefined, args?: { limit?: (number | null), offset?: (number | null), sort?: OrderSortInput[], where?: (OrderWhereInput | null) }) { return this.__child(`orders`+ (args ? '('+['limit', 'offset', 'sort', 'where'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrderModelSelector, builder) }
  product(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined, args: { sku: string }) { return this.__child(`product`+ (args ? '('+['sku'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductModelSelector, builder) }
  productCategoryCms(builder: string | ProductCategoryRecordModelSelector | ((selector: ProductCategoryRecordModelSelector) => ProductCategoryRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductCategoryModelFilter | null), locale?: (SiteLocale | null), orderBy?: (ProductCategoryModelOrderBy | null)[] }) { return this.__child(`productCategoryCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductCategoryRecordModelSelector, builder) }
  productCms(builder: string | ProductRecordModelSelector | ((selector: ProductRecordModelSelector) => ProductRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductModelFilter | null), locale?: (SiteLocale | null), orderBy?: (ProductModelOrderBy | null)[] }) { return this.__child(`productCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductRecordModelSelector, builder) }
  productCollection(builder: string | ProductCollectionDtoModelSelector | ((selector: ProductCollectionDtoModelSelector) => ProductCollectionDtoModelSelector) | undefined, args: { id: string }) { return this.__child(`productCollection`+ (args ? '('+['id'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductCollectionDtoModelSelector, builder) }
  productCollections(builder: string | ProductCollectionDtoModelSelector | ((selector: ProductCollectionDtoModelSelector) => ProductCollectionDtoModelSelector) | undefined, args?: { limit?: (number | null), offset?: (number | null), sort?: ProductCollectionSortInput[], where?: (ProductCollectionWhereInput | null) }) { return this.__child(`productCollections`+ (args ? '('+['limit', 'offset', 'sort', 'where'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductCollectionDtoModelSelector, builder) }
  productDietaryTagCms(builder: string | ProductDietaryTagRecordModelSelector | ((selector: ProductDietaryTagRecordModelSelector) => ProductDietaryTagRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductDietaryTagModelFilter | null), locale?: (SiteLocale | null), orderBy?: (ProductDietaryTagModelOrderBy | null)[] }) { return this.__child(`productDietaryTagCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductDietaryTagRecordModelSelector, builder) }
  productInstructionCms(builder: string | ProductInstructionRecordModelSelector | ((selector: ProductInstructionRecordModelSelector) => ProductInstructionRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductInstructionModelFilter | null), locale?: (SiteLocale | null), orderBy?: (ProductInstructionModelOrderBy | null)[] }) { return this.__child(`productInstructionCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductInstructionRecordModelSelector, builder) }
  productPrimaryTagCms(builder: string | ProductPrimaryTagRecordModelSelector | ((selector: ProductPrimaryTagRecordModelSelector) => ProductPrimaryTagRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductPrimaryTagModelFilter | null), locale?: (SiteLocale | null), orderBy?: (ProductPrimaryTagModelOrderBy | null)[] }) { return this.__child(`productPrimaryTagCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductPrimaryTagRecordModelSelector, builder) }
  productSecondaryTagCms(builder: string | ProductSecondaryTagRecordModelSelector | ((selector: ProductSecondaryTagRecordModelSelector) => ProductSecondaryTagRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductSecondaryTagModelFilter | null), locale?: (SiteLocale | null), orderBy?: (ProductSecondaryTagModelOrderBy | null)[] }) { return this.__child(`productSecondaryTagCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductSecondaryTagRecordModelSelector, builder) }
  productSubcategoryCms(builder: string | ProductSubcategoryRecordModelSelector | ((selector: ProductSubcategoryRecordModelSelector) => ProductSubcategoryRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductSubcategoryModelFilter | null), locale?: (SiteLocale | null), orderBy?: (ProductSubcategoryModelOrderBy | null)[] }) { return this.__child(`productSubcategoryCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductSubcategoryRecordModelSelector, builder) }
  productTagCms(builder: string | ProductTagRecordModelSelector | ((selector: ProductTagRecordModelSelector) => ProductTagRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (ProductTagModelFilter | null), locale?: (SiteLocale | null), orderBy?: (ProductTagModelOrderBy | null)[] }) { return this.__child(`productTagCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductTagRecordModelSelector, builder) }
  products(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined, args?: { limit?: (number | null), offset?: (number | null), sort?: ProductSortInput[], where?: (ProductWhereInput | null) }) { return this.__child(`products`+ (args ? '('+['limit', 'offset', 'sort', 'where'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductModelSelector, builder) }
  reorder(builder: string | OrderPlanModelSelector | ((selector: OrderPlanModelSelector) => OrderPlanModelSelector) | undefined, args: { lookup: string }) { return this.__child(`reorder`+ (args ? '('+['lookup'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrderPlanModelSelector, builder) }
  sortMenuCms(builder: string | SortMenuRecordModelSelector | ((selector: SortMenuRecordModelSelector) => SortMenuRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (SortMenuModelFilter | null), locale?: (SiteLocale | null), orderBy?: (SortMenuModelOrderBy | null)[] }) { return this.__child(`sortMenuCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), SortMenuRecordModelSelector, builder) }
  // subscription(builder: string | SubscriptionEntityModelSelector | ((selector: SubscriptionEntityModelSelector) => SubscriptionEntityModelSelector) | undefined) { return this.__child(`subscription`, SubscriptionEntityModelSelector, builder) }
  svgTestCms(builder: string | SvgTestRecordModelSelector | ((selector: SvgTestRecordModelSelector) => SvgTestRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (SvgTestModelFilter | null), locale?: (SiteLocale | null), orderBy?: (SvgTestModelOrderBy | null)[] }) { return this.__child(`svgTestCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), SvgTestRecordModelSelector, builder) }
  uploadCms(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (UploadFilter | null), locale?: (SiteLocale | null), orderBy?: (UploadOrderBy | null)[] }) { return this.__child(`uploadCms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), FileFieldModelSelector, builder) }
  user(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`user`, UserModelSelector, builder) }
  weeklyPlan(builder: string | WeeklyPlanRtoModelSelector | ((selector: WeeklyPlanRtoModelSelector) => WeeklyPlanRtoModelSelector) | undefined, args: { id: string }) { return this.__child(`weeklyPlan`+ (args ? '('+['id'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), WeeklyPlanRtoModelSelector, builder) }
  weeklyPlans(builder: string | WeeklyPlanRtoModelSelector | ((selector: WeeklyPlanRtoModelSelector) => WeeklyPlanRtoModelSelector) | undefined, args?: { limit?: (number | null), offset?: (number | null), sort?: WeeklyPlanSortInput[], where?: (WeeklyPlanWhereInput | null) }) { return this.__child(`weeklyPlans`+ (args ? '('+['limit', 'offset', 'sort', 'where'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), WeeklyPlanRtoModelSelector, builder) }
  wlpMealPlan(builder: string | WlpMealPlanRtoModelSelector | ((selector: WlpMealPlanRtoModelSelector) => WlpMealPlanRtoModelSelector) | undefined) { return this.__child(`wlpMealPlan`, WlpMealPlanRtoModelSelector, builder) }
}
export function selectFromQueryRoot() {
  return new QueryRootModelSelector()
}

export const queryRootModelPrimitives = selectFromQueryRoot().authStatus
