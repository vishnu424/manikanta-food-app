// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { QueryBuilder } from "mst-gql"
import { GeneralDeliveryBannerSectionRecordModelType } from "./GeneralDeliveryBannerSectionRecordModel"
import { GeneralDeliveryBannerSectionRecordModelSelector, generalDeliveryBannerSectionRecordModelPrimitives } from "./GeneralDeliveryBannerSectionRecordModel.base"
import { GeneralNutritionalTestimonialRecordModelType } from "./GeneralNutritionalTestimonialRecordModel"
import { GeneralNutritionalTestimonialRecordModelSelector, generalNutritionalTestimonialRecordModelPrimitives } from "./GeneralNutritionalTestimonialRecordModel.base"
import { LandingPageBenefitsSectionRecordModelType } from "./LandingPageBenefitsSectionRecordModel"
import { LandingPageBenefitsSectionRecordModelSelector, landingPageBenefitsSectionRecordModelPrimitives } from "./LandingPageBenefitsSectionRecordModel.base"
import { LandingPageBundleSectionRecordModelType } from "./LandingPageBundleSectionRecordModel"
import { LandingPageBundleSectionRecordModelSelector, landingPageBundleSectionRecordModelPrimitives } from "./LandingPageBundleSectionRecordModel.base"
import { LandingPageHeaderSectionRecordModelType } from "./LandingPageHeaderSectionRecordModel"
import { LandingPageHeaderSectionRecordModelSelector, landingPageHeaderSectionRecordModelPrimitives } from "./LandingPageHeaderSectionRecordModel.base"
import { LandingPageProductSectionRecordModelType } from "./LandingPageProductSectionRecordModel"
import { LandingPageProductSectionRecordModelSelector, landingPageProductSectionRecordModelPrimitives } from "./LandingPageProductSectionRecordModel.base"

export type LandingPageModelSectionsFieldUnion = GeneralDeliveryBannerSectionRecordModelType | GeneralNutritionalTestimonialRecordModelType | LandingPageBenefitsSectionRecordModelType | LandingPageBundleSectionRecordModelType | LandingPageHeaderSectionRecordModelType | LandingPageProductSectionRecordModelType

export class LandingPageModelSectionsFieldModelSelector extends QueryBuilder {
  generalDeliveryBannerSectionRecord(builder?: string | GeneralDeliveryBannerSectionRecordModelSelector | ((selector: GeneralDeliveryBannerSectionRecordModelSelector) => GeneralDeliveryBannerSectionRecordModelSelector)) { return this.__inlineFragment(`GeneralDeliveryBannerSectionRecord`, GeneralDeliveryBannerSectionRecordModelSelector, builder) }
  generalNutritionalTestimonialRecord(builder?: string | GeneralNutritionalTestimonialRecordModelSelector | ((selector: GeneralNutritionalTestimonialRecordModelSelector) => GeneralNutritionalTestimonialRecordModelSelector)) { return this.__inlineFragment(`GeneralNutritionalTestimonialRecord`, GeneralNutritionalTestimonialRecordModelSelector, builder) }
  landingPageBenefitsSectionRecord(builder?: string | LandingPageBenefitsSectionRecordModelSelector | ((selector: LandingPageBenefitsSectionRecordModelSelector) => LandingPageBenefitsSectionRecordModelSelector)) { return this.__inlineFragment(`LandingPageBenefitsSectionRecord`, LandingPageBenefitsSectionRecordModelSelector, builder) }
  landingPageBundleSectionRecord(builder?: string | LandingPageBundleSectionRecordModelSelector | ((selector: LandingPageBundleSectionRecordModelSelector) => LandingPageBundleSectionRecordModelSelector)) { return this.__inlineFragment(`LandingPageBundleSectionRecord`, LandingPageBundleSectionRecordModelSelector, builder) }
  landingPageHeaderSectionRecord(builder?: string | LandingPageHeaderSectionRecordModelSelector | ((selector: LandingPageHeaderSectionRecordModelSelector) => LandingPageHeaderSectionRecordModelSelector)) { return this.__inlineFragment(`LandingPageHeaderSectionRecord`, LandingPageHeaderSectionRecordModelSelector, builder) }
  landingPageProductSectionRecord(builder?: string | LandingPageProductSectionRecordModelSelector | ((selector: LandingPageProductSectionRecordModelSelector) => LandingPageProductSectionRecordModelSelector)) { return this.__inlineFragment(`LandingPageProductSectionRecord`, LandingPageProductSectionRecordModelSelector, builder) }
}
export function selectFromLandingPageModelSectionsField() {
  return new LandingPageModelSectionsFieldModelSelector()
}

// provides all primitive fields of union member types combined together
export const landingPageModelSectionsFieldModelPrimitives = selectFromLandingPageModelSectionsField().generalDeliveryBannerSectionRecord(generalDeliveryBannerSectionRecordModelPrimitives).generalNutritionalTestimonialRecord(generalNutritionalTestimonialRecordModelPrimitives).landingPageBenefitsSectionRecord(landingPageBenefitsSectionRecordModelPrimitives).landingPageBundleSectionRecord(landingPageBundleSectionRecordModelPrimitives).landingPageHeaderSectionRecord(landingPageHeaderSectionRecordModelPrimitives).landingPageProductSectionRecord(landingPageProductSectionRecordModelPrimitives)