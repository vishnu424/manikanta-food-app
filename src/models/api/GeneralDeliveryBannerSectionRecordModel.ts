// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { GeneralDeliveryBannerSectionRecordModelBase } from "./GeneralDeliveryBannerSectionRecordModel.base"

/* The TypeScript type of an instance of GeneralDeliveryBannerSectionRecordModel */
export interface GeneralDeliveryBannerSectionRecordModelType extends Instance<typeof GeneralDeliveryBannerSectionRecordModel.Type> {}

/* A graphql query fragment builders for GeneralDeliveryBannerSectionRecordModel */
export { selectFromGeneralDeliveryBannerSectionRecord, generalDeliveryBannerSectionRecordModelPrimitives, GeneralDeliveryBannerSectionRecordModelSelector } from "./GeneralDeliveryBannerSectionRecordModel.base"

/**
 * GeneralDeliveryBannerSectionRecordModel
 *
 * Block of type General Delivery Banner Section (general_delivery_banner_section)
 */
export const GeneralDeliveryBannerSectionRecordModel = GeneralDeliveryBannerSectionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
