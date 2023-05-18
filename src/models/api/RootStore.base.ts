// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { AddressModel, AddressModelType } from "./AddressModel"
import { addressModelPrimitives, AddressModelSelector } from "./AddressModel.base"
import { AppContentModel, AppContentModelType } from "./AppContentModel"
import { appContentModelPrimitives, AppContentModelSelector } from "./AppContentModel.base"
import { AttributeModel, AttributeModelType } from "./AttributeModel"
import { attributeModelPrimitives, AttributeModelSelector } from "./AttributeModel.base"
import { AuthRtoModel, AuthRtoModelType } from "./AuthRtoModel"
import { authRtoModelPrimitives, AuthRtoModelSelector } from "./AuthRtoModel.base"
import { BlogArticleModelContentFieldModel, BlogArticleModelContentFieldModelType } from "./BlogArticleModelContentFieldModel"
import { blogArticleModelContentFieldModelPrimitives, BlogArticleModelContentFieldModelSelector } from "./BlogArticleModelContentFieldModel.base"
import { BlogArticleRecordModel, BlogArticleRecordModelType } from "./BlogArticleRecordModel"
import { blogArticleRecordModelPrimitives, BlogArticleRecordModelSelector } from "./BlogArticleRecordModel.base"
import { BlogBodyImageRecordModel, BlogBodyImageRecordModelType } from "./BlogBodyImageRecordModel"
import { blogBodyImageRecordModelPrimitives, BlogBodyImageRecordModelSelector } from "./BlogBodyImageRecordModel.base"
import { BlogCategoryRecordModel, BlogCategoryRecordModelType } from "./BlogCategoryRecordModel"
import { blogCategoryRecordModelPrimitives, BlogCategoryRecordModelSelector } from "./BlogCategoryRecordModel.base"
import { BulletElementRecordModel, BulletElementRecordModelType } from "./BulletElementRecordModel"
import { bulletElementRecordModelPrimitives, BulletElementRecordModelSelector } from "./BulletElementRecordModel.base"
import { CartModel, CartModelType } from "./CartModel"
import { cartModelPrimitives, CartModelSelector } from "./CartModel.base"
import { CartAddressModel, CartAddressModelType } from "./CartAddressModel"
import { cartAddressModelPrimitives, CartAddressModelSelector } from "./CartAddressModel.base"
import { CartDeliveryModel, CartDeliveryModelType } from "./CartDeliveryModel"
import { cartDeliveryModelPrimitives, CartDeliveryModelSelector } from "./CartDeliveryModel.base"
import { CartLineItemModel, CartLineItemModelType } from "./CartLineItemModel"
import { cartLineItemModelPrimitives, CartLineItemModelSelector } from "./CartLineItemModel.base"
import { CartPlanModel, CartPlanModelType } from "./CartPlanModel"
import { cartPlanModelPrimitives, CartPlanModelSelector } from "./CartPlanModel.base"
import { CartTotalModel, CartTotalModelType } from "./CartTotalModel"
import { cartTotalModelPrimitives, CartTotalModelSelector } from "./CartTotalModel.base"
import { CollectionMetadataModel, CollectionMetadataModelType } from "./CollectionMetadataModel"
import { collectionMetadataModelPrimitives, CollectionMetadataModelSelector } from "./CollectionMetadataModel.base"
import { ColorFieldModel, ColorFieldModelType } from "./ColorFieldModel"
import { colorFieldModelPrimitives, ColorFieldModelSelector } from "./ColorFieldModel.base"
import { CustomerModel, CustomerModelType } from "./CustomerModel"
import { customerModelPrimitives, CustomerModelSelector } from "./CustomerModel.base"
import { CustomerAddressModel, CustomerAddressModelType } from "./CustomerAddressModel"
import { customerAddressModelPrimitives, CustomerAddressModelSelector } from "./CustomerAddressModel.base"
import { CustomerAttributeModel, CustomerAttributeModelType } from "./CustomerAttributeModel"
import { customerAttributeModelPrimitives, CustomerAttributeModelSelector } from "./CustomerAttributeModel.base"
import { CustomerInfoModel, CustomerInfoModelType } from "./CustomerInfoModel"
import { customerInfoModelPrimitives, CustomerInfoModelSelector } from "./CustomerInfoModel.base"
import { CustomerPaymentModel, CustomerPaymentModelType } from "./CustomerPaymentModel"
import { customerPaymentModelPrimitives, CustomerPaymentModelSelector } from "./CustomerPaymentModel.base"
import { CustomerProfileModel, CustomerProfileModelType } from "./CustomerProfileModel"
import { customerProfileModelPrimitives, CustomerProfileModelSelector } from "./CustomerProfileModel.base"
import { CustomerProfileOutputModel, CustomerProfileOutputModelType } from "./CustomerProfileOutputModel"
import { customerProfileOutputModelPrimitives, CustomerProfileOutputModelSelector } from "./CustomerProfileOutputModel.base"
import { DailyOrderModel, DailyOrderModelType } from "./DailyOrderModel"
import { dailyOrderModelPrimitives, DailyOrderModelSelector } from "./DailyOrderModel.base"
import { DailyOrderProductModel, DailyOrderProductModelType } from "./DailyOrderProductModel"
import { dailyOrderProductModelPrimitives, DailyOrderProductModelSelector } from "./DailyOrderProductModel.base"
import { DeliveryDetailModel, DeliveryDetailModelType } from "./DeliveryDetailModel"
import { deliveryDetailModelPrimitives, DeliveryDetailModelSelector } from "./DeliveryDetailModel.base"
import { DeliveryInfoModel, DeliveryInfoModelType } from "./DeliveryInfoModel"
import { deliveryInfoModelPrimitives, DeliveryInfoModelSelector } from "./DeliveryInfoModel.base"
import { DownloadAppRecordModel, DownloadAppRecordModelType } from "./DownloadAppRecordModel"
import { downloadAppRecordModelPrimitives, DownloadAppRecordModelSelector } from "./DownloadAppRecordModel.base"
import { DynamicMealPlanRtoModel, DynamicMealPlanRtoModelType } from "./DynamicMealPlanRtoModel"
import { dynamicMealPlanRtoModelPrimitives, DynamicMealPlanRtoModelSelector } from "./DynamicMealPlanRtoModel.base"
import { FileFieldModel, FileFieldModelType } from "./FileFieldModel"
import { fileFieldModelPrimitives, FileFieldModelSelector } from "./FileFieldModel.base"
import { FilterRecordModel, FilterRecordModelType } from "./FilterRecordModel"
import { filterRecordModelPrimitives, FilterRecordModelSelector } from "./FilterRecordModel.base"
import { FilterSectionRecordModel, FilterSectionRecordModelType } from "./FilterSectionRecordModel"
import { filterSectionRecordModelPrimitives, FilterSectionRecordModelSelector } from "./FilterSectionRecordModel.base"
import { FilterValueRecordModel, FilterValueRecordModelType } from "./FilterValueRecordModel"
import { filterValueRecordModelPrimitives, FilterValueRecordModelSelector } from "./FilterValueRecordModel.base"
import { FixedFemaleMealPlanRtoModel, FixedFemaleMealPlanRtoModelType } from "./FixedFemaleMealPlanRtoModel"
import { fixedFemaleMealPlanRtoModelPrimitives, FixedFemaleMealPlanRtoModelSelector } from "./FixedFemaleMealPlanRtoModel.base"
import { FixedMaleMealPlanRtoModel, FixedMaleMealPlanRtoModelType } from "./FixedMaleMealPlanRtoModel"
import { fixedMaleMealPlanRtoModelPrimitives, FixedMaleMealPlanRtoModelSelector } from "./FixedMaleMealPlanRtoModel.base"
import { FooterColumnRecordModel, FooterColumnRecordModelType } from "./FooterColumnRecordModel"
import { footerColumnRecordModelPrimitives, FooterColumnRecordModelSelector } from "./FooterColumnRecordModel.base"
import { FooterLinkSectionRecordModel, FooterLinkSectionRecordModelType } from "./FooterLinkSectionRecordModel"
import { footerLinkSectionRecordModelPrimitives, FooterLinkSectionRecordModelSelector } from "./FooterLinkSectionRecordModel.base"
import { FooterRecordModel, FooterRecordModelType } from "./FooterRecordModel"
import { footerRecordModelPrimitives, FooterRecordModelSelector } from "./FooterRecordModel.base"
import { FooterTextSectionRecordModel, FooterTextSectionRecordModelType } from "./FooterTextSectionRecordModel"
import { footerTextSectionRecordModelPrimitives, FooterTextSectionRecordModelSelector } from "./FooterTextSectionRecordModel.base"
import { GeneralCampaignSectionRecordModel, GeneralCampaignSectionRecordModelType } from "./GeneralCampaignSectionRecordModel"
import { generalCampaignSectionRecordModelPrimitives, GeneralCampaignSectionRecordModelSelector } from "./GeneralCampaignSectionRecordModel.base"
import { GeneralDeliveryBannerSectionRecordModel, GeneralDeliveryBannerSectionRecordModelType } from "./GeneralDeliveryBannerSectionRecordModel"
import { generalDeliveryBannerSectionRecordModelPrimitives, GeneralDeliveryBannerSectionRecordModelSelector } from "./GeneralDeliveryBannerSectionRecordModel.base"
import { GeneralHowItWorksSectionRecordModel, GeneralHowItWorksSectionRecordModelType } from "./GeneralHowItWorksSectionRecordModel"
import { generalHowItWorksSectionRecordModelPrimitives, GeneralHowItWorksSectionRecordModelSelector } from "./GeneralHowItWorksSectionRecordModel.base"
import { GeneralNutritionalTestimonialRecordModel, GeneralNutritionalTestimonialRecordModelType } from "./GeneralNutritionalTestimonialRecordModel"
import { generalNutritionalTestimonialRecordModelPrimitives, GeneralNutritionalTestimonialRecordModelSelector } from "./GeneralNutritionalTestimonialRecordModel.base"
import { GeneralPageLearnMoreRecordModel, GeneralPageLearnMoreRecordModelType } from "./GeneralPageLearnMoreRecordModel"
import { generalPageLearnMoreRecordModelPrimitives, GeneralPageLearnMoreRecordModelSelector } from "./GeneralPageLearnMoreRecordModel.base"
import { GeneralPageRecordModel, GeneralPageRecordModelType } from "./GeneralPageRecordModel"
import { generalPageRecordModelPrimitives, GeneralPageRecordModelSelector } from "./GeneralPageRecordModel.base"
import { GeneralPlanSectionRecordModel, GeneralPlanSectionRecordModelType } from "./GeneralPlanSectionRecordModel"
import { generalPlanSectionRecordModelPrimitives, GeneralPlanSectionRecordModelSelector } from "./GeneralPlanSectionRecordModel.base"
import { GeneralReviewSectionRecordModel, GeneralReviewSectionRecordModelType } from "./GeneralReviewSectionRecordModel"
import { generalReviewSectionRecordModelPrimitives, GeneralReviewSectionRecordModelSelector } from "./GeneralReviewSectionRecordModel.base"
import { GeneralStockistSectionRecordModel, GeneralStockistSectionRecordModelType } from "./GeneralStockistSectionRecordModel"
import { generalStockistSectionRecordModelPrimitives, GeneralStockistSectionRecordModelSelector } from "./GeneralStockistSectionRecordModel.base"
import { GiftCertificateModel, GiftCertificateModelType } from "./GiftCertificateModel"
import { giftCertificateModelPrimitives, GiftCertificateModelSelector } from "./GiftCertificateModel.base"
import { GlobalSeoFieldModel, GlobalSeoFieldModelType } from "./GlobalSeoFieldModel"
import { globalSeoFieldModelPrimitives, GlobalSeoFieldModelSelector } from "./GlobalSeoFieldModel.base"
import { GoalBasedPlanRtoModel, GoalBasedPlanRtoModelType } from "./GoalBasedPlanRtoModel"
import { goalBasedPlanRtoModelPrimitives, GoalBasedPlanRtoModelSelector } from "./GoalBasedPlanRtoModel.base"
import { GoogleAuthRtoModel, GoogleAuthRtoModelType } from "./GoogleAuthRtoModel"
import { googleAuthRtoModelPrimitives, GoogleAuthRtoModelSelector } from "./GoogleAuthRtoModel.base"
import { HomePageHeaderSectionRecordModel, HomePageHeaderSectionRecordModelType } from "./HomePageHeaderSectionRecordModel"
import { homePageHeaderSectionRecordModelPrimitives, HomePageHeaderSectionRecordModelSelector } from "./HomePageHeaderSectionRecordModel.base"
import { ImageLinkRecordModel, ImageLinkRecordModelType } from "./ImageLinkRecordModel"
import { imageLinkRecordModelPrimitives, ImageLinkRecordModelSelector } from "./ImageLinkRecordModel.base"
import { InstructionRecordModel, InstructionRecordModelType } from "./InstructionRecordModel"
import { instructionRecordModelPrimitives, InstructionRecordModelSelector } from "./InstructionRecordModel.base"
import { LandingPageBenefitsSectionRecordModel, LandingPageBenefitsSectionRecordModelType } from "./LandingPageBenefitsSectionRecordModel"
import { landingPageBenefitsSectionRecordModelPrimitives, LandingPageBenefitsSectionRecordModelSelector } from "./LandingPageBenefitsSectionRecordModel.base"
import { LandingPageBundleSectionRecordModel, LandingPageBundleSectionRecordModelType } from "./LandingPageBundleSectionRecordModel"
import { landingPageBundleSectionRecordModelPrimitives, LandingPageBundleSectionRecordModelSelector } from "./LandingPageBundleSectionRecordModel.base"
import { LandingPageHeaderSectionRecordModel, LandingPageHeaderSectionRecordModelType } from "./LandingPageHeaderSectionRecordModel"
import { landingPageHeaderSectionRecordModelPrimitives, LandingPageHeaderSectionRecordModelSelector } from "./LandingPageHeaderSectionRecordModel.base"
import { LandingPageProductSectionRecordModel, LandingPageProductSectionRecordModelType } from "./LandingPageProductSectionRecordModel"
import { landingPageProductSectionRecordModelPrimitives, LandingPageProductSectionRecordModelSelector } from "./LandingPageProductSectionRecordModel.base"
import { LandingPageRecordModel, LandingPageRecordModelType } from "./LandingPageRecordModel"
import { landingPageRecordModelPrimitives, LandingPageRecordModelSelector } from "./LandingPageRecordModel.base"
import { LearnMoreCardRecordModel, LearnMoreCardRecordModelType } from "./LearnMoreCardRecordModel"
import { learnMoreCardRecordModelPrimitives, LearnMoreCardRecordModelSelector } from "./LearnMoreCardRecordModel.base"
import { LineItemModel, LineItemModelType } from "./LineItemModel"
import { lineItemModelPrimitives, LineItemModelSelector } from "./LineItemModel.base"
import { LinkRecordModel, LinkRecordModelType } from "./LinkRecordModel"
import { linkRecordModelPrimitives, LinkRecordModelSelector } from "./LinkRecordModel.base"
import { LinkSeparatorRecordModel, LinkSeparatorRecordModelType } from "./LinkSeparatorRecordModel"
import { linkSeparatorRecordModelPrimitives, LinkSeparatorRecordModelSelector } from "./LinkSeparatorRecordModel.base"
import { ListElementRecordModel, ListElementRecordModelType } from "./ListElementRecordModel"
import { listElementRecordModelPrimitives, ListElementRecordModelSelector } from "./ListElementRecordModel.base"
import { MealPlanModel, MealPlanModelType } from "./MealPlanModel"
import { mealPlanModelPrimitives, MealPlanModelSelector } from "./MealPlanModel.base"
import { MealPlanItemModel, MealPlanItemModelType } from "./MealPlanItemModel"
import { mealPlanItemModelPrimitives, MealPlanItemModelSelector } from "./MealPlanItemModel.base"
import { MealPlanRecordModel, MealPlanRecordModelType } from "./MealPlanRecordModel"
import { mealPlanRecordModelPrimitives, MealPlanRecordModelSelector } from "./MealPlanRecordModel.base"
import { MetaModel, MetaModelType } from "./MetaModel"
import { metaModelPrimitives, MetaModelSelector } from "./MetaModel.base"
import { NavbarLinkRecordModel, NavbarLinkRecordModelType } from "./NavbarLinkRecordModel"
import { navbarLinkRecordModelPrimitives, NavbarLinkRecordModelSelector } from "./NavbarLinkRecordModel.base"
import { NavbarRecordModel, NavbarRecordModelType } from "./NavbarRecordModel"
import { navbarRecordModelPrimitives, NavbarRecordModelSelector } from "./NavbarRecordModel.base"
import { NutritionalInfoModel, NutritionalInfoModelType } from "./NutritionalInfoModel"
import { nutritionalInfoModelPrimitives, NutritionalInfoModelSelector } from "./NutritionalInfoModel.base"
import { NutritionalPanelInfoModel, NutritionalPanelInfoModelType } from "./NutritionalPanelInfoModel"
import { nutritionalPanelInfoModelPrimitives, NutritionalPanelInfoModelSelector } from "./NutritionalPanelInfoModel.base"
import { OrderModel, OrderModelType } from "./OrderModel"
import { orderModelPrimitives, OrderModelSelector } from "./OrderModel.base"
import { OrderCustomerModel, OrderCustomerModelType } from "./OrderCustomerModel"
import { orderCustomerModelPrimitives, OrderCustomerModelSelector } from "./OrderCustomerModel.base"
import { OrderDeliveryModel, OrderDeliveryModelType } from "./OrderDeliveryModel"
import { orderDeliveryModelPrimitives, OrderDeliveryModelSelector } from "./OrderDeliveryModel.base"
import { OrderPlanModel, OrderPlanModelType } from "./OrderPlanModel"
import { orderPlanModelPrimitives, OrderPlanModelSelector } from "./OrderPlanModel.base"
import { OrderTotalModel, OrderTotalModelType } from "./OrderTotalModel"
import { orderTotalModelPrimitives, OrderTotalModelSelector } from "./OrderTotalModel.base"
import { PaymentModel, PaymentModelType } from "./PaymentModel"
import { paymentModelPrimitives, PaymentModelSelector } from "./PaymentModel.base"
import { PaymentCardModel, PaymentCardModelType } from "./PaymentCardModel"
import { paymentCardModelPrimitives, PaymentCardModelSelector } from "./PaymentCardModel.base"
import { PlanCardRecordModel, PlanCardRecordModelType } from "./PlanCardRecordModel"
import { planCardRecordModelPrimitives, PlanCardRecordModelSelector } from "./PlanCardRecordModel.base"
import { PlanTileRecordModel, PlanTileRecordModelType } from "./PlanTileRecordModel"
import { planTileRecordModelPrimitives, PlanTileRecordModelSelector } from "./PlanTileRecordModel.base"
import { ProductModel, ProductModelType } from "./ProductModel"
import { productModelPrimitives, ProductModelSelector } from "./ProductModel.base"
import { ProductAttributeModel, ProductAttributeModelType } from "./ProductAttributeModel"
import { productAttributeModelPrimitives, ProductAttributeModelSelector } from "./ProductAttributeModel.base"
import { ProductBenefitRecordModel, ProductBenefitRecordModelType } from "./ProductBenefitRecordModel"
import { productBenefitRecordModelPrimitives, ProductBenefitRecordModelSelector } from "./ProductBenefitRecordModel.base"
import { ProductCardRecordModel, ProductCardRecordModelType } from "./ProductCardRecordModel"
import { productCardRecordModelPrimitives, ProductCardRecordModelSelector } from "./ProductCardRecordModel.base"
import { ProductCategoryCardRecordModel, ProductCategoryCardRecordModelType } from "./ProductCategoryCardRecordModel"
import { productCategoryCardRecordModelPrimitives, ProductCategoryCardRecordModelSelector } from "./ProductCategoryCardRecordModel.base"
import { ProductCategoryRecordModel, ProductCategoryRecordModelType } from "./ProductCategoryRecordModel"
import { productCategoryRecordModelPrimitives, ProductCategoryRecordModelSelector } from "./ProductCategoryRecordModel.base"
import { ProductCategorySectionRecordModel, ProductCategorySectionRecordModelType } from "./ProductCategorySectionRecordModel"
import { productCategorySectionRecordModelPrimitives, ProductCategorySectionRecordModelSelector } from "./ProductCategorySectionRecordModel.base"
import { ProductCollectionDtoModel, ProductCollectionDtoModelType } from "./ProductCollectionDtoModel"
import { productCollectionDtoModelPrimitives, ProductCollectionDtoModelSelector } from "./ProductCollectionDtoModel.base"
import { ProductDietaryTagRecordModel, ProductDietaryTagRecordModelType } from "./ProductDietaryTagRecordModel"
import { productDietaryTagRecordModelPrimitives, ProductDietaryTagRecordModelSelector } from "./ProductDietaryTagRecordModel.base"
import { ProductInstructionRecordModel, ProductInstructionRecordModelType } from "./ProductInstructionRecordModel"
import { productInstructionRecordModelPrimitives, ProductInstructionRecordModelSelector } from "./ProductInstructionRecordModel.base"
import { ProductModelDescriptionFieldModel, ProductModelDescriptionFieldModelType } from "./ProductModelDescriptionFieldModel"
import { productModelDescriptionFieldModelPrimitives, ProductModelDescriptionFieldModelSelector } from "./ProductModelDescriptionFieldModel.base"
import { ProductPositionModel, ProductPositionModelType } from "./ProductPositionModel"
import { productPositionModelPrimitives, ProductPositionModelSelector } from "./ProductPositionModel.base"
import { ProductPrimaryTagRecordModel, ProductPrimaryTagRecordModelType } from "./ProductPrimaryTagRecordModel"
import { productPrimaryTagRecordModelPrimitives, ProductPrimaryTagRecordModelSelector } from "./ProductPrimaryTagRecordModel.base"
import { ProductRecordModel, ProductRecordModelType } from "./ProductRecordModel"
import { productRecordModelPrimitives, ProductRecordModelSelector } from "./ProductRecordModel.base"
import { ProductSecondaryTagRecordModel, ProductSecondaryTagRecordModelType } from "./ProductSecondaryTagRecordModel"
import { productSecondaryTagRecordModelPrimitives, ProductSecondaryTagRecordModelSelector } from "./ProductSecondaryTagRecordModel.base"
import { ProductSubcategoryRecordModel, ProductSubcategoryRecordModelType } from "./ProductSubcategoryRecordModel"
import { productSubcategoryRecordModelPrimitives, ProductSubcategoryRecordModelSelector } from "./ProductSubcategoryRecordModel.base"
import { ProductTagRecordModel, ProductTagRecordModelType } from "./ProductTagRecordModel"
import { productTagRecordModelPrimitives, ProductTagRecordModelSelector } from "./ProductTagRecordModel.base"
import { PromotionModel, PromotionModelType } from "./PromotionModel"
import { promotionModelPrimitives, PromotionModelSelector } from "./PromotionModel.base"
import { ReferHistoryModel, ReferHistoryModelType } from "./ReferHistoryModel"
import { referHistoryModelPrimitives, ReferHistoryModelSelector } from "./ReferHistoryModel.base"
import { ResponsiveImageModel, ResponsiveImageModelType } from "./ResponsiveImageModel"
import { responsiveImageModelPrimitives, ResponsiveImageModelSelector } from "./ResponsiveImageModel.base"
import { ReviewElementRecordModel, ReviewElementRecordModelType } from "./ReviewElementRecordModel"
import { reviewElementRecordModelPrimitives, ReviewElementRecordModelSelector } from "./ReviewElementRecordModel.base"
import { SeoFieldModel, SeoFieldModelType } from "./SeoFieldModel"
import { seoFieldModelPrimitives, SeoFieldModelSelector } from "./SeoFieldModel.base"
import { SiteModel, SiteModelType } from "./SiteModel"
import { siteModelPrimitives, SiteModelSelector } from "./SiteModel.base"
import { SortMenuRecordModel, SortMenuRecordModelType } from "./SortMenuRecordModel"
import { sortMenuRecordModelPrimitives, SortMenuRecordModelSelector } from "./SortMenuRecordModel.base"
import { SortOptionRecordModel, SortOptionRecordModelType } from "./SortOptionRecordModel"
import { sortOptionRecordModelPrimitives, SortOptionRecordModelSelector } from "./SortOptionRecordModel.base"
import { SubProductModel, SubProductModelType } from "./SubProductModel"
import { subProductModelPrimitives, SubProductModelSelector } from "./SubProductModel.base"
import { SubscriptionEntityModel, SubscriptionEntityModelType } from "./SubscriptionEntityModel"
import { subscriptionEntityModelPrimitives, SubscriptionEntityModelSelector } from "./SubscriptionEntityModel.base"
import { SubscriptionFutureModel, SubscriptionFutureModelType } from "./SubscriptionFutureModel"
import { subscriptionFutureModelPrimitives, SubscriptionFutureModelSelector } from "./SubscriptionFutureModel.base"
import { SubscriptionPlanModel, SubscriptionPlanModelType } from "./SubscriptionPlanModel"
import { subscriptionPlanModelPrimitives, SubscriptionPlanModelSelector } from "./SubscriptionPlanModel.base"
import { SvgTestRecordModel, SvgTestRecordModelType } from "./SvgTestRecordModel"
import { svgTestRecordModelPrimitives, SvgTestRecordModelSelector } from "./SvgTestRecordModel.base"
import { TagModel, TagModelType } from "./TagModel"
import { tagModelPrimitives, TagModelSelector } from "./TagModel.base"
import { TextRecordModel, TextRecordModelType } from "./TextRecordModel"
import { textRecordModelPrimitives, TextRecordModelSelector } from "./TextRecordModel.base"
import { TransactionModel, TransactionModelType } from "./TransactionModel"
import { transactionModelPrimitives, TransactionModelSelector } from "./TransactionModel.base"
import { UploadVideoFieldModel, UploadVideoFieldModelType } from "./UploadVideoFieldModel"
import { uploadVideoFieldModelPrimitives, UploadVideoFieldModelSelector } from "./UploadVideoFieldModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { userModelPrimitives, UserModelSelector } from "./UserModel.base"
import { WeeklyPlanModel, WeeklyPlanModelType } from "./WeeklyPlanModel"
import { weeklyPlanModelPrimitives, WeeklyPlanModelSelector } from "./WeeklyPlanModel.base"
import { WeeklyPlanRtoModel, WeeklyPlanRtoModelType } from "./WeeklyPlanRtoModel"
import { weeklyPlanRtoModelPrimitives, WeeklyPlanRtoModelSelector } from "./WeeklyPlanRtoModel.base"
import { FocalPointModel, FocalPointModelType } from "./FocalPointModel"
import { focalPointModelPrimitives, FocalPointModelSelector } from "./FocalPointModel.base"
import { MutationRootModel, MutationRootModelType } from "./MutationRootModel"
import { mutationRootModelPrimitives, MutationRootModelSelector } from "./MutationRootModel.base"
import { QueryRootModel, QueryRootModelType } from "./QueryRootModel"
import { queryRootModelPrimitives, QueryRootModelSelector } from "./QueryRootModel.base"

