// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { GeneralCampaignSectionRecordModelBase } from "./GeneralCampaignSectionRecordModel.base"

/* The TypeScript type of an instance of GeneralCampaignSectionRecordModel */
export interface GeneralCampaignSectionRecordModelType extends Instance<typeof GeneralCampaignSectionRecordModel.Type> {}

/* A graphql query fragment builders for GeneralCampaignSectionRecordModel */
export { selectFromGeneralCampaignSectionRecord, generalCampaignSectionRecordModelPrimitives, GeneralCampaignSectionRecordModelSelector } from "./GeneralCampaignSectionRecordModel.base"

/**
 * GeneralCampaignSectionRecordModel
 *
 * Block of type General Campaign Section (general_campaign_section)
 */
export const GeneralCampaignSectionRecordModel = GeneralCampaignSectionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
