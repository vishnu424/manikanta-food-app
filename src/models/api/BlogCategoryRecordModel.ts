// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { BlogCategoryRecordModelBase } from "./BlogCategoryRecordModel.base"

/* The TypeScript type of an instance of BlogCategoryRecordModel */
export interface BlogCategoryRecordModelType extends Instance<typeof BlogCategoryRecordModel.Type> {}

/* A graphql query fragment builders for BlogCategoryRecordModel */
export { selectFromBlogCategoryRecord, blogCategoryRecordModelPrimitives, BlogCategoryRecordModelSelector } from "./BlogCategoryRecordModel.base"

/**
 * BlogCategoryRecordModel
 *
 * Record of type Blog Category (blog_category)
 */
export const BlogCategoryRecordModel = BlogCategoryRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
