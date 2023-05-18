// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { HomePageHeaderSectionRecordModelBase } from "./HomePageHeaderSectionRecordModel.base"

/* The TypeScript type of an instance of HomePageHeaderSectionRecordModel */
export interface HomePageHeaderSectionRecordModelType extends Instance<typeof HomePageHeaderSectionRecordModel.Type> {}

/* A graphql query fragment builders for HomePageHeaderSectionRecordModel */
export { selectFromHomePageHeaderSectionRecord, homePageHeaderSectionRecordModelPrimitives, HomePageHeaderSectionRecordModelSelector } from "./HomePageHeaderSectionRecordModel.base"

/**
 * HomePageHeaderSectionRecordModel
 *
 * Block of type Home Page Header Section (home_page_header_section)
 */
export const HomePageHeaderSectionRecordModel = HomePageHeaderSectionRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
