// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { QueryBuilder } from "mst-gql"
import { GeneralCampaignSectionRecordModelType } from "./GeneralCampaignSectionRecordModel"
import { GeneralCampaignSectionRecordModelSelector, generalCampaignSectionRecordModelPrimitives } from "./GeneralCampaignSectionRecordModel.base"
import { GeneralHowItWorksSectionRecordModelType } from "./GeneralHowItWorksSectionRecordModel"
import { GeneralHowItWorksSectionRecordModelSelector, generalHowItWorksSectionRecordModelPrimitives } from "./GeneralHowItWorksSectionRecordModel.base"
import { GeneralPageLearnMoreRecordModelType } from "./GeneralPageLearnMoreRecordModel"
import { GeneralPageLearnMoreRecordModelSelector, generalPageLearnMoreRecordModelPrimitives } from "./GeneralPageLearnMoreRecordModel.base"
import { GeneralPlanSectionRecordModelType } from "./GeneralPlanSectionRecordModel"
import { GeneralPlanSectionRecordModelSelector, generalPlanSectionRecordModelPrimitives } from "./GeneralPlanSectionRecordModel.base"
import { GeneralReviewSectionRecordModelType } from "./GeneralReviewSectionRecordModel"
import { GeneralReviewSectionRecordModelSelector, generalReviewSectionRecordModelPrimitives } from "./GeneralReviewSectionRecordModel.base"
import { GeneralStockistSectionRecordModelType } from "./GeneralStockistSectionRecordModel"
import { GeneralStockistSectionRecordModelSelector, generalStockistSectionRecordModelPrimitives } from "./GeneralStockistSectionRecordModel.base"
import { HomePageHeaderSectionRecordModelType } from "./HomePageHeaderSectionRecordModel"
import { HomePageHeaderSectionRecordModelSelector, homePageHeaderSectionRecordModelPrimitives } from "./HomePageHeaderSectionRecordModel.base"
import { ProductCategorySectionRecordModelType } from "./ProductCategorySectionRecordModel"
import { ProductCategorySectionRecordModelSelector, productCategorySectionRecordModelPrimitives } from "./ProductCategorySectionRecordModel.base"

export type GeneralPageModelSectionsFieldUnion = GeneralCampaignSectionRecordModelType | GeneralHowItWorksSectionRecordModelType | GeneralPageLearnMoreRecordModelType | GeneralPlanSectionRecordModelType | GeneralReviewSectionRecordModelType | GeneralStockistSectionRecordModelType | HomePageHeaderSectionRecordModelType | ProductCategorySectionRecordModelType

export class GeneralPageModelSectionsFieldModelSelector extends QueryBuilder {
  generalCampaignSectionRecord(builder?: string | GeneralCampaignSectionRecordModelSelector | ((selector: GeneralCampaignSectionRecordModelSelector) => GeneralCampaignSectionRecordModelSelector)) { return this.__inlineFragment(`GeneralCampaignSectionRecord`, GeneralCampaignSectionRecordModelSelector, builder) }
  generalHowItWorksSectionRecord(builder?: string | GeneralHowItWorksSectionRecordModelSelector | ((selector: GeneralHowItWorksSectionRecordModelSelector) => GeneralHowItWorksSectionRecordModelSelector)) { return this.__inlineFragment(`GeneralHowItWorksSectionRecord`, GeneralHowItWorksSectionRecordModelSelector, builder) }
  generalPageLearnMoreRecord(builder?: string | GeneralPageLearnMoreRecordModelSelector | ((selector: GeneralPageLearnMoreRecordModelSelector) => GeneralPageLearnMoreRecordModelSelector)) { return this.__inlineFragment(`GeneralPageLearnMoreRecord`, GeneralPageLearnMoreRecordModelSelector, builder) }
  generalPlanSectionRecord(builder?: string | GeneralPlanSectionRecordModelSelector | ((selector: GeneralPlanSectionRecordModelSelector) => GeneralPlanSectionRecordModelSelector)) { return this.__inlineFragment(`GeneralPlanSectionRecord`, GeneralPlanSectionRecordModelSelector, builder) }
  generalReviewSectionRecord(builder?: string | GeneralReviewSectionRecordModelSelector | ((selector: GeneralReviewSectionRecordModelSelector) => GeneralReviewSectionRecordModelSelector)) { return this.__inlineFragment(`GeneralReviewSectionRecord`, GeneralReviewSectionRecordModelSelector, builder) }
  generalStockistSectionRecord(builder?: string | GeneralStockistSectionRecordModelSelector | ((selector: GeneralStockistSectionRecordModelSelector) => GeneralStockistSectionRecordModelSelector)) { return this.__inlineFragment(`GeneralStockistSectionRecord`, GeneralStockistSectionRecordModelSelector, builder) }
  homePageHeaderSectionRecord(builder?: string | HomePageHeaderSectionRecordModelSelector | ((selector: HomePageHeaderSectionRecordModelSelector) => HomePageHeaderSectionRecordModelSelector)) { return this.__inlineFragment(`HomePageHeaderSectionRecord`, HomePageHeaderSectionRecordModelSelector, builder) }
  productCategorySectionRecord(builder?: string | ProductCategorySectionRecordModelSelector | ((selector: ProductCategorySectionRecordModelSelector) => ProductCategorySectionRecordModelSelector)) { return this.__inlineFragment(`ProductCategorySectionRecord`, ProductCategorySectionRecordModelSelector, builder) }
}
export function selectFromGeneralPageModelSectionsField() {
  return new GeneralPageModelSectionsFieldModelSelector()
}

// provides all primitive fields of union member types combined together
export const generalPageModelSectionsFieldModelPrimitives = selectFromGeneralPageModelSectionsField().generalCampaignSectionRecord(generalCampaignSectionRecordModelPrimitives).generalHowItWorksSectionRecord(generalHowItWorksSectionRecordModelPrimitives).generalPageLearnMoreRecord(generalPageLearnMoreRecordModelPrimitives).generalPlanSectionRecord(generalPlanSectionRecordModelPrimitives).generalReviewSectionRecord(generalReviewSectionRecordModelPrimitives).generalStockistSectionRecord(generalStockistSectionRecordModelPrimitives).homePageHeaderSectionRecord(homePageHeaderSectionRecordModelPrimitives).productCategorySectionRecord(productCategorySectionRecordModelPrimitives)