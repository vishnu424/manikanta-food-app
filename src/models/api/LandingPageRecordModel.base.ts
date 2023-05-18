// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FileFieldModel, FileFieldModelType } from "./FileFieldModel"
import { FileFieldModelSelector } from "./FileFieldModel.base"
import { GeneralNutritionalTestimonialRecordModel, GeneralNutritionalTestimonialRecordModelType } from "./GeneralNutritionalTestimonialRecordModel"
import { GeneralNutritionalTestimonialRecordModelSelector } from "./GeneralNutritionalTestimonialRecordModel.base"
import { ItemStatusEnumType } from "./ItemStatusEnum"
import { LandingPageBenefitsSectionRecordModel, LandingPageBenefitsSectionRecordModelType } from "./LandingPageBenefitsSectionRecordModel"
import { LandingPageBenefitsSectionRecordModelSelector } from "./LandingPageBenefitsSectionRecordModel.base"
import { LandingPageBundleSectionRecordModel, LandingPageBundleSectionRecordModelType } from "./LandingPageBundleSectionRecordModel"
import { LandingPageBundleSectionRecordModelSelector } from "./LandingPageBundleSectionRecordModel.base"
import { LandingPageHeaderSectionRecordModel, LandingPageHeaderSectionRecordModelType } from "./LandingPageHeaderSectionRecordModel"
import { LandingPageHeaderSectionRecordModelSelector } from "./LandingPageHeaderSectionRecordModel.base"
import { LandingPageProductSectionRecordModel, LandingPageProductSectionRecordModelType } from "./LandingPageProductSectionRecordModel"
import { LandingPageProductSectionRecordModelSelector } from "./LandingPageProductSectionRecordModel.base"
import { SiteLocale } from "./SiteLocaleEnum"
import { TagModel, TagModelType } from "./TagModel"
import { TagModelSelector } from "./TagModel.base"
import { UpdateLandingPageWorkflowStageEnumType } from "./UpdateLandingPageWorkflowStageEnum"
import { RootStoreType } from "./index"


/**
 * LandingPageRecordBase
 * auto generated base class for the model LandingPageRecordModel.
 *
 * Record of type Landing Page (landing_page)
 */
export const LandingPageRecordModelBase = ModelBase
  .named('LandingPageRecord')
  .props({
    __typename: types.optional(types.literal("LandingPageRecord"), "LandingPageRecord"),
    _createdAt: types.union(types.undefined, types.frozen()),
    _firstPublishedAt: types.union(types.undefined, types.null, types.frozen()),
    _isValid: types.union(types.undefined, types.frozen()),
    _modelApiKey: types.union(types.undefined, types.string),
    _publicationScheduledAt: types.union(types.undefined, types.null, types.frozen()),
    _publishedAt: types.union(types.undefined, types.null, types.frozen()),
    /** SEO meta tags */
    _seoMetaTags: types.union(types.undefined, types.array(types.late((): any => TagModel))),
    _stage: types.union(types.undefined, UpdateLandingPageWorkflowStageEnumType),
    _status: types.union(types.undefined, ItemStatusEnumType),
    _unpublishingScheduledAt: types.union(types.undefined, types.null, types.frozen()),
    _updatedAt: types.union(types.undefined, types.frozen()),
    benefitsection: types.union(types.undefined, types.array(types.late((): any => LandingPageBenefitsSectionRecordModel))),
    bundlesection: types.union(types.undefined, types.array(types.late((): any => LandingPageBundleSectionRecordModel))),
    createdAt: types.union(types.undefined, types.frozen()),
    headersection: types.union(types.undefined, types.array(types.late((): any => LandingPageHeaderSectionRecordModel))),
    id: types.union(types.undefined, types.frozen()),
    ogImage: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    productsection: types.union(types.undefined, types.array(types.late((): any => LandingPageProductSectionRecordModel))),
    seoDescription: types.union(types.undefined, types.null, types.string),
    seoTitle: types.union(types.undefined, types.null, types.string),
    showDeliveryBanner: types.union(types.undefined, types.null, types.frozen()),
    slug: types.union(types.undefined, types.null, types.string),
    testimonialsection: types.union(types.undefined, types.array(types.late((): any => GeneralNutritionalTestimonialRecordModel))),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LandingPageRecordModelSelector extends QueryBuilder {
  get _createdAt() { return this.__attr(`_createdAt`) }
  get _firstPublishedAt() { return this.__attr(`_firstPublishedAt`) }
  get _isValid() { return this.__attr(`_isValid`) }
  get _modelApiKey() { return this.__attr(`_modelApiKey`) }
  get _publicationScheduledAt() { return this.__attr(`_publicationScheduledAt`) }
  get _publishedAt() { return this.__attr(`_publishedAt`) }
  get _stage() { return this.__attr(`_stage`) }
  get _status() { return this.__attr(`_status`) }
  get _unpublishingScheduledAt() { return this.__attr(`_unpublishingScheduledAt`) }
  get _updatedAt() { return this.__attr(`_updatedAt`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get id() { return this.__attr(`id`) }
  get seoDescription() { return this.__attr(`seoDescription`) }
  get seoTitle() { return this.__attr(`seoTitle`) }
  get showDeliveryBanner() { return this.__attr(`showDeliveryBanner`) }
  get slug() { return this.__attr(`slug`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  _seoMetaTags(builder: string | TagModelSelector | ((selector: TagModelSelector) => TagModelSelector) | undefined, args?: { locale?: (SiteLocale | null) }) { return this.__child(`_seoMetaTags`+ (args ? '('+['locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), TagModelSelector, builder) }
  benefitsection(builder: string | LandingPageBenefitsSectionRecordModelSelector | ((selector: LandingPageBenefitsSectionRecordModelSelector) => LandingPageBenefitsSectionRecordModelSelector) | undefined) { return this.__child(`benefitsection`, LandingPageBenefitsSectionRecordModelSelector, builder) }
  bundlesection(builder: string | LandingPageBundleSectionRecordModelSelector | ((selector: LandingPageBundleSectionRecordModelSelector) => LandingPageBundleSectionRecordModelSelector) | undefined) { return this.__child(`bundlesection`, LandingPageBundleSectionRecordModelSelector, builder) }
  headersection(builder: string | LandingPageHeaderSectionRecordModelSelector | ((selector: LandingPageHeaderSectionRecordModelSelector) => LandingPageHeaderSectionRecordModelSelector) | undefined) { return this.__child(`headersection`, LandingPageHeaderSectionRecordModelSelector, builder) }
  ogImage(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`ogImage`, FileFieldModelSelector, builder) }
  productsection(builder: string | LandingPageProductSectionRecordModelSelector | ((selector: LandingPageProductSectionRecordModelSelector) => LandingPageProductSectionRecordModelSelector) | undefined) { return this.__child(`productsection`, LandingPageProductSectionRecordModelSelector, builder) }
  testimonialsection(builder: string | GeneralNutritionalTestimonialRecordModelSelector | ((selector: GeneralNutritionalTestimonialRecordModelSelector) => GeneralNutritionalTestimonialRecordModelSelector) | undefined) { return this.__child(`testimonialsection`, GeneralNutritionalTestimonialRecordModelSelector, builder) }
}
export function selectFromLandingPageRecord() {
  return new LandingPageRecordModelSelector()
}

export const landingPageRecordModelPrimitives = selectFromLandingPageRecord()._createdAt._firstPublishedAt._isValid._modelApiKey._publicationScheduledAt._publishedAt._stage._status._unpublishingScheduledAt._updatedAt.createdAt.seoDescription.seoTitle.showDeliveryBanner.slug.updatedAt
