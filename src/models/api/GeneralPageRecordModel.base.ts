// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FileFieldModel, FileFieldModelType } from "./FileFieldModel"
import { FileFieldModelSelector } from "./FileFieldModel.base"
import { GeneralCampaignSectionRecordModel, GeneralCampaignSectionRecordModelType } from "./GeneralCampaignSectionRecordModel"
import { GeneralCampaignSectionRecordModelSelector } from "./GeneralCampaignSectionRecordModel.base"
import { GeneralHowItWorksSectionRecordModel, GeneralHowItWorksSectionRecordModelType } from "./GeneralHowItWorksSectionRecordModel"
import { GeneralHowItWorksSectionRecordModelSelector } from "./GeneralHowItWorksSectionRecordModel.base"
import { GeneralPageLearnMoreRecordModel, GeneralPageLearnMoreRecordModelType } from "./GeneralPageLearnMoreRecordModel"
import { GeneralPageLearnMoreRecordModelSelector } from "./GeneralPageLearnMoreRecordModel.base"
import { GeneralPageModelSectionsFieldModelSelector } from "./GeneralPageModelSectionsFieldModelSelector"
import { GeneralPlanSectionRecordModel, GeneralPlanSectionRecordModelType } from "./GeneralPlanSectionRecordModel"
import { GeneralPlanSectionRecordModelSelector } from "./GeneralPlanSectionRecordModel.base"
import { GeneralReviewSectionRecordModel, GeneralReviewSectionRecordModelType } from "./GeneralReviewSectionRecordModel"
import { GeneralReviewSectionRecordModelSelector } from "./GeneralReviewSectionRecordModel.base"
import { GeneralStockistSectionRecordModel, GeneralStockistSectionRecordModelType } from "./GeneralStockistSectionRecordModel"
import { GeneralStockistSectionRecordModelSelector } from "./GeneralStockistSectionRecordModel.base"
import { HomePageHeaderSectionRecordModel, HomePageHeaderSectionRecordModelType } from "./HomePageHeaderSectionRecordModel"
import { HomePageHeaderSectionRecordModelSelector } from "./HomePageHeaderSectionRecordModel.base"
import { ItemStatusEnumType } from "./ItemStatusEnum"
import { ProductCategorySectionRecordModel, ProductCategorySectionRecordModelType } from "./ProductCategorySectionRecordModel"
import { ProductCategorySectionRecordModelSelector } from "./ProductCategorySectionRecordModel.base"
import { SiteLocale } from "./SiteLocaleEnum"
import { TagModel, TagModelType } from "./TagModel"
import { TagModelSelector } from "./TagModel.base"
import { RootStoreType } from "./index"


/**
 * GeneralPageRecordBase
 * auto generated base class for the model GeneralPageRecordModel.
 *
 * Record of type General Page (general_page)
 */
export const GeneralPageRecordModelBase = ModelBase
  .named('GeneralPageRecord')
  .props({
    __typename: types.optional(types.literal("GeneralPageRecord"), "GeneralPageRecord"),
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
    ogImage: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    sections: types.union(types.undefined, types.array(types.union(types.late((): any => GeneralCampaignSectionRecordModel), types.late((): any => GeneralHowItWorksSectionRecordModel), types.late((): any => GeneralPageLearnMoreRecordModel), types.late((): any => GeneralPlanSectionRecordModel), types.late((): any => GeneralReviewSectionRecordModel), types.late((): any => GeneralStockistSectionRecordModel), types.late((): any => HomePageHeaderSectionRecordModel), types.late((): any => ProductCategorySectionRecordModel)))),
    seoDescription: types.union(types.undefined, types.null, types.string),
    seoTitle: types.union(types.undefined, types.null, types.string),
    slug: types.union(types.undefined, types.null, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class GeneralPageRecordModelSelector extends QueryBuilder {
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
  get seoDescription() { return this.__attr(`seoDescription`) }
  get seoTitle() { return this.__attr(`seoTitle`) }
  get slug() { return this.__attr(`slug`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  _seoMetaTags(builder: string | TagModelSelector | ((selector: TagModelSelector) => TagModelSelector) | undefined, args?: { locale?: (SiteLocale | null) }) { return this.__child(`_seoMetaTags`+ (args ? '('+['locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), TagModelSelector, builder) }
  ogImage(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`ogImage`, FileFieldModelSelector, builder) }
  sections(builder: string | GeneralPageModelSectionsFieldModelSelector | ((selector: GeneralPageModelSectionsFieldModelSelector) => GeneralPageModelSectionsFieldModelSelector) | undefined) { return this.__child(`sections`, GeneralPageModelSectionsFieldModelSelector, builder) }
}
export function selectFromGeneralPageRecord() {
  return new GeneralPageRecordModelSelector()
}

export const generalPageRecordModelPrimitives = selectFromGeneralPageRecord()._createdAt._firstPublishedAt._isValid._modelApiKey._publicationScheduledAt._publishedAt._status._unpublishingScheduledAt._updatedAt.createdAt.seoDescription.seoTitle.slug.updatedAt
