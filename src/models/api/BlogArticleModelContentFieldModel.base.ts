// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BlogArticleModelContentBlocksFieldModelSelector } from "./BlogArticleModelContentBlocksFieldModelSelector"
import { BlogBodyImageRecordModel, BlogBodyImageRecordModelType } from "./BlogBodyImageRecordModel"
import { BlogBodyImageRecordModelSelector } from "./BlogBodyImageRecordModel.base"
import { LandingPageProductSectionRecordModel, LandingPageProductSectionRecordModelType } from "./LandingPageProductSectionRecordModel"
import { LandingPageProductSectionRecordModelSelector } from "./LandingPageProductSectionRecordModel.base"
import { RootStoreType } from "./index"


/**
 * BlogArticleModelContentFieldBase
 * auto generated base class for the model BlogArticleModelContentFieldModel.
 */
export const BlogArticleModelContentFieldModelBase = ModelBase
  .named('BlogArticleModelContentField')
  .props({
    __typename: types.optional(types.literal("BlogArticleModelContentField"), "BlogArticleModelContentField"),
    blocks: types.union(types.undefined, types.array(types.union(types.late((): any => BlogBodyImageRecordModel), types.late((): any => LandingPageProductSectionRecordModel)))),
    links: types.union(types.undefined, types.array(types.string)),
    value: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class BlogArticleModelContentFieldModelSelector extends QueryBuilder {
  get links() { return this.__attr(`links`) }
  get value() { return this.__attr(`value`) }
  blocks(builder: string | BlogArticleModelContentBlocksFieldModelSelector | ((selector: BlogArticleModelContentBlocksFieldModelSelector) => BlogArticleModelContentBlocksFieldModelSelector) | undefined) { return this.__child(`blocks`, BlogArticleModelContentBlocksFieldModelSelector, builder) }
}
export function selectFromBlogArticleModelContentField() {
  return new BlogArticleModelContentFieldModelSelector()
}

export const blogArticleModelContentFieldModelPrimitives = selectFromBlogArticleModelContentField().links.value