import { recordInterfaceModelPrimitives, RecordInterfaceModelSelector , RecordInterfaceUnion } from "./"
import { blogArticleModelContentBlocksFieldModelPrimitives, BlogArticleModelContentBlocksFieldModelSelector , BlogArticleModelContentBlocksFieldUnion } from "./"
import { wlpMealPlanRtoModelPrimitives, WlpMealPlanRtoModelSelector , WlpMealPlanRtoUnion } from "./"
import { fileFieldInterfaceModelPrimitives, FileFieldInterfaceModelSelector , FileFieldInterfaceUnion } from "./"
import { footerColumnModelFooterSectionFieldModelPrimitives, FooterColumnModelFooterSectionFieldModelSelector , FooterColumnModelFooterSectionFieldUnion } from "./"
import { generalPageModelSectionsFieldModelPrimitives, GeneralPageModelSectionsFieldModelSelector , GeneralPageModelSectionsFieldUnion } from "./"
import { footerLinkSectionModelSectionLinksFieldModelPrimitives, FooterLinkSectionModelSectionLinksFieldModelSelector , FooterLinkSectionModelSectionLinksFieldUnion } from "./"

import { ActiveLevels } from "./ActiveLevelsEnum"
import { AgeRanges } from "./AgeRangesEnum"
import { AuthRole } from "./AuthRoleEnum"
import { BlogArticleModelOrderBy } from "./BlogArticleModelOrderByEnum"
import { BlogCategoryModelOrderBy } from "./BlogCategoryModelOrderByEnum"
import { ColorBucketType } from "./ColorBucketTypeEnum"
import { ContentSubType } from "./ContentSubTypeEnum"
import { ContentType } from "./ContentTypeEnum"
import { CountryCode } from "./CountryCodeEnum"
import { DeliveryInfoLookupType } from "./DeliveryInfoLookupTypeEnum"
import { DiscountType } from "./DiscountTypeEnum"
import { DownloadAppModelOrderBy } from "./DownloadAppModelOrderByEnum"
import { FaviconType } from "./FaviconTypeEnum"
import { FilterModelOrderBy } from "./FilterModelOrderByEnum"
import { Frequency } from "./FrequencyEnum"
import { FutureStatus } from "./FutureStatusEnum"
import { Gender } from "./GenderEnum"
import { GeneralPageModelOrderBy } from "./GeneralPageModelOrderByEnum"
import { Goal } from "./GoalEnum"
import { ImgixParamsAuto } from "./ImgixParamsAutoEnum"
import { ImgixParamsBlendAlign } from "./ImgixParamsBlendAlignEnum"
import { ImgixParamsBlendCrop } from "./ImgixParamsBlendCropEnum"
import { ImgixParamsBlendFit } from "./ImgixParamsBlendFitEnum"
import { ImgixParamsBlendMode } from "./ImgixParamsBlendModeEnum"
import { ImgixParamsBlendSize } from "./ImgixParamsBlendSizeEnum"
import { ImgixParamsCh } from "./ImgixParamsChEnum"
import { ImgixParamsCrop } from "./ImgixParamsCropEnum"
import { ImgixParamsCs } from "./ImgixParamsCsEnum"
import { ImgixParamsFill } from "./ImgixParamsFillEnum"
import { ImgixParamsFit } from "./ImgixParamsFitEnum"
import { ImgixParamsFlip } from "./ImgixParamsFlipEnum"
import { ImgixParamsFm } from "./ImgixParamsFmEnum"
import { ImgixParamsIptc } from "./ImgixParamsIptcEnum"
import { ImgixParamsMarkAlign } from "./ImgixParamsMarkAlignEnum"
import { ImgixParamsMarkFit } from "./ImgixParamsMarkFitEnum"
import { ImgixParamsMarkTile } from "./ImgixParamsMarkTileEnum"
import { ImgixParamsPalette } from "./ImgixParamsPaletteEnum"
import { ImgixParamsTransparency } from "./ImgixParamsTransparencyEnum"
import { ImgixParamsTrim } from "./ImgixParamsTrimEnum"
import { ImgixParamsTxtAlign } from "./ImgixParamsTxtAlignEnum"
import { ImgixParamsTxtClip } from "./ImgixParamsTxtClipEnum"
import { ImgixParamsTxtFit } from "./ImgixParamsTxtFitEnum"
import { ItemStatus } from "./ItemStatusEnum"
import { LandingPageModelOrderBy } from "./LandingPageModelOrderByEnum"
import { MealPlanCategory } from "./MealPlanCategoryEnum"
import { MealPlanModelOrderBy } from "./MealPlanModelOrderByEnum"
import { MealPlanSubCategory } from "./MealPlanSubCategoryEnum"
import { MuxThumbnailFormatType } from "./MuxThumbnailFormatTypeEnum"
import { OrderCategory } from "./OrderCategoryEnum"
import { OrderSource } from "./OrderSourceEnum"
import { OrderStatus } from "./OrderStatusEnum"
import { PackCategory } from "./PackCategoryEnum"
import { PackSubCategory } from "./PackSubCategoryEnum"
import { PaymentStatus } from "./PaymentStatusEnum"
import { PaymentType } from "./PaymentTypeEnum"
import { PlanCategory } from "./PlanCategoryEnum"
import { ProductCategory } from "./ProductCategoryEnum"
import { ProductCategoryModelOrderBy } from "./ProductCategoryModelOrderByEnum"
import { ProductDietaryRestriction } from "./ProductDietaryRestrictionEnum"
import { ProductDietaryTagModelOrderBy } from "./ProductDietaryTagModelOrderByEnum"
import { ProductInstructionModelOrderBy } from "./ProductInstructionModelOrderByEnum"
import { ProductModelOrderBy } from "./ProductModelOrderByEnum"
import { ProductPrimaryTagModelOrderBy } from "./ProductPrimaryTagModelOrderByEnum"
import { ProductProtein } from "./ProductProteinEnum"
import { ProductSecondaryTagModelOrderBy } from "./ProductSecondaryTagModelOrderByEnum"
import { ProductStatus } from "./ProductStatusEnum"
import { ProductSubCategory } from "./ProductSubCategoryEnum"
import { ProductSubcategoryModelOrderBy } from "./ProductSubcategoryModelOrderByEnum"
import { ProductTagModelOrderBy } from "./ProductTagModelOrderByEnum"
import { ResolutionType } from "./ResolutionTypeEnum"
import { ShippingStatus } from "./ShippingStatusEnum"
import { SiteLocale } from "./SiteLocaleEnum"
import { SortDirection } from "./SortDirectionEnum"
import { SortMenuModelOrderBy } from "./SortMenuModelOrderByEnum"
import { SortableMealPlanFields } from "./SortableMealPlanFieldsEnum"
import { SortableOrderFields } from "./SortableOrderFieldsEnum"
import { SortableProductCollectionFields } from "./SortableProductCollectionFieldsEnum"
import { SortableProductFields } from "./SortableProductFieldsEnum"
import { SortableWeeklyPlanFields } from "./SortableWeeklyPlanFieldsEnum"
import { State } from "./StateEnum"
import { SubscriptionCategory } from "./SubscriptionCategoryEnum"
import { SubscriptionPlanStatus } from "./SubscriptionPlanStatusEnum"
import { SubscriptionStatus } from "./SubscriptionStatusEnum"
import { SvgTestModelOrderBy } from "./SvgTestModelOrderByEnum"
import { UpdateLandingPageWorkflowStage } from "./UpdateLandingPageWorkflowStageEnum"
import { UploadOrderBy } from "./UploadOrderByEnum"
import { UploadOrientation } from "./UploadOrientationEnum"
import { UploadType } from "./UploadTypeEnum"
import { VideoMp4Res } from "./VideoMp4ResEnum"
import { WlpProductFlags } from "./WlpProductFlagsEnum"

