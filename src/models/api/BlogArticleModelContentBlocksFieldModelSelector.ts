// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { QueryBuilder } from "mst-gql"
import { BlogBodyImageRecordModelType } from "./BlogBodyImageRecordModel"
import { BlogBodyImageRecordModelSelector, blogBodyImageRecordModelPrimitives } from "./BlogBodyImageRecordModel.base"
import { LandingPageProductSectionRecordModelType } from "./LandingPageProductSectionRecordModel"
import { LandingPageProductSectionRecordModelSelector, landingPageProductSectionRecordModelPrimitives } from "./LandingPageProductSectionRecordModel.base"

export type BlogArticleModelContentBlocksFieldUnion = BlogBodyImageRecordModelType | LandingPageProductSectionRecordModelType

export class BlogArticleModelContentBlocksFieldModelSelector extends QueryBuilder {
  blogBodyImageRecord(builder?: string | BlogBodyImageRecordModelSelector | ((selector: BlogBodyImageRecordModelSelector) => BlogBodyImageRecordModelSelector)) { return this.__inlineFragment(`BlogBodyImageRecord`, BlogBodyImageRecordModelSelector, builder) }
  landingPageProductSectionRecord(builder?: string | LandingPageProductSectionRecordModelSelector | ((selector: LandingPageProductSectionRecordModelSelector) => LandingPageProductSectionRecordModelSelector)) { return this.__inlineFragment(`LandingPageProductSectionRecord`, LandingPageProductSectionRecordModelSelector, builder) }
}
export function selectFromBlogArticleModelContentBlocksField() {
  return new BlogArticleModelContentBlocksFieldModelSelector()
}

// provides all primitive fields of union member types combined together
export const blogArticleModelContentBlocksFieldModelPrimitives = selectFromBlogArticleModelContentBlocksField().blogBodyImageRecord(blogBodyImageRecordModelPrimitives).landingPageProductSectionRecord(landingPageProductSectionRecordModelPrimitives)