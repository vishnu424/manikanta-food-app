// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { BlogArticleRecordModelBase } from "./BlogArticleRecordModel.base"

/* The TypeScript type of an instance of BlogArticleRecordModel */
export interface BlogArticleRecordModelType extends Instance<typeof BlogArticleRecordModel.Type> {}

/* A graphql query fragment builders for BlogArticleRecordModel */
export { selectFromBlogArticleRecord, blogArticleRecordModelPrimitives, BlogArticleRecordModelSelector } from "./BlogArticleRecordModel.base"

/**
 * BlogArticleRecordModel
 *
 * Record of type Blog Article (blog_article)
 */
export const BlogArticleRecordModel = BlogArticleRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