export type AddressInput = {
  addressId?: (string | null)
  businessName?: (string | null)
  country: CountryCode
  name: string
  postcode: string
  state: State
  street: string
  suburb: string
  zoneCode?: (string | null)
}
export type AttributeInput = {
  name: string
  value: any
}
export type AuthCallbackInput = {
  code: string
  usid: string
  verifier: string
}
export type BlogArticleModelFilter = {
  OR?: (BlogArticleModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  author?: (StringFilter | null)
  authorByline?: (StringFilter | null)
  authorImage?: (FileFilter | null)
  category?: (LinkFilter | null)
  content?: (StructuredTextFilter | null)
  createdAt?: (CreatedAtFilter | null)
  heroImage?: (FileFilter | null)
  id?: (ItemIdFilter | null)
  ogImage?: (FileFilter | null)
  seoDescription?: (TextFilter | null)
  seoTitle?: (StringFilter | null)
  slug?: (StringFilter | null)
  summary?: (TextFilter | null)
  title?: (StringFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type BlogCategoryModelFilter = {
  OR?: (BlogCategoryModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  createdAt?: (CreatedAtFilter | null)
  highlightedArticles?: (LinksFilter | null)
  id?: (ItemIdFilter | null)
  name?: (StringFilter | null)
  ogImage?: (FileFilter | null)
  position?: (PositionFilter | null)
  seoDescription?: (TextFilter | null)
  seoTitle?: (StringFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type BooleanFilter = {
  eq?: (any | null)
}
export type CartAddressInput = {
  addressId: string
  businessName?: (string | null)
  country?: (CountryCode | null)
  firstName?: (string | null)
  instructions?: (string | null)
  lastName?: (string | null)
  method: string
  phone?: (string | null)
  postcode: string
  state: State
  street: string
  suburb: string
  zoneCode?: (string | null)
}
export type CartCustomerInput = {
  customerId?: (string | null)
  email: string
  firstName: string
  lastName: string
  phone: string
}
export type CartDeliveryInput = {
  deliveryAddress: CartAddressInput
  deliveryDate?: (string | null)
  timeSlot?: (string | null)
}
export type CartGiftCertificateInput = {
  basePrice: number
  grossPrice: number
  lineitemText?: (string | null)
  netPrice: number
  recipientEmail: string
  recipientName: string
  senderName: string
  taxBasis: number
}
export type CartInput = {
  billing?: (CartAddressInput | null)
  checkoutStartAt?: (any | null)
  customer: CartCustomerInput
  delivery?: (CartDeliveryInput | null)
  frequency?: (Frequency | null)
  giftCertificates?: CartGiftCertificateInput[]
  plans?: CartPlanInput[]
  source: OrderSource
  totals: CartTotalInput
}
export type CartLineItemInput = {
  attributes?: AttributeInput[]
  product: string
  qty: number
  sku: string
}
export type CartPlanInput = {
  attributes?: AttributeInput[]
  category: PlanCategory
  image: string
  lineItems: CartLineItemInput[]
  name: string
  netPrice: number
  planId: string
  subCategory?: (PackCategory | null)
}
export type CartTotalInput = {
  itemTotal: number
  orderTotal: number
  shippingTotal: number
}
export type ColorFilter = {
  exists?: (any | null)
}
export type CreatedAtFilter = {
  eq?: (any | null)
  exists?: (any | null)
  gt?: (any | null)
  gte?: (any | null)
  lt?: (any | null)
  lte?: (any | null)
  neq?: (any | null)
}
export type DateComparisonOperator = {
  _and?: DateComparisonOperator[]
  _eq?: (any | null)
  _gt?: (any | null)
  _gte?: (any | null)
  _lt?: (any | null)
  _lte?: (any | null)
  _ne?: (any | null)
  _or?: DateComparisonOperator[]
}
export type DateFilter = {
  eq?: (any | null)
  exists?: (any | null)
  gt?: (any | null)
  gte?: (any | null)
  lt?: (any | null)
  lte?: (any | null)
  neq?: (any | null)
}
export type DateTimeFilter = {
  eq?: (any | null)
  exists?: (any | null)
  gt?: (any | null)
  gte?: (any | null)
  lt?: (any | null)
  lte?: (any | null)
  neq?: (any | null)
}
export type DietaryRestrictionComparison = {
  _eq?: (ProductDietaryRestriction | null)
  _in?: ProductDietaryRestriction[]
  _ne?: (ProductDietaryRestriction | null)
  _nin?: ProductDietaryRestriction[]
}
export type DownloadAppModelFilter = {
  OR?: (DownloadAppModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  createdAt?: (CreatedAtFilter | null)
  id?: (ItemIdFilter | null)
  text?: (StringFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type ExtraItemDto = {
  calories: number
  day: number
  name: string
  quantity: number
}
export type FileFilter = {
  eq?: (any | null)
  exists?: (any | null)
  in?: (any | null)[]
  neq?: (any | null)
  notIn?: (any | null)[]
}
export type FilterModelFilter = {
  OR?: (FilterModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  createdAt?: (CreatedAtFilter | null)
  id?: (ItemIdFilter | null)
  key?: (StringFilter | null)
  name?: (StringFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type FloatComparisonOperator = {
  _and?: FloatComparisonOperator[]
  _eq?: (number | null)
  _gt?: (number | null)
  _gte?: (number | null)
  _in?: number[]
  _lt?: (number | null)
  _lte?: (number | null)
  _ne?: (number | null)
  _nin?: number[]
  _or?: FloatComparisonOperator[]
}
export type FloatFilter = {
  eq?: (any | null)
  exists?: (any | null)
  gt?: (any | null)
  gte?: (any | null)
  lt?: (any | null)
  lte?: (any | null)
  neq?: (any | null)
}
export type GalleryFilter = {
  allIn?: (any | null)[]
  anyIn?: (any | null)[]
  eq?: (any | null)[]
  exists?: (any | null)
  notIn?: (any | null)[]
}
export type GeneralPageModelFilter = {
  OR?: (GeneralPageModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  createdAt?: (CreatedAtFilter | null)
  id?: (ItemIdFilter | null)
  ogImage?: (FileFilter | null)
  seoDescription?: (TextFilter | null)
  seoTitle?: (StringFilter | null)
  slug?: (StringFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type GiftCertificateInput = {
  grossPrice: number
  lineitemText?: (string | null)
  netPrice: number
  recipientEmail: string
  recipientName: string
  senderName: string
}
export type ImgixParams = {
  ar?: (string | null)
  auto?: ImgixParamsAuto[]
  bg?: (string | null)
  blend?: (string | null)
  blendAlign?: ImgixParamsBlendAlign[]
  blendAlpha?: (any | null)
  blendColor?: (string | null)
  blendCrop?: ImgixParamsBlendCrop[]
  blendFit?: (ImgixParamsBlendFit | null)
  blendH?: (any | null)
  blendMode?: (ImgixParamsBlendMode | null)
  blendPad?: (any | null)
  blendSize?: (ImgixParamsBlendSize | null)
  blendW?: (any | null)
  blendX?: (any | null)
  blendY?: (any | null)
  blur?: (any | null)
  border?: (string | null)
  borderBottom?: (any | null)
  borderLeft?: (any | null)
  borderRadius?: (string | null)
  borderRadiusInner?: (string | null)
  borderRight?: (any | null)
  borderTop?: (any | null)
  bri?: (any | null)
  ch?: ImgixParamsCh[]
  chromasub?: (any | null)
  colorquant?: (any | null)
  colors?: (any | null)
  con?: (any | null)
  cornerRadius?: (string | null)
  crop?: ImgixParamsCrop[]
  cs?: (ImgixParamsCs | null)
  dl?: (string | null)
  dpi?: (any | null)
  dpr?: (any | null)
  duotone?: (string | null)
  duotoneAlpha?: (any | null)
  exp?: (any | null)
  expires?: (any | null)
  faceindex?: (any | null)
  facepad?: (any | null)
  faces?: (any | null)
  fill?: (ImgixParamsFill | null)
  fillColor?: (string | null)
  fit?: (ImgixParamsFit | null)
  flip?: (ImgixParamsFlip | null)
  fm?: (ImgixParamsFm | null)
  fpDebug?: (any | null)
  fpX?: (any | null)
  fpY?: (any | null)
  fpZ?: (any | null)
  gam?: (any | null)
  gridColors?: (string | null)
  gridSize?: (any | null)
  h?: (any | null)
  high?: (any | null)
  htn?: (any | null)
  hue?: (any | null)
  invert?: (any | null)
  iptc?: (ImgixParamsIptc | null)
  lossless?: (any | null)
  mark?: (string | null)
  markAlign?: ImgixParamsMarkAlign[]
  markAlpha?: (any | null)
  markBase?: (string | null)
  markFit?: (ImgixParamsMarkFit | null)
  markH?: (any | null)
  markPad?: (any | null)
  markRot?: (any | null)
  markScale?: (any | null)
  markTile?: (ImgixParamsMarkTile | null)
  markW?: (any | null)
  markX?: (any | null)
  markY?: (any | null)
  mask?: (string | null)
  maskBg?: (string | null)
  maxH?: (any | null)
  maxW?: (any | null)
  minH?: (any | null)
  minW?: (any | null)
  monochrome?: (string | null)
  nr?: (any | null)
  nrs?: (any | null)
  orient?: (any | null)
  pad?: (any | null)
  padBottom?: (any | null)
  padLeft?: (any | null)
  padRight?: (any | null)
  padTop?: (any | null)
  page?: (any | null)
  palette?: (ImgixParamsPalette | null)
  pdfAnnotation?: (any | null)
  prefix?: (string | null)
  px?: (any | null)
  q?: (any | null)
  rect?: (string | null)
  rot?: (any | null)
  sat?: (any | null)
  sepia?: (any | null)
  shad?: (any | null)
  sharp?: (any | null)
  transparency?: (ImgixParamsTransparency | null)
  trim?: (ImgixParamsTrim | null)
  trimColor?: (string | null)
  trimMd?: (any | null)
  trimPad?: (any | null)
  trimSd?: (any | null)
  trimTol?: (any | null)
  txt?: (string | null)
  txtAlign?: ImgixParamsTxtAlign[]
  txtClip?: ImgixParamsTxtClip[]
  txtColor?: (string | null)
  txtFit?: (ImgixParamsTxtFit | null)
  txtFont?: (string | null)
  txtLead?: (any | null)
  txtLig?: (any | null)
  txtLine?: (any | null)
  txtLineColor?: (string | null)
  txtPad?: (any | null)
  txtShad?: (any | null)
  txtSize?: (any | null)
  txtTrack?: (any | null)
  txtWidth?: (any | null)
  txtX?: (any | null)
  txtY?: (any | null)
  usm?: (any | null)
  usmrad?: (any | null)
  vib?: (any | null)
  w?: (any | null)
}
export type InUseFilter = {
  eq?: (any | null)
}
export type ItemIdFilter = {
  eq?: (any | null)
  in?: (any | null)[]
  neq?: (any | null)
  notIn?: (any | null)[]
}
export type LandingPageModelFilter = {
  OR?: (LandingPageModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _stage?: (UpdateLandingPageWorkflowStageFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  createdAt?: (CreatedAtFilter | null)
  id?: (ItemIdFilter | null)
  ogImage?: (FileFilter | null)
  seoDescription?: (TextFilter | null)
  seoTitle?: (StringFilter | null)
  showDeliveryBanner?: (BooleanFilter | null)
  slug?: (StringFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type LinkFilter = {
  eq?: (any | null)
  exists?: (any | null)
  in?: (any | null)[]
  neq?: (any | null)
  notIn?: (any | null)[]
}
export type LinksFilter = {
  allIn?: (any | null)[]
  anyIn?: (any | null)[]
  eq?: (any | null)[]
  exists?: (any | null)
  notIn?: (any | null)[]
}
export type LoginInput = {
  email: string
  password: string
}
export type MealPlanCategoryComparisonOperator = {
  _eq?: (MealPlanCategory | null)
  _in?: MealPlanCategory[]
  _ne?: (MealPlanCategory | null)
  _nin?: MealPlanCategory[]
}
export type MealPlanModelFilter = {
  OR?: (MealPlanModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  category?: (StringFilter | null)
  createdAt?: (CreatedAtFilter | null)
  id?: (ItemIdFilter | null)
  image?: (FileFilter | null)
  key?: (StringFilter | null)
  name?: (StringFilter | null)
  subcategory?: (StringFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type MealPlanModelFilterRemoteRelRomecms = {
  OR?: (MealPlanModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  category?: (StringFilter | null)
  createdAt?: (CreatedAtFilter | null)
  id?: (ItemIdFilter | null)
  image?: (FileFilter | null)
  key?: (StringFilterRemoteRelRomecms | null)
  name?: (StringFilter | null)
  subcategory?: (StringFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type MealPlanSortInput = {
  fieldName: SortableMealPlanFields
  sortDirection: SortDirection
}
export type MealPlanStatusComparisonOperator = {
  _eq?: (ProductStatus | null)
  _in?: ProductStatus[]
  _ne?: (ProductStatus | null)
  _nin?: ProductStatus[]
}
export type MealPlanSubCategoryComparison = {
  _eq?: (MealPlanSubCategory | null)
  _in?: MealPlanSubCategory[]
  _ne?: (MealPlanSubCategory | null)
  _nin?: MealPlanSubCategory[]
}
export type MealPlanSubCategoryComparisonOperator = {
  _and?: MealPlanSubCategoryComparison[]
  _eq?: (MealPlanSubCategory | null)
  _in?: MealPlanSubCategory[]
  _ne?: (MealPlanSubCategory | null)
  _nin?: MealPlanSubCategory[]
  _or?: MealPlanSubCategoryComparison[]
}
export type MealPlanWhereInput = {
  category?: (MealPlanCategoryComparisonOperator | null)
  key?: (StringComparisonOperator | null)
  name?: (StringComparisonOperator | null)
  status?: (MealPlanStatusComparisonOperator | null)
  subCategory?: (MealPlanSubCategoryComparisonOperator | null)
}
export type OldRegisterInput = {
  email: string
  first: string
  goal?: (Goal | null)
  last: string
  password: string
  postcode?: (string | null)
  unsubscribeEmail?: (boolean | null)
}
export type OrderCreditInput = {
  amount: number
}
export type OrderCustomerInput = {
  email: string
  firstName: string
  lastName: string
  phone: string
}
export type OrderDeliveryInput = {
  deliveryAddress: AddressInput
  deliveryDate: any
  instructions?: (string | null)
  timeSlot: string
}
export type OrderGiftCardInput = {
  amount: number
  code: string
}
export type OrderLineItemInput = {
  attributes?: AttributeInput[]
  category: ProductCategory
  grossPrice: number
  hasSubProducts: boolean
  name: string
  netPrice: number
  planId: string
  product: string
  promotionTotal: number
  promotions?: PromotionInput[]
  qty: number
  sku: string
}
export type OrderPaymentInput = {
  amount: number
  paymentMethodId: PaymentType
  paymentMethodNonce?: (string | null)
  paymentMethodToken?: (string | null)
}
export type OrderPaymentsInput = {
  credit?: (OrderCreditInput | null)
  giftCards?: OrderGiftCardInput[]
  payment?: (OrderPaymentInput | null)
}
export type OrderPlanInput = {
  attributes?: AttributeInput[]
  category: PlanCategory
  grossPrice: number
  image?: (string | null)
  lineItems: OrderLineItemInput[]
  name: string
  netPrice: number
  planId: string
  promotionTotal: number
  subCategory?: (PackCategory | null)
}
export type OrderSortInput = {
  fieldName: SortableOrderFields
  sortDirection: SortDirection
}
export type OrderStatsComparisonOperator = {
  _eq?: (OrderStatus | null)
  _in?: OrderStatus[]
  _ne?: (OrderStatus | null)
  _nin?: OrderStatus[]
}
export type OrderTotalInput = {
  itemTotal: number
  orderPromotionTotal?: (number | null)
  orderTotal: number
  shippingPromotionTotal?: (number | null)
  shippingTotal: number
}
export type OrderWhereInput = {
  invoiceNumber?: (StringComparisonOperator | null)
  orderStatus?: (OrderStatsComparisonOperator | null)
}
export type OrientationFilter = {
  eq?: (UploadOrientation | null)
  neq?: (UploadOrientation | null)
}
export type PlaceOrderInput = {
  attributes?: AttributeInput[]
  billingAddress: AddressInput
  category: OrderCategory
  customer: OrderCustomerInput
  delivery: OrderDeliveryInput
  frequency: Frequency
  giftCertificates: GiftCertificateInput[]
  key?: (string | null)
  orderPlans: OrderPlanInput[]
  payments: OrderPaymentsInput
  promotions?: PromotionInput[]
  source: OrderSource
  totals: OrderTotalInput
}
export type PositionFilter = {
  eq?: (any | null)
  gt?: (any | null)
  gte?: (any | null)
  lt?: (any | null)
  lte?: (any | null)
  neq?: (any | null)
}
export type ProductCategoryComparisonOperator = {
  _eq?: (ProductCategory | null)
  _in?: ProductCategory[]
  _ne?: (ProductCategory | null)
  _nin?: ProductCategory[]
}
export type ProductCategoryModelFilter = {
  OR?: (ProductCategoryModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  categoryDescription?: (StringFilter | null)
  categoryImage?: (FileFilter | null)
  createdAt?: (CreatedAtFilter | null)
  id?: (ItemIdFilter | null)
  key?: (StringFilter | null)
  name?: (StringFilter | null)
  position?: (PositionFilter | null)
  subcategories?: (LinksFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
  visible?: (BooleanFilter | null)
}
export type ProductCollectionSortInput = {
  fieldName: SortableProductCollectionFields
  sortDirection: SortDirection
}
export type ProductCollectionWhereInput = {
  name?: (StringComparisonOperator | null)
}
export type ProductDietaryRestrictionComparisonOperator = {
  _and?: DietaryRestrictionComparison[]
  _eq?: (ProductDietaryRestriction | null)
  _in?: ProductDietaryRestriction[]
  _ne?: (ProductDietaryRestriction | null)
  _nin?: ProductDietaryRestriction[]
  _or?: DietaryRestrictionComparison[]
}
export type ProductDietaryTagModelFilter = {
  OR?: (ProductDietaryTagModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  createdAt?: (CreatedAtFilter | null)
  icon?: (FileFilter | null)
  id?: (ItemIdFilter | null)
  key?: (StringFilter | null)
  position?: (PositionFilter | null)
  text?: (StringFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type ProductInstructionModelFilter = {
  OR?: (ProductInstructionModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  category?: (StringFilter | null)
  createdAt?: (CreatedAtFilter | null)
  id?: (ItemIdFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type ProductModelFilter = {
  OR?: (ProductModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  createdAt?: (CreatedAtFilter | null)
  description?: (StructuredTextFilter | null)
  dietaryTags?: (LinksFilter | null)
  discontinuedAt?: (DateTimeFilter | null)
  displayCategory?: (LinkFilter | null)
  displayName?: (StringFilter | null)
  displayPageImages?: (GalleryFilter | null)
  displaySubcategory?: (LinksFilter | null)
  grossPrice?: (FloatFilter | null)
  id?: (ItemIdFilter | null)
  liveAt?: (DateTimeFilter | null)
  netPrice?: (FloatFilter | null)
  newTagEndDate?: (DateFilter | null)
  newTagStartDate?: (DateFilter | null)
  primaryDisplayTag?: (LinkFilter | null)
  productInstruction?: (LinkFilter | null)
  productStatus?: (StringFilter | null)
  promotionTotal?: (FloatFilter | null)
  replacementProduct?: (LinkFilter | null)
  secondaryDisplayTag?: (LinkFilter | null)
  sku?: (StringFilter | null)
  subProducts?: (LinksFilter | null)
  tags?: (LinksFilter | null)
  tileImage?: (FileFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type ProductModelFilterRemoteRelRomecms = {
  OR?: (ProductModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  createdAt?: (CreatedAtFilter | null)
  description?: (StructuredTextFilter | null)
  dietaryTags?: (LinksFilter | null)
  discontinuedAt?: (DateTimeFilter | null)
  displayCategory?: (LinkFilter | null)
  displayName?: (StringFilter | null)
  displayPageImages?: (GalleryFilter | null)
  displaySubcategory?: (LinksFilter | null)
  grossPrice?: (FloatFilter | null)
  id?: (ItemIdFilter | null)
  liveAt?: (DateTimeFilter | null)
  netPrice?: (FloatFilter | null)
  newTagEndDate?: (DateFilter | null)
  newTagStartDate?: (DateFilter | null)
  primaryDisplayTag?: (LinkFilter | null)
  productInstruction?: (LinkFilter | null)
  productStatus?: (StringFilter | null)
  promotionTotal?: (FloatFilter | null)
  replacementProduct?: (LinkFilter | null)
  secondaryDisplayTag?: (LinkFilter | null)
  sku?: (StringFilterRemoteRelRomecms | null)
  subProducts?: (LinksFilter | null)
  tags?: (LinksFilter | null)
  tileImage?: (FileFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type ProductPrimaryTagModelFilter = {
  OR?: (ProductPrimaryTagModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  backgroundColor?: (ColorFilter | null)
  createdAt?: (CreatedAtFilter | null)
  fontColor?: (ColorFilter | null)
  id?: (ItemIdFilter | null)
  text?: (StringFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type ProductSecondaryTagModelFilter = {
  OR?: (ProductSecondaryTagModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  backgroundColor?: (ColorFilter | null)
  createdAt?: (CreatedAtFilter | null)
  fontColor?: (ColorFilter | null)
  id?: (ItemIdFilter | null)
  text?: (StringFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type ProductSortInput = {
  fieldName: SortableProductFields
  sortDirection: SortDirection
}
export type ProductStatusComparisonOperator = {
  _eq?: (ProductStatus | null)
  _in?: ProductStatus[]
  _ne?: (ProductStatus | null)
  _nin?: ProductStatus[]
}
export type ProductSubCategoryComparisonOperator = {
  _and?: SubCategoryComparison[]
  _eq?: (ProductSubCategory | null)
  _in?: ProductSubCategory[]
  _ne?: (ProductSubCategory | null)
  _nin?: ProductSubCategory[]
  _or?: SubCategoryComparison[]
}
export type ProductSubcategoryModelFilter = {
  OR?: (ProductSubcategoryModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  createdAt?: (CreatedAtFilter | null)
  id?: (ItemIdFilter | null)
  key?: (StringFilter | null)
  name?: (StringFilter | null)
  position?: (PositionFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
  visible?: (BooleanFilter | null)
}
export type ProductTagModelFilter = {
  OR?: (ProductTagModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  createdAt?: (CreatedAtFilter | null)
  icon?: (FileFilter | null)
  id?: (ItemIdFilter | null)
  position?: (PositionFilter | null)
  text?: (StringFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type ProductWhereInput = {
  calories?: (FloatComparisonOperator | null)
  carbs?: (FloatComparisonOperator | null)
  category?: (ProductCategoryComparisonOperator | null)
  dietary?: (ProductDietaryRestrictionComparisonOperator | null)
  displayCategory?: (ProductCategoryComparisonOperator | null)
  displaySubCategory?: (ProductSubCategoryComparisonOperator | null)
  fats?: (FloatComparisonOperator | null)
  hasSubProducts?: (boolean | null)
  liveAt?: (DateComparisonOperator | null)
  marketingTag?: (StringComparisonOperator | null)
  name?: (StringComparisonOperator | null)
  netPrice?: (FloatComparisonOperator | null)
  productCollection?: (StringComparisonOperator | null)
  proteinType?: (ProteinComparisonOperator | null)
  sku?: (StringComparisonOperator | null)
  status?: (ProductStatusComparisonOperator | null)
  subCategory?: (ProductSubCategoryComparisonOperator | null)
}
export type PromotionInput = {
  code?: (string | null)
  desc?: (string | null)
  promotionId?: (string | null)
  type: DiscountType
  value: number
}
export type ProteinComparisonOperator = {
  _eq?: (ProductProtein | null)
  _in?: ProductProtein[]
  _ne?: (ProductProtein | null)
  _nin?: ProductProtein[]
}
export type PublishedAtFilter = {
  eq?: (any | null)
  exists?: (any | null)
  gt?: (any | null)
  gte?: (any | null)
  lt?: (any | null)
  lte?: (any | null)
  neq?: (any | null)
}
export type RegisterInput = {
  email: string
  firstName: string
  lastName: string
  password: string
}
export type ResolutionFilter = {
  eq?: (ResolutionType | null)
  in?: (ResolutionType | null)[]
  neq?: (ResolutionType | null)
  notIn?: (ResolutionType | null)[]
}
export type SortMenuModelFilter = {
  OR?: (SortMenuModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  createdAt?: (CreatedAtFilter | null)
  id?: (ItemIdFilter | null)
  key?: (StringFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type StatusFilter = {
  eq?: (ItemStatus | null)
  in?: (ItemStatus | null)[]
  neq?: (ItemStatus | null)
  notIn?: (ItemStatus | null)[]
}
export type StringComparisonOperator = {
  _eq?: (string | null)
  _in?: string[]
  _ne?: (string | null)
  _nin?: string[]
}
export type StringFilter = {
  eq?: (string | null)
  exists?: (any | null)
  in?: (string | null)[]
  isBlank?: (any | null)
  matches?: (StringMatchesFilter | null)
  neq?: (string | null)
  notIn?: (string | null)[]
  notMatches?: (StringMatchesFilter | null)
}
export type StringFilterRemoteRelRomecms = {
  exists?: (any | null)
  in?: (string | null)[]
  isBlank?: (any | null)
  matches?: (StringMatchesFilter | null)
  neq?: (string | null)
  notIn?: (string | null)[]
  notMatches?: (StringMatchesFilter | null)
}
export type StringMatchesFilter = {
  caseSensitive?: (any | null)
  pattern: string
  regexp?: (any | null)
}
export type StructuredTextFilter = {
  exists?: (any | null)
  isBlank?: (any | null)
  matches?: (StringMatchesFilter | null)
  notMatches?: (StringMatchesFilter | null)
}
export type SubCategoryComparison = {
  _eq?: (ProductSubCategory | null)
  _in?: ProductSubCategory[]
  _ne?: (ProductSubCategory | null)
  _nin?: ProductSubCategory[]
}
export type SubscriptionCancelInput = {
  reason: string
}
export type SubscriptionDeliveryDateInput = {
  deliveryDate: string
  planId?: (string | null)
  timeSlot: string
}
export type SubscriptionDeliveryInput = {
  address: AddressInput
  instructions?: (string | null)
  planId?: (string | null)
}
export type SubscriptionFrequencyInput = {
  frequency: Frequency
  planId?: (string | null)
}
export type SubscriptionFuturesInput = {
  deliveryDate: string
}
export type SubscriptionPaymentInput = {
  token: string
  type: PaymentType
}
export type SvgTestModelFilter = {
  OR?: (SvgTestModelFilter | null)[]
  _createdAt?: (CreatedAtFilter | null)
  _firstPublishedAt?: (PublishedAtFilter | null)
  _isValid?: (BooleanFilter | null)
  _publicationScheduledAt?: (PublishedAtFilter | null)
  _publishedAt?: (PublishedAtFilter | null)
  _status?: (StatusFilter | null)
  _unpublishingScheduledAt?: (PublishedAtFilter | null)
  _updatedAt?: (UpdatedAtFilter | null)
  createdAt?: (CreatedAtFilter | null)
  id?: (ItemIdFilter | null)
  svg?: (TextFilter | null)
  updatedAt?: (UpdatedAtFilter | null)
}
export type SwapWeeklyPlanDto = {
  from: number
  to: number
}
export type TextFilter = {
  exists?: (any | null)
  isBlank?: (any | null)
  matches?: (StringMatchesFilter | null)
  notMatches?: (StringMatchesFilter | null)
}
export type TypeFilter = {
  eq?: (UploadType | null)
  in?: (UploadType | null)[]
  neq?: (UploadType | null)
  notIn?: (UploadType | null)[]
}
export type UpdateLandingPageWorkflowStageFilter = {
  eq?: (UpdateLandingPageWorkflowStage | null)
  in?: UpdateLandingPageWorkflowStage[]
  neq?: (UpdateLandingPageWorkflowStage | null)
  notIn?: UpdateLandingPageWorkflowStage[]
}
export type UpdateWeeklyPlanDto = {
  endDate: any
  startDate: any
}
export type UpdatedAtFilter = {
  eq?: (any | null)
  exists?: (any | null)
  gt?: (any | null)
  gte?: (any | null)
  lt?: (any | null)
  lte?: (any | null)
  neq?: (any | null)
}
export type UploadAltFilter = {
  eq?: (string | null)
  exists?: (any | null)
  in?: (string | null)[]
  matches?: (StringMatchesFilter | null)
  neq?: (string | null)
  notIn?: (string | null)[]
  notMatches?: (StringMatchesFilter | null)
}
export type UploadAuthorFilter = {
  exists?: (any | null)
  matches?: (StringMatchesFilter | null)
  notMatches?: (StringMatchesFilter | null)
}
export type UploadBasenameFilter = {
  matches?: (StringMatchesFilter | null)
  notMatches?: (StringMatchesFilter | null)
}
export type UploadColorsFilter = {
  allIn?: (ColorBucketType | null)[]
  anyIn?: (ColorBucketType | null)[]
  contains?: (ColorBucketType | null)
  eq?: (ColorBucketType | null)[]
  notIn?: (ColorBucketType | null)[]
}
export type UploadCopyrightFilter = {
  exists?: (any | null)
  matches?: (StringMatchesFilter | null)
  notMatches?: (StringMatchesFilter | null)
}
export type UploadCreatedAtFilter = {
  eq?: (any | null)
  gt?: (any | null)
  gte?: (any | null)
  lt?: (any | null)
  lte?: (any | null)
  neq?: (any | null)
}
export type UploadFilenameFilter = {
  matches?: (StringMatchesFilter | null)
  notMatches?: (StringMatchesFilter | null)
}
export type UploadFilter = {
  OR?: (UploadFilter | null)[]
  _createdAt?: (UploadCreatedAtFilter | null)
  _updatedAt?: (UploadUpdatedAtFilter | null)
  alt?: (UploadAltFilter | null)
  author?: (UploadAuthorFilter | null)
  basename?: (UploadBasenameFilter | null)
  colors?: (UploadColorsFilter | null)
  copyright?: (UploadCopyrightFilter | null)
  filename?: (UploadFilenameFilter | null)
  format?: (UploadFormatFilter | null)
  height?: (UploadHeightFilter | null)
  id?: (UploadIdFilter | null)
  inUse?: (InUseFilter | null)
  md5?: (UploadMd5Filter | null)
  mimeType?: (UploadMimeTypeFilter | null)
  notes?: (UploadNotesFilter | null)
  orientation?: (OrientationFilter | null)
  resolution?: (ResolutionFilter | null)
  size?: (UploadSizeFilter | null)
  smartTags?: (UploadTagsFilter | null)
  tags?: (UploadTagsFilter | null)
  title?: (UploadTitleFilter | null)
  type?: (TypeFilter | null)
  width?: (UploadWidthFilter | null)
}
export type UploadFormatFilter = {
  eq?: (string | null)
  in?: (string | null)[]
  neq?: (string | null)
  notIn?: (string | null)[]
}
export type UploadHeightFilter = {
  eq?: (any | null)
  gt?: (any | null)
  gte?: (any | null)
  lt?: (any | null)
  lte?: (any | null)
  neq?: (any | null)
}
export type UploadIdFilter = {
  eq?: (any | null)
  in?: (any | null)[]
  neq?: (any | null)
  notIn?: (any | null)[]
}
export type UploadMd5Filter = {
  eq?: (string | null)
  in?: (string | null)[]
  neq?: (string | null)
  notIn?: (string | null)[]
}
export type UploadMimeTypeFilter = {
  eq?: (string | null)
  in?: (string | null)[]
  matches?: (StringMatchesFilter | null)
  neq?: (string | null)
  notIn?: (string | null)[]
  notMatches?: (StringMatchesFilter | null)
}
export type UploadNotesFilter = {
  exists?: (any | null)
  matches?: (StringMatchesFilter | null)
  notMatches?: (StringMatchesFilter | null)
}
export type UploadSizeFilter = {
  eq?: (any | null)
  gt?: (any | null)
  gte?: (any | null)
  lt?: (any | null)
  lte?: (any | null)
  neq?: (any | null)
}
export type UploadTagsFilter = {
  allIn?: string[]
  anyIn?: string[]
  contains?: (string | null)
  eq?: string[]
  notIn?: string[]
}
export type UploadTitleFilter = {
  eq?: (string | null)
  exists?: (any | null)
  in?: (string | null)[]
  matches?: (StringMatchesFilter | null)
  neq?: (string | null)
  notIn?: (string | null)[]
  notMatches?: (StringMatchesFilter | null)
}
export type UploadUpdatedAtFilter = {
  eq?: (any | null)
  gt?: (any | null)
  gte?: (any | null)
  lt?: (any | null)
  lte?: (any | null)
  neq?: (any | null)
}
export type UploadWidthFilter = {
  eq?: (any | null)
  gt?: (any | null)
  gte?: (any | null)
  lt?: (any | null)
  lte?: (any | null)
  neq?: (any | null)
}
export type WeeklyPlanSortInput = {
  fieldName: SortableWeeklyPlanFields
  sortDirection: SortDirection
}
export type WeeklyPlanWhereInput = {
  type?: (PackSubCategory | null)
}
export type WlpMealPlanSortInput = {
  fieldName: SortableMealPlanFields
  sortDirection: SortDirection
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  customerProfiles: ObservableMap<string, CustomerProfileModelType>
}


/**
* Enums for the names of base graphql actions
*/



/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Address', () => AddressModel], ['AppContent', () => AppContentModel], ['Attribute', () => AttributeModel], ['AuthRTO', () => AuthRtoModel], ['BlogArticleModelContentField', () => BlogArticleModelContentFieldModel], ['BlogArticleRecord', () => BlogArticleRecordModel], ['BlogBodyImageRecord', () => BlogBodyImageRecordModel], ['BlogCategoryRecord', () => BlogCategoryRecordModel], ['BulletElementRecord', () => BulletElementRecordModel], ['Cart', () => CartModel], ['CartAddress', () => CartAddressModel], ['CartDelivery', () => CartDeliveryModel], ['CartLineItem', () => CartLineItemModel], ['CartPlan', () => CartPlanModel], ['CartTotal', () => CartTotalModel], ['CollectionMetadata', () => CollectionMetadataModel], ['ColorField', () => ColorFieldModel], ['Customer', () => CustomerModel], ['CustomerAddress', () => CustomerAddressModel], ['CustomerAttribute', () => CustomerAttributeModel], ['CustomerInfo', () => CustomerInfoModel], ['CustomerPayment', () => CustomerPaymentModel], ['CustomerProfile', () => CustomerProfileModel], ['CustomerProfileOutput', () => CustomerProfileOutputModel], ['DailyOrder', () => DailyOrderModel], ['DailyOrderProduct', () => DailyOrderProductModel], ['DeliveryDetail', () => DeliveryDetailModel], ['DeliveryInfo', () => DeliveryInfoModel], ['DownloadAppRecord', () => DownloadAppRecordModel], ['DynamicMealPlanRto', () => DynamicMealPlanRtoModel], ['FileField', () => FileFieldModel], ['FilterRecord', () => FilterRecordModel], ['FilterSectionRecord', () => FilterSectionRecordModel], ['FilterValueRecord', () => FilterValueRecordModel], ['FixedFemaleMealPlanRto', () => FixedFemaleMealPlanRtoModel], ['FixedMaleMealPlanRto', () => FixedMaleMealPlanRtoModel], ['FooterColumnRecord', () => FooterColumnRecordModel], ['FooterLinkSectionRecord', () => FooterLinkSectionRecordModel], ['FooterRecord', () => FooterRecordModel], ['FooterTextSectionRecord', () => FooterTextSectionRecordModel], ['GeneralCampaignSectionRecord', () => GeneralCampaignSectionRecordModel], ['GeneralDeliveryBannerSectionRecord', () => GeneralDeliveryBannerSectionRecordModel], ['GeneralHowItWorksSectionRecord', () => GeneralHowItWorksSectionRecordModel], ['GeneralNutritionalTestimonialRecord', () => GeneralNutritionalTestimonialRecordModel], ['GeneralPageLearnMoreRecord', () => GeneralPageLearnMoreRecordModel], ['GeneralPageRecord', () => GeneralPageRecordModel], ['GeneralPlanSectionRecord', () => GeneralPlanSectionRecordModel], ['GeneralReviewSectionRecord', () => GeneralReviewSectionRecordModel], ['GeneralStockistSectionRecord', () => GeneralStockistSectionRecordModel], ['GiftCertificate', () => GiftCertificateModel], ['GlobalSeoField', () => GlobalSeoFieldModel], ['GoalBasedPlanRto', () => GoalBasedPlanRtoModel], ['GoogleAuthRTO', () => GoogleAuthRtoModel], ['HomePageHeaderSectionRecord', () => HomePageHeaderSectionRecordModel], ['ImageLinkRecord', () => ImageLinkRecordModel], ['InstructionRecord', () => InstructionRecordModel], ['LandingPageBenefitsSectionRecord', () => LandingPageBenefitsSectionRecordModel], ['LandingPageBundleSectionRecord', () => LandingPageBundleSectionRecordModel], ['LandingPageHeaderSectionRecord', () => LandingPageHeaderSectionRecordModel], ['LandingPageProductSectionRecord', () => LandingPageProductSectionRecordModel], ['LandingPageRecord', () => LandingPageRecordModel], ['LearnMoreCardRecord', () => LearnMoreCardRecordModel], ['LineItem', () => LineItemModel], ['LinkRecord', () => LinkRecordModel], ['LinkSeparatorRecord', () => LinkSeparatorRecordModel], ['ListElementRecord', () => ListElementRecordModel], ['MealPlan', () => MealPlanModel], ['MealPlanItem', () => MealPlanItemModel], ['MealPlanRecord', () => MealPlanRecordModel], ['Meta', () => MetaModel], ['NavbarLinkRecord', () => NavbarLinkRecordModel], ['NavbarRecord', () => NavbarRecordModel], ['NutritionalInfo', () => NutritionalInfoModel], ['NutritionalPanelInfo', () => NutritionalPanelInfoModel], ['Order', () => OrderModel], ['OrderCustomer', () => OrderCustomerModel], ['OrderDelivery', () => OrderDeliveryModel], ['OrderPlan', () => OrderPlanModel], ['OrderTotal', () => OrderTotalModel], ['Payment', () => PaymentModel], ['PaymentCard', () => PaymentCardModel], ['PlanCardRecord', () => PlanCardRecordModel], ['PlanTileRecord', () => PlanTileRecordModel], ['Product', () => ProductModel], ['ProductAttribute', () => ProductAttributeModel], ['ProductBenefitRecord', () => ProductBenefitRecordModel], ['ProductCardRecord', () => ProductCardRecordModel], ['ProductCategoryCardRecord', () => ProductCategoryCardRecordModel], ['ProductCategoryRecord', () => ProductCategoryRecordModel], ['ProductCategorySectionRecord', () => ProductCategorySectionRecordModel], ['ProductCollectionDto', () => ProductCollectionDtoModel], ['ProductDietaryTagRecord', () => ProductDietaryTagRecordModel], ['ProductInstructionRecord', () => ProductInstructionRecordModel], ['ProductModelDescriptionField', () => ProductModelDescriptionFieldModel], ['ProductPosition', () => ProductPositionModel], ['ProductPrimaryTagRecord', () => ProductPrimaryTagRecordModel], ['ProductRecord', () => ProductRecordModel], ['ProductSecondaryTagRecord', () => ProductSecondaryTagRecordModel], ['ProductSubcategoryRecord', () => ProductSubcategoryRecordModel], ['ProductTagRecord', () => ProductTagRecordModel], ['Promotion', () => PromotionModel], ['ReferHistory', () => ReferHistoryModel], ['ResponsiveImage', () => ResponsiveImageModel], ['ReviewElementRecord', () => ReviewElementRecordModel], ['SeoField', () => SeoFieldModel], ['Site', () => SiteModel], ['SortMenuRecord', () => SortMenuRecordModel], ['SortOptionRecord', () => SortOptionRecordModel], ['SubProduct', () => SubProductModel], ['SubscriptionEntity', () => SubscriptionEntityModel], ['SubscriptionFuture', () => SubscriptionFutureModel], ['SubscriptionPlan', () => SubscriptionPlanModel], ['SvgTestRecord', () => SvgTestRecordModel], ['Tag', () => TagModel], ['TextRecord', () => TextRecordModel], ['Transaction', () => TransactionModel], ['UploadVideoField', () => UploadVideoFieldModel], ['User', () => UserModel], ['WeeklyPlan', () => WeeklyPlanModel], ['WeeklyPlanRTO', () => WeeklyPlanRtoModel], ['focalPoint', () => FocalPointModel], ['mutation_root', () => MutationRootModel], ['query_root', () => QueryRootModel]], ['CustomerProfile'], "js"))
  .props({
    customerProfiles: types.optional(types.map(types.late((): any => CustomerProfileModel)), {})
  })
  .actions(self => ({
    // Returns meta information regarding a record collection
    query_allBlogArticlesMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (BlogArticleModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allBlogArticlesMetaCms: CollectionMetadataModelType}>(`query _allBlogArticlesMetaCms($fallbackLocales: [SiteLocale!], $filter: BlogArticleModelFilter, $locale: SiteLocale) { _allBlogArticlesMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding a record collection
    query_allBlogCategoriesMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (BlogCategoryModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allBlogCategoriesMetaCms: CollectionMetadataModelType}>(`query _allBlogCategoriesMetaCms($fallbackLocales: [SiteLocale!], $filter: BlogCategoryModelFilter, $locale: SiteLocale) { _allBlogCategoriesMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding a record collection
    query_allDownloadAppsMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (DownloadAppModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allDownloadAppsMetaCms: CollectionMetadataModelType}>(`query _allDownloadAppsMetaCms($fallbackLocales: [SiteLocale!], $filter: DownloadAppModelFilter, $locale: SiteLocale) { _allDownloadAppsMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding a record collection
    query_allFiltersMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (FilterModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allFiltersMetaCms: CollectionMetadataModelType}>(`query _allFiltersMetaCms($fallbackLocales: [SiteLocale!], $filter: FilterModelFilter, $locale: SiteLocale) { _allFiltersMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding a record collection
    query_allGeneralPagesMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (GeneralPageModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allGeneralPagesMetaCms: CollectionMetadataModelType}>(`query _allGeneralPagesMetaCms($fallbackLocales: [SiteLocale!], $filter: GeneralPageModelFilter, $locale: SiteLocale) { _allGeneralPagesMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding a record collection
    query_allLandingPagesMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (LandingPageModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allLandingPagesMetaCms: CollectionMetadataModelType}>(`query _allLandingPagesMetaCms($fallbackLocales: [SiteLocale!], $filter: LandingPageModelFilter, $locale: SiteLocale) { _allLandingPagesMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding a record collection
    query_allMealPlansMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (MealPlanModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allMealPlansMetaCms: CollectionMetadataModelType}>(`query _allMealPlansMetaCms($fallbackLocales: [SiteLocale!], $filter: MealPlanModelFilter, $locale: SiteLocale) { _allMealPlansMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding a record collection
    query_allProductCategoriesMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductCategoryModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allProductCategoriesMetaCms: CollectionMetadataModelType}>(`query _allProductCategoriesMetaCms($fallbackLocales: [SiteLocale!], $filter: ProductCategoryModelFilter, $locale: SiteLocale) { _allProductCategoriesMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding a record collection
    query_allProductDietaryTagsMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductDietaryTagModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allProductDietaryTagsMetaCms: CollectionMetadataModelType}>(`query _allProductDietaryTagsMetaCms($fallbackLocales: [SiteLocale!], $filter: ProductDietaryTagModelFilter, $locale: SiteLocale) { _allProductDietaryTagsMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding a record collection
    query_allProductInstructionsMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductInstructionModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allProductInstructionsMetaCms: CollectionMetadataModelType}>(`query _allProductInstructionsMetaCms($fallbackLocales: [SiteLocale!], $filter: ProductInstructionModelFilter, $locale: SiteLocale) { _allProductInstructionsMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding a record collection
    query_allProductPrimaryTagsMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductPrimaryTagModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allProductPrimaryTagsMetaCms: CollectionMetadataModelType}>(`query _allProductPrimaryTagsMetaCms($fallbackLocales: [SiteLocale!], $filter: ProductPrimaryTagModelFilter, $locale: SiteLocale) { _allProductPrimaryTagsMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding a record collection
    query_allProductSecondaryTagsMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductSecondaryTagModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allProductSecondaryTagsMetaCms: CollectionMetadataModelType}>(`query _allProductSecondaryTagsMetaCms($fallbackLocales: [SiteLocale!], $filter: ProductSecondaryTagModelFilter, $locale: SiteLocale) { _allProductSecondaryTagsMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding a record collection
    query_allProductSubcategoriesMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductSubcategoryModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allProductSubcategoriesMetaCms: CollectionMetadataModelType}>(`query _allProductSubcategoriesMetaCms($fallbackLocales: [SiteLocale!], $filter: ProductSubcategoryModelFilter, $locale: SiteLocale) { _allProductSubcategoriesMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding a record collection
    query_allProductTagsMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductTagModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allProductTagsMetaCms: CollectionMetadataModelType}>(`query _allProductTagsMetaCms($fallbackLocales: [SiteLocale!], $filter: ProductTagModelFilter, $locale: SiteLocale) { _allProductTagsMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding a record collection
    query_allProductsMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allProductsMetaCms: CollectionMetadataModelType}>(`query _allProductsMetaCms($fallbackLocales: [SiteLocale!], $filter: ProductModelFilter, $locale: SiteLocale) { _allProductsMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding a record collection
    query_allSortMenusMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (SortMenuModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allSortMenusMetaCms: CollectionMetadataModelType}>(`query _allSortMenusMetaCms($fallbackLocales: [SiteLocale!], $filter: SortMenuModelFilter, $locale: SiteLocale) { _allSortMenusMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding a record collection
    query_allSvgTestsMetaCms(variables: { fallbackLocales?: SiteLocale[], filter?: (SvgTestModelFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allSvgTestsMetaCms: CollectionMetadataModelType}>(`query _allSvgTestsMetaCms($fallbackLocales: [SiteLocale!], $filter: SvgTestModelFilter, $locale: SiteLocale) { _allSvgTestsMetaCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns meta information regarding an assets collection
    query_allUploadsMetaCms(variables: { filter?: (UploadFilter | null), locale?: (SiteLocale | null) }, resultSelector: string | ((qb: CollectionMetadataModelSelector) => CollectionMetadataModelSelector) = collectionMetadataModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _allUploadsMetaCms: CollectionMetadataModelType}>(`query _allUploadsMetaCms($filter: UploadFilter, $locale: SiteLocale) { _allUploadsMetaCms(filter: $filter, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new CollectionMetadataModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns the single instance record
    query_siteCms(variables: { fallbackLocales?: SiteLocale[], locale?: (SiteLocale | null) }, resultSelector: string | ((qb: SiteModelSelector) => SiteModelSelector) = siteModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ _siteCms: SiteModelType}>(`query _siteCms($fallbackLocales: [SiteLocale!], $locale: SiteLocale) { _siteCms(fallbackLocales: $fallbackLocales, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new SiteModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllBlogArticlesCms(variables: { fallbackLocales?: SiteLocale[], filter?: (BlogArticleModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (BlogArticleModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: BlogArticleRecordModelSelector) => BlogArticleRecordModelSelector) = blogArticleRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allBlogArticlesCms: BlogArticleRecordModelType[]}>(`query allBlogArticlesCms($fallbackLocales: [SiteLocale!], $filter: BlogArticleModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [BlogArticleModelOrderBy], $skip: IntType) { allBlogArticlesCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new BlogArticleRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllBlogCategoriesCms(variables: { fallbackLocales?: SiteLocale[], filter?: (BlogCategoryModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (BlogCategoryModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: BlogCategoryRecordModelSelector) => BlogCategoryRecordModelSelector) = blogCategoryRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allBlogCategoriesCms: BlogCategoryRecordModelType[]}>(`query allBlogCategoriesCms($fallbackLocales: [SiteLocale!], $filter: BlogCategoryModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [BlogCategoryModelOrderBy], $skip: IntType) { allBlogCategoriesCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new BlogCategoryRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllDownloadAppsCms(variables: { fallbackLocales?: SiteLocale[], filter?: (DownloadAppModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (DownloadAppModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: DownloadAppRecordModelSelector) => DownloadAppRecordModelSelector) = downloadAppRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allDownloadAppsCms: DownloadAppRecordModelType[]}>(`query allDownloadAppsCms($fallbackLocales: [SiteLocale!], $filter: DownloadAppModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [DownloadAppModelOrderBy], $skip: IntType) { allDownloadAppsCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new DownloadAppRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllFiltersCms(variables: { fallbackLocales?: SiteLocale[], filter?: (FilterModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (FilterModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: FilterRecordModelSelector) => FilterRecordModelSelector) = filterRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allFiltersCms: FilterRecordModelType[]}>(`query allFiltersCms($fallbackLocales: [SiteLocale!], $filter: FilterModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [FilterModelOrderBy], $skip: IntType) { allFiltersCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new FilterRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllGeneralPagesCms(variables: { fallbackLocales?: SiteLocale[], filter?: (GeneralPageModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (GeneralPageModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: GeneralPageRecordModelSelector) => GeneralPageRecordModelSelector) = generalPageRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allGeneralPagesCms: GeneralPageRecordModelType[]}>(`query allGeneralPagesCms($fallbackLocales: [SiteLocale!], $filter: GeneralPageModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [GeneralPageModelOrderBy], $skip: IntType) { allGeneralPagesCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new GeneralPageRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllLandingPagesCms(variables: { fallbackLocales?: SiteLocale[], filter?: (LandingPageModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (LandingPageModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: LandingPageRecordModelSelector) => LandingPageRecordModelSelector) = landingPageRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allLandingPagesCms: LandingPageRecordModelType[]}>(`query allLandingPagesCms($fallbackLocales: [SiteLocale!], $filter: LandingPageModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [LandingPageModelOrderBy], $skip: IntType) { allLandingPagesCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new LandingPageRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllMealPlansCms(variables: { fallbackLocales?: SiteLocale[], filter?: (MealPlanModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (MealPlanModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: MealPlanRecordModelSelector) => MealPlanRecordModelSelector) = mealPlanRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allMealPlansCms: MealPlanRecordModelType[]}>(`query allMealPlansCms($fallbackLocales: [SiteLocale!], $filter: MealPlanModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [MealPlanModelOrderBy], $skip: IntType) { allMealPlansCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new MealPlanRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllProductCategoriesCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductCategoryModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (ProductCategoryModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: ProductCategoryRecordModelSelector) => ProductCategoryRecordModelSelector) = productCategoryRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allProductCategoriesCms: ProductCategoryRecordModelType[]}>(`query allProductCategoriesCms($fallbackLocales: [SiteLocale!], $filter: ProductCategoryModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [ProductCategoryModelOrderBy], $skip: IntType) { allProductCategoriesCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductCategoryRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllProductDietaryTagsCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductDietaryTagModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (ProductDietaryTagModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: ProductDietaryTagRecordModelSelector) => ProductDietaryTagRecordModelSelector) = productDietaryTagRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allProductDietaryTagsCms: ProductDietaryTagRecordModelType[]}>(`query allProductDietaryTagsCms($fallbackLocales: [SiteLocale!], $filter: ProductDietaryTagModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [ProductDietaryTagModelOrderBy], $skip: IntType) { allProductDietaryTagsCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductDietaryTagRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllProductInstructionsCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductInstructionModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (ProductInstructionModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: ProductInstructionRecordModelSelector) => ProductInstructionRecordModelSelector) = productInstructionRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allProductInstructionsCms: ProductInstructionRecordModelType[]}>(`query allProductInstructionsCms($fallbackLocales: [SiteLocale!], $filter: ProductInstructionModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [ProductInstructionModelOrderBy], $skip: IntType) { allProductInstructionsCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductInstructionRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllProductPrimaryTagsCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductPrimaryTagModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (ProductPrimaryTagModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: ProductPrimaryTagRecordModelSelector) => ProductPrimaryTagRecordModelSelector) = productPrimaryTagRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allProductPrimaryTagsCms: ProductPrimaryTagRecordModelType[]}>(`query allProductPrimaryTagsCms($fallbackLocales: [SiteLocale!], $filter: ProductPrimaryTagModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [ProductPrimaryTagModelOrderBy], $skip: IntType) { allProductPrimaryTagsCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductPrimaryTagRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllProductSecondaryTagsCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductSecondaryTagModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (ProductSecondaryTagModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: ProductSecondaryTagRecordModelSelector) => ProductSecondaryTagRecordModelSelector) = productSecondaryTagRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allProductSecondaryTagsCms: ProductSecondaryTagRecordModelType[]}>(`query allProductSecondaryTagsCms($fallbackLocales: [SiteLocale!], $filter: ProductSecondaryTagModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [ProductSecondaryTagModelOrderBy], $skip: IntType) { allProductSecondaryTagsCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductSecondaryTagRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllProductSubcategoriesCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductSubcategoryModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (ProductSubcategoryModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: ProductSubcategoryRecordModelSelector) => ProductSubcategoryRecordModelSelector) = productSubcategoryRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allProductSubcategoriesCms: ProductSubcategoryRecordModelType[]}>(`query allProductSubcategoriesCms($fallbackLocales: [SiteLocale!], $filter: ProductSubcategoryModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [ProductSubcategoryModelOrderBy], $skip: IntType) { allProductSubcategoriesCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductSubcategoryRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllProductTagsCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductTagModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (ProductTagModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: ProductTagRecordModelSelector) => ProductTagRecordModelSelector) = productTagRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allProductTagsCms: ProductTagRecordModelType[]}>(`query allProductTagsCms($fallbackLocales: [SiteLocale!], $filter: ProductTagModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [ProductTagModelOrderBy], $skip: IntType) { allProductTagsCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductTagRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllProductsCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (ProductModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: ProductRecordModelSelector) => ProductRecordModelSelector) = productRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allProductsCms: ProductRecordModelType[]}>(`query allProductsCms($fallbackLocales: [SiteLocale!], $filter: ProductModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [ProductModelOrderBy], $skip: IntType) { allProductsCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllSortMenusCms(variables: { fallbackLocales?: SiteLocale[], filter?: (SortMenuModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (SortMenuModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: SortMenuRecordModelSelector) => SortMenuRecordModelSelector) = sortMenuRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allSortMenusCms: SortMenuRecordModelType[]}>(`query allSortMenusCms($fallbackLocales: [SiteLocale!], $filter: SortMenuModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [SortMenuModelOrderBy], $skip: IntType) { allSortMenusCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new SortMenuRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of records
    queryAllSvgTestsCms(variables: { fallbackLocales?: SiteLocale[], filter?: (SvgTestModelFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (SvgTestModelOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: SvgTestRecordModelSelector) => SvgTestRecordModelSelector) = svgTestRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allSvgTestsCms: SvgTestRecordModelType[]}>(`query allSvgTestsCms($fallbackLocales: [SiteLocale!], $filter: SvgTestModelFilter, $first: IntType, $locale: SiteLocale, $orderBy: [SvgTestModelOrderBy], $skip: IntType) { allSvgTestsCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new SvgTestRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a collection of assets
    queryAllUploadsCms(variables: { fallbackLocales?: SiteLocale[], filter?: (UploadFilter | null), first?: (any | null), locale?: (SiteLocale | null), orderBy?: (UploadOrderBy | null)[], skip?: (any | null) }, resultSelector: string | ((qb: FileFieldModelSelector) => FileFieldModelSelector) = fileFieldModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allUploadsCms: FileFieldModelType[]}>(`query allUploadsCms($fallbackLocales: [SiteLocale!], $filter: UploadFilter, $first: IntType, $locale: SiteLocale, $orderBy: [UploadOrderBy], $skip: IntType) { allUploadsCms(fallbackLocales: $fallbackLocales, filter: $filter, first: $first, locale: $locale, orderBy: $orderBy, skip: $skip) {
        ${typeof resultSelector === "function" ? resultSelector(new FileFieldModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAppContent(variables: { subType?: (ContentSubType | null), type: ContentType }, resultSelector: string | ((qb: AppContentModelSelector) => AppContentModelSelector) = appContentModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ appContent: AppContentModelType[]}>(`query appContent($subType: ContentSubType, $type: ContentType!) { appContent(subType: $subType, type: $type) {
        ${typeof resultSelector === "function" ? resultSelector(new AppContentModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAuthStatus(variables?: {  }, options: QueryOptions = {}) {
      return self.query<{ authStatus: string }>(`query authStatus { authStatus }`, variables, options)
    },
    // Returns a specific record
    queryBlogArticleCms(variables: { fallbackLocales?: SiteLocale[], filter?: (BlogArticleModelFilter | null), locale?: (SiteLocale | null), orderBy?: (BlogArticleModelOrderBy | null)[] }, resultSelector: string | ((qb: BlogArticleRecordModelSelector) => BlogArticleRecordModelSelector) = blogArticleRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ blogArticleCms: BlogArticleRecordModelType}>(`query blogArticleCms($fallbackLocales: [SiteLocale!], $filter: BlogArticleModelFilter, $locale: SiteLocale, $orderBy: [BlogArticleModelOrderBy]) { blogArticleCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new BlogArticleRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific record
    queryBlogCategoryCms(variables: { fallbackLocales?: SiteLocale[], filter?: (BlogCategoryModelFilter | null), locale?: (SiteLocale | null), orderBy?: (BlogCategoryModelOrderBy | null)[] }, resultSelector: string | ((qb: BlogCategoryRecordModelSelector) => BlogCategoryRecordModelSelector) = blogCategoryRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ blogCategoryCms: BlogCategoryRecordModelType}>(`query blogCategoryCms($fallbackLocales: [SiteLocale!], $filter: BlogCategoryModelFilter, $locale: SiteLocale, $orderBy: [BlogCategoryModelOrderBy]) { blogCategoryCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new BlogCategoryRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCart(variables?: {  }, resultSelector: string | ((qb: CartModelSelector) => CartModelSelector) = cartModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ cart: CartModelType}>(`query cart { cart {
        ${typeof resultSelector === "function" ? resultSelector(new CartModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCustomer(variables?: {  }, resultSelector: string | ((qb: CustomerProfileOutputModelSelector) => CustomerProfileOutputModelSelector) = customerProfileOutputModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ customer: CustomerProfileOutputModelType}>(`query customer { customer {
        ${typeof resultSelector === "function" ? resultSelector(new CustomerProfileOutputModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCustomerInfo(variables?: {  }, resultSelector: string | ((qb: CustomerInfoModelSelector) => CustomerInfoModelSelector) = customerInfoModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ customerInfo: CustomerInfoModelType}>(`query customerInfo { customerInfo {
        ${typeof resultSelector === "function" ? resultSelector(new CustomerInfoModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryDeliveryInfo(variables: { date?: (any | null), disableExpress?: (boolean | null), lookup: string, maxDaysInFuture?: (number | null), maxDeliveryDayCount?: (number | null), skipHolidays?: (boolean | null), type?: (DeliveryInfoLookupType | null) }, resultSelector: string | ((qb: DeliveryInfoModelSelector) => DeliveryInfoModelSelector) = deliveryInfoModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ deliveryInfo: DeliveryInfoModelType[]}>(`query deliveryInfo($date: DateTime, $disableExpress: Boolean, $lookup: String!, $maxDaysInFuture: Int, $maxDeliveryDayCount: Int, $skipHolidays: Boolean, $type: DeliveryInfoLookupType) { deliveryInfo(date: $date, disableExpress: $disableExpress, lookup: $lookup, maxDaysInFuture: $maxDaysInFuture, maxDeliveryDayCount: $maxDeliveryDayCount, skipHolidays: $skipHolidays, type: $type) {
        ${typeof resultSelector === "function" ? resultSelector(new DeliveryInfoModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific record
    queryDownloadAppCms(variables: { fallbackLocales?: SiteLocale[], filter?: (DownloadAppModelFilter | null), locale?: (SiteLocale | null), orderBy?: (DownloadAppModelOrderBy | null)[] }, resultSelector: string | ((qb: DownloadAppRecordModelSelector) => DownloadAppRecordModelSelector) = downloadAppRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ downloadAppCms: DownloadAppRecordModelType}>(`query downloadAppCms($fallbackLocales: [SiteLocale!], $filter: DownloadAppModelFilter, $locale: SiteLocale, $orderBy: [DownloadAppModelOrderBy]) { downloadAppCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new DownloadAppRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific record
    queryFilterCms(variables: { fallbackLocales?: SiteLocale[], filter?: (FilterModelFilter | null), locale?: (SiteLocale | null), orderBy?: (FilterModelOrderBy | null)[] }, resultSelector: string | ((qb: FilterRecordModelSelector) => FilterRecordModelSelector) = filterRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ filterCms: FilterRecordModelType}>(`query filterCms($fallbackLocales: [SiteLocale!], $filter: FilterModelFilter, $locale: SiteLocale, $orderBy: [FilterModelOrderBy]) { filterCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new FilterRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns the single instance record
    queryFooterCms(variables: { fallbackLocales?: SiteLocale[], locale?: (SiteLocale | null) }, resultSelector: string | ((qb: FooterRecordModelSelector) => FooterRecordModelSelector) = footerRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ footerCms: FooterRecordModelType}>(`query footerCms($fallbackLocales: [SiteLocale!], $locale: SiteLocale) { footerCms(fallbackLocales: $fallbackLocales, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new FooterRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific record
    queryGeneralPageCms(variables: { fallbackLocales?: SiteLocale[], filter?: (GeneralPageModelFilter | null), locale?: (SiteLocale | null), orderBy?: (GeneralPageModelOrderBy | null)[] }, resultSelector: string | ((qb: GeneralPageRecordModelSelector) => GeneralPageRecordModelSelector) = generalPageRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ generalPageCms: GeneralPageRecordModelType}>(`query generalPageCms($fallbackLocales: [SiteLocale!], $filter: GeneralPageModelFilter, $locale: SiteLocale, $orderBy: [GeneralPageModelOrderBy]) { generalPageCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new GeneralPageRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGoalBasedPlans(variables: { ageRange: AgeRanges, calorie: number, gender: Gender, goal: Goal }, resultSelector: string | ((qb: GoalBasedPlanRtoModelSelector) => GoalBasedPlanRtoModelSelector) = goalBasedPlanRtoModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ goalBasedPlans: GoalBasedPlanRtoModelType[]}>(`query goalBasedPlans($ageRange: AgeRanges!, $calorie: Float!, $gender: Gender!, $goal: Goal!) { goalBasedPlans(ageRange: $ageRange, calorie: $calorie, gender: $gender, goal: $goal) {
        ${typeof resultSelector === "function" ? resultSelector(new GoalBasedPlanRtoModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGoogleAuth(variables?: {  }, resultSelector: string | ((qb: GoogleAuthRtoModelSelector) => GoogleAuthRtoModelSelector) = googleAuthRtoModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ googleAuth: GoogleAuthRtoModelType}>(`query googleAuth { googleAuth {
        ${typeof resultSelector === "function" ? resultSelector(new GoogleAuthRtoModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific record
    queryLandingPageCms(variables: { fallbackLocales?: SiteLocale[], filter?: (LandingPageModelFilter | null), locale?: (SiteLocale | null), orderBy?: (LandingPageModelOrderBy | null)[] }, resultSelector: string | ((qb: LandingPageRecordModelSelector) => LandingPageRecordModelSelector) = landingPageRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ landingPageCms: LandingPageRecordModelType}>(`query landingPageCms($fallbackLocales: [SiteLocale!], $filter: LandingPageModelFilter, $locale: SiteLocale, $orderBy: [LandingPageModelOrderBy]) { landingPageCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new LandingPageRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryMealPlan(variables: { key: string }, resultSelector: string | ((qb: MealPlanModelSelector) => MealPlanModelSelector) = mealPlanModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ mealPlan: MealPlanModelType}>(`query mealPlan($key: String!) { mealPlan(key: $key) {
        ${typeof resultSelector === "function" ? resultSelector(new MealPlanModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific record
    queryMealPlanCms(variables: { fallbackLocales?: SiteLocale[], filter?: (MealPlanModelFilter | null), locale?: (SiteLocale | null), orderBy?: (MealPlanModelOrderBy | null)[] }, resultSelector: string | ((qb: MealPlanRecordModelSelector) => MealPlanRecordModelSelector) = mealPlanRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ mealPlanCms: MealPlanRecordModelType}>(`query mealPlanCms($fallbackLocales: [SiteLocale!], $filter: MealPlanModelFilter, $locale: SiteLocale, $orderBy: [MealPlanModelOrderBy]) { mealPlanCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new MealPlanRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryMealPlans(variables: { limit?: (number | null), offset?: (number | null), sort?: MealPlanSortInput[], where?: (MealPlanWhereInput | null) }, resultSelector: string | ((qb: MealPlanModelSelector) => MealPlanModelSelector) = mealPlanModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ mealPlans: MealPlanModelType[]}>(`query mealPlans($limit: Int, $offset: Int, $sort: [MealPlanSortInput!], $where: MealPlanWhereInput) { mealPlans(limit: $limit, offset: $offset, sort: $sort, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new MealPlanModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns the single instance record
    queryNavbarCms(variables: { fallbackLocales?: SiteLocale[], locale?: (SiteLocale | null) }, resultSelector: string | ((qb: NavbarRecordModelSelector) => NavbarRecordModelSelector) = navbarRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ navbarCms: NavbarRecordModelType}>(`query navbarCms($fallbackLocales: [SiteLocale!], $locale: SiteLocale) { navbarCms(fallbackLocales: $fallbackLocales, locale: $locale) {
        ${typeof resultSelector === "function" ? resultSelector(new NavbarRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryOrder(variables: { lookup: string }, resultSelector: string | ((qb: OrderModelSelector) => OrderModelSelector) = orderModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ order: OrderModelType}>(`query order($lookup: String!) { order(lookup: $lookup) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryOrders(variables: { limit?: (number | null), offset?: (number | null), sort?: OrderSortInput[], where?: (OrderWhereInput | null) }, resultSelector: string | ((qb: OrderModelSelector) => OrderModelSelector) = orderModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ orders: OrderModelType[]}>(`query orders($limit: Int, $offset: Int, $sort: [OrderSortInput!], $where: OrderWhereInput) { orders(limit: $limit, offset: $offset, sort: $sort, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryProduct(variables: { sku: string }, resultSelector: string | ((qb: ProductModelSelector) => ProductModelSelector) = productModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ product: ProductModelType}>(`query product($sku: String!) { product(sku: $sku) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific record
    queryProductCategoryCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductCategoryModelFilter | null), locale?: (SiteLocale | null), orderBy?: (ProductCategoryModelOrderBy | null)[] }, resultSelector: string | ((qb: ProductCategoryRecordModelSelector) => ProductCategoryRecordModelSelector) = productCategoryRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ productCategoryCms: ProductCategoryRecordModelType}>(`query productCategoryCms($fallbackLocales: [SiteLocale!], $filter: ProductCategoryModelFilter, $locale: SiteLocale, $orderBy: [ProductCategoryModelOrderBy]) { productCategoryCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductCategoryRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific record
    queryProductCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductModelFilter | null), locale?: (SiteLocale | null), orderBy?: (ProductModelOrderBy | null)[] }, resultSelector: string | ((qb: ProductRecordModelSelector) => ProductRecordModelSelector) = productRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ productCms: ProductRecordModelType}>(`query productCms($fallbackLocales: [SiteLocale!], $filter: ProductModelFilter, $locale: SiteLocale, $orderBy: [ProductModelOrderBy]) { productCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryProductCollection(variables: { id: string }, resultSelector: string | ((qb: ProductCollectionDtoModelSelector) => ProductCollectionDtoModelSelector) = productCollectionDtoModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ productCollection: ProductCollectionDtoModelType}>(`query productCollection($id: String!) { productCollection(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductCollectionDtoModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryProductCollections(variables: { limit?: (number | null), offset?: (number | null), sort?: ProductCollectionSortInput[], where?: (ProductCollectionWhereInput | null) }, resultSelector: string | ((qb: ProductCollectionDtoModelSelector) => ProductCollectionDtoModelSelector) = productCollectionDtoModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ productCollections: ProductCollectionDtoModelType[]}>(`query productCollections($limit: Int, $offset: Int, $sort: [ProductCollectionSortInput!], $where: ProductCollectionWhereInput) { productCollections(limit: $limit, offset: $offset, sort: $sort, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductCollectionDtoModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific record
    queryProductDietaryTagCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductDietaryTagModelFilter | null), locale?: (SiteLocale | null), orderBy?: (ProductDietaryTagModelOrderBy | null)[] }, resultSelector: string | ((qb: ProductDietaryTagRecordModelSelector) => ProductDietaryTagRecordModelSelector) = productDietaryTagRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ productDietaryTagCms: ProductDietaryTagRecordModelType}>(`query productDietaryTagCms($fallbackLocales: [SiteLocale!], $filter: ProductDietaryTagModelFilter, $locale: SiteLocale, $orderBy: [ProductDietaryTagModelOrderBy]) { productDietaryTagCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductDietaryTagRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific record
    queryProductInstructionCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductInstructionModelFilter | null), locale?: (SiteLocale | null), orderBy?: (ProductInstructionModelOrderBy | null)[] }, resultSelector: string | ((qb: ProductInstructionRecordModelSelector) => ProductInstructionRecordModelSelector) = productInstructionRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ productInstructionCms: ProductInstructionRecordModelType}>(`query productInstructionCms($fallbackLocales: [SiteLocale!], $filter: ProductInstructionModelFilter, $locale: SiteLocale, $orderBy: [ProductInstructionModelOrderBy]) { productInstructionCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductInstructionRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific record
    queryProductPrimaryTagCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductPrimaryTagModelFilter | null), locale?: (SiteLocale | null), orderBy?: (ProductPrimaryTagModelOrderBy | null)[] }, resultSelector: string | ((qb: ProductPrimaryTagRecordModelSelector) => ProductPrimaryTagRecordModelSelector) = productPrimaryTagRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ productPrimaryTagCms: ProductPrimaryTagRecordModelType}>(`query productPrimaryTagCms($fallbackLocales: [SiteLocale!], $filter: ProductPrimaryTagModelFilter, $locale: SiteLocale, $orderBy: [ProductPrimaryTagModelOrderBy]) { productPrimaryTagCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductPrimaryTagRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific record
    queryProductSecondaryTagCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductSecondaryTagModelFilter | null), locale?: (SiteLocale | null), orderBy?: (ProductSecondaryTagModelOrderBy | null)[] }, resultSelector: string | ((qb: ProductSecondaryTagRecordModelSelector) => ProductSecondaryTagRecordModelSelector) = productSecondaryTagRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ productSecondaryTagCms: ProductSecondaryTagRecordModelType}>(`query productSecondaryTagCms($fallbackLocales: [SiteLocale!], $filter: ProductSecondaryTagModelFilter, $locale: SiteLocale, $orderBy: [ProductSecondaryTagModelOrderBy]) { productSecondaryTagCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductSecondaryTagRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific record
    queryProductSubcategoryCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductSubcategoryModelFilter | null), locale?: (SiteLocale | null), orderBy?: (ProductSubcategoryModelOrderBy | null)[] }, resultSelector: string | ((qb: ProductSubcategoryRecordModelSelector) => ProductSubcategoryRecordModelSelector) = productSubcategoryRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ productSubcategoryCms: ProductSubcategoryRecordModelType}>(`query productSubcategoryCms($fallbackLocales: [SiteLocale!], $filter: ProductSubcategoryModelFilter, $locale: SiteLocale, $orderBy: [ProductSubcategoryModelOrderBy]) { productSubcategoryCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductSubcategoryRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific record
    queryProductTagCms(variables: { fallbackLocales?: SiteLocale[], filter?: (ProductTagModelFilter | null), locale?: (SiteLocale | null), orderBy?: (ProductTagModelOrderBy | null)[] }, resultSelector: string | ((qb: ProductTagRecordModelSelector) => ProductTagRecordModelSelector) = productTagRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ productTagCms: ProductTagRecordModelType}>(`query productTagCms($fallbackLocales: [SiteLocale!], $filter: ProductTagModelFilter, $locale: SiteLocale, $orderBy: [ProductTagModelOrderBy]) { productTagCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductTagRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryProducts(variables: { limit?: (number | null), offset?: (number | null), sort?: ProductSortInput[], where?: (ProductWhereInput | null) }, resultSelector: string | ((qb: ProductModelSelector) => ProductModelSelector) = productModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ products: ProductModelType[]}>(`query products($limit: Int, $offset: Int, $sort: [ProductSortInput!], $where: ProductWhereInput) { products(limit: $limit, offset: $offset, sort: $sort, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryReorder(variables: { lookup: string }, resultSelector: string | ((qb: OrderPlanModelSelector) => OrderPlanModelSelector) = orderPlanModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ reorder: OrderPlanModelType[]}>(`query reorder($lookup: String!) { reorder(lookup: $lookup) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderPlanModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific record
    querySortMenuCms(variables: { fallbackLocales?: SiteLocale[], filter?: (SortMenuModelFilter | null), locale?: (SiteLocale | null), orderBy?: (SortMenuModelOrderBy | null)[] }, resultSelector: string | ((qb: SortMenuRecordModelSelector) => SortMenuRecordModelSelector) = sortMenuRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ sortMenuCms: SortMenuRecordModelType}>(`query sortMenuCms($fallbackLocales: [SiteLocale!], $filter: SortMenuModelFilter, $locale: SiteLocale, $orderBy: [SortMenuModelOrderBy]) { sortMenuCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new SortMenuRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    querySubscription(variables?: {  }, resultSelector: string | ((qb: SubscriptionEntityModelSelector) => SubscriptionEntityModelSelector) = subscriptionEntityModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ subscription: SubscriptionEntityModelType}>(`query subscription { subscription {
        ${typeof resultSelector === "function" ? resultSelector(new SubscriptionEntityModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific record
    querySvgTestCms(variables: { fallbackLocales?: SiteLocale[], filter?: (SvgTestModelFilter | null), locale?: (SiteLocale | null), orderBy?: (SvgTestModelOrderBy | null)[] }, resultSelector: string | ((qb: SvgTestRecordModelSelector) => SvgTestRecordModelSelector) = svgTestRecordModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ svgTestCms: SvgTestRecordModelType}>(`query svgTestCms($fallbackLocales: [SiteLocale!], $filter: SvgTestModelFilter, $locale: SiteLocale, $orderBy: [SvgTestModelOrderBy]) { svgTestCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new SvgTestRecordModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Returns a specific asset
    queryUploadCms(variables: { fallbackLocales?: SiteLocale[], filter?: (UploadFilter | null), locale?: (SiteLocale | null), orderBy?: (UploadOrderBy | null)[] }, resultSelector: string | ((qb: FileFieldModelSelector) => FileFieldModelSelector) = fileFieldModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ uploadCms: FileFieldModelType}>(`query uploadCms($fallbackLocales: [SiteLocale!], $filter: UploadFilter, $locale: SiteLocale, $orderBy: [UploadOrderBy]) { uploadCms(fallbackLocales: $fallbackLocales, filter: $filter, locale: $locale, orderBy: $orderBy) {
        ${typeof resultSelector === "function" ? resultSelector(new FileFieldModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryUser(variables?: {  }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ user: UserModelType}>(`query user { user {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryWeeklyPlan(variables: { id: string }, resultSelector: string | ((qb: WeeklyPlanRtoModelSelector) => WeeklyPlanRtoModelSelector) = weeklyPlanRtoModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ weeklyPlan: WeeklyPlanRtoModelType}>(`query weeklyPlan($id: String!) { weeklyPlan(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new WeeklyPlanRtoModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryWeeklyPlans(variables: { limit?: (number | null), offset?: (number | null), sort?: WeeklyPlanSortInput[], where?: (WeeklyPlanWhereInput | null) }, resultSelector: string | ((qb: WeeklyPlanRtoModelSelector) => WeeklyPlanRtoModelSelector) = weeklyPlanRtoModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ weeklyPlans: WeeklyPlanRtoModelType[]}>(`query weeklyPlans($limit: Int, $offset: Int, $sort: [WeeklyPlanSortInput!], $where: WeeklyPlanWhereInput) { weeklyPlans(limit: $limit, offset: $offset, sort: $sort, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new WeeklyPlanRtoModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryWlpMealPlan(variables: { activeLevels?: ActiveLevels[], sort?: WlpMealPlanSortInput[], type: MealPlanSubCategory }, resultSelector: string | ((qb: WlpMealPlanRtoModelSelector) => WlpMealPlanRtoModelSelector) = wlpMealPlanRtoModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ wlpMealPlan: WlpMealPlanRtoUnion}>(`query wlpMealPlan($activeLevels: [ActiveLevels!], $sort: [WlpMealPlanSortInput!], $type: MealPlanSubCategory!) { wlpMealPlan(activeLevels: $activeLevels, sort: $sort, type: $type) {
        ${typeof resultSelector === "function" ? resultSelector(new WlpMealPlanRtoModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateAddWeeklyPlanItem(variables: { id: string, input: ExtraItemDto }, resultSelector: string | ((qb: WeeklyPlanModelSelector) => WeeklyPlanModelSelector) = weeklyPlanModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addWeeklyPlanItem: WeeklyPlanModelType}>(`mutation addWeeklyPlanItem($id: String!, $input: ExtraItemDTO!) { addWeeklyPlanItem(id: $id, input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new WeeklyPlanModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAuthCallback(variables: { input: AuthCallbackInput }, resultSelector: string | ((qb: AuthRtoModelSelector) => AuthRtoModelSelector) = authRtoModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ authCallback: AuthRtoModelType}>(`mutation authCallback($input: AuthCallbackInput!) { authCallback(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AuthRtoModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCancelSubscription(variables: { input: SubscriptionCancelInput }, resultSelector: string | ((qb: SubscriptionEntityModelSelector) => SubscriptionEntityModelSelector) = subscriptionEntityModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ cancelSubscription: SubscriptionEntityModelType}>(`mutation cancelSubscription($input: SubscriptionCancelInput!) { cancelSubscription(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new SubscriptionEntityModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteWeeklyPlanItem(variables: { day: number, id: string, itemId: string }, resultSelector: string | ((qb: WeeklyPlanModelSelector) => WeeklyPlanModelSelector) = weeklyPlanModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteWeeklyPlanItem: WeeklyPlanModelType}>(`mutation deleteWeeklyPlanItem($day: Float!, $id: String!, $itemId: String!) { deleteWeeklyPlanItem(day: $day, id: $id, itemId: $itemId) {
        ${typeof resultSelector === "function" ? resultSelector(new WeeklyPlanModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateLogin(variables: { input: LoginInput }, resultSelector: string | ((qb: AuthRtoModelSelector) => AuthRtoModelSelector) = authRtoModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ login: AuthRtoModelType}>(`mutation login($input: LoginInput!) { login(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AuthRtoModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateLoginGuest(variables?: {  }, resultSelector: string | ((qb: AuthRtoModelSelector) => AuthRtoModelSelector) = authRtoModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ loginGuest: AuthRtoModelType}>(`mutation loginGuest { loginGuest {
        ${typeof resultSelector === "function" ? resultSelector(new AuthRtoModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateLogout(variables?: {  }, optimisticUpdate?: () => void) {
      return self.mutate<{ logout: string }>(`mutation logout { logout }`, variables, optimisticUpdate)
    },
    mutateOldLogin(variables: { input: LoginInput }, resultSelector: string | ((qb: CustomerProfileOutputModelSelector) => CustomerProfileOutputModelSelector) = customerProfileOutputModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ oldLogin: CustomerProfileOutputModelType}>(`mutation oldLogin($input: LoginInput!) { oldLogin(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new CustomerProfileOutputModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutatePlaceOrder(variables: { input: PlaceOrderInput }, resultSelector: string | ((qb: OrderModelSelector) => OrderModelSelector) = orderModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ placeOrder: OrderModelType}>(`mutation placeOrder($input: PlaceOrderInput!) { placeOrder(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRegister(variables: { input: RegisterInput }, resultSelector: string | ((qb: AuthRtoModelSelector) => AuthRtoModelSelector) = authRtoModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ register: AuthRtoModelType}>(`mutation register($input: RegisterInput!) { register(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AuthRtoModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateSignup(variables: { input: OldRegisterInput }, resultSelector: string | ((qb: CustomerProfileOutputModelSelector) => CustomerProfileOutputModelSelector) = customerProfileOutputModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ signup: CustomerProfileOutputModelType}>(`mutation signup($input: OldRegisterInput!) { signup(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new CustomerProfileOutputModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateSwapWeeklyPlanDays(variables: { id: string, input: SwapWeeklyPlanDto }, resultSelector: string | ((qb: WeeklyPlanModelSelector) => WeeklyPlanModelSelector) = weeklyPlanModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ swapWeeklyPlanDays: WeeklyPlanModelType}>(`mutation swapWeeklyPlanDays($id: String!, $input: SwapWeeklyPlanDTO!) { swapWeeklyPlanDays(id: $id, input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new WeeklyPlanModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateSubscriptionDelivery(variables: { input: SubscriptionDeliveryInput }, resultSelector: string | ((qb: SubscriptionEntityModelSelector) => SubscriptionEntityModelSelector) = subscriptionEntityModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateSubscriptionDelivery: SubscriptionEntityModelType}>(`mutation updateSubscriptionDelivery($input: SubscriptionDeliveryInput!) { updateSubscriptionDelivery(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new SubscriptionEntityModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateSubscriptionDeliveryDate(variables: { input: SubscriptionDeliveryDateInput }, resultSelector: string | ((qb: SubscriptionEntityModelSelector) => SubscriptionEntityModelSelector) = subscriptionEntityModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateSubscriptionDeliveryDate: SubscriptionEntityModelType}>(`mutation updateSubscriptionDeliveryDate($input: SubscriptionDeliveryDateInput!) { updateSubscriptionDeliveryDate(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new SubscriptionEntityModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateSubscriptionFrequency(variables: { input: SubscriptionFrequencyInput }, resultSelector: string | ((qb: SubscriptionEntityModelSelector) => SubscriptionEntityModelSelector) = subscriptionEntityModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateSubscriptionFrequency: SubscriptionEntityModelType}>(`mutation updateSubscriptionFrequency($input: SubscriptionFrequencyInput!) { updateSubscriptionFrequency(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new SubscriptionEntityModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateSubscriptionFutures(variables: { input: SubscriptionFuturesInput }, resultSelector: string | ((qb: SubscriptionEntityModelSelector) => SubscriptionEntityModelSelector) = subscriptionEntityModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateSubscriptionFutures: SubscriptionEntityModelType}>(`mutation updateSubscriptionFutures($input: SubscriptionFuturesInput!) { updateSubscriptionFutures(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new SubscriptionEntityModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateSubscriptionPayment(variables: { input: SubscriptionPaymentInput }, resultSelector: string | ((qb: SubscriptionEntityModelSelector) => SubscriptionEntityModelSelector) = subscriptionEntityModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateSubscriptionPayment: SubscriptionEntityModelType}>(`mutation updateSubscriptionPayment($input: SubscriptionPaymentInput!) { updateSubscriptionPayment(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new SubscriptionEntityModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateWeeklyPlan(variables: { id: string, input: UpdateWeeklyPlanDto }, resultSelector: string | ((qb: WeeklyPlanModelSelector) => WeeklyPlanModelSelector) = weeklyPlanModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateWeeklyPlan: WeeklyPlanModelType}>(`mutation updateWeeklyPlan($id: String!, $input: UpdateWeeklyPlanDTO!) { updateWeeklyPlan(id: $id, input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new WeeklyPlanModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateWeeklyPlanItem(variables: { id: string, input: ExtraItemDto, itemId: string }, resultSelector: string | ((qb: WeeklyPlanModelSelector) => WeeklyPlanModelSelector) = weeklyPlanModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateWeeklyPlanItem: WeeklyPlanModelType}>(`mutation updateWeeklyPlanItem($id: String!, $input: ExtraItemDTO!, $itemId: String!) { updateWeeklyPlanItem(id: $id, input: $input, itemId: $itemId) {
        ${typeof resultSelector === "function" ? resultSelector(new WeeklyPlanModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpsertCart(variables: { input: CartInput }, resultSelector: string | ((qb: CartModelSelector) => CartModelSelector) = cartModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ upsertCart: CartModelType}>(`mutation upsertCart($input: CartInput!) { upsertCart(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new CartModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  })))
