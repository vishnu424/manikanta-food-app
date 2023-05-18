// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { BlogBodyImageRecordModelBase } from "./BlogBodyImageRecordModel.base"

/* The TypeScript type of an instance of BlogBodyImageRecordModel */
export interface BlogBodyImageRecordModelType extends Instance<typeof BlogBodyImageRecordModel.Type> {}

/* A graphql query fragment builders for BlogBodyImageRecordModel */
export { selectFromBlogBodyImageRecord, blogBodyImageRecordModelPrimitives, BlogBodyImageRecordModelSelector } from "./BlogBodyImageRecordModel.base"

/**
 * BlogBodyImageRecordModel
 *
 * Block of type Blog Body Image (blog_body_image)
 */
export const BlogBodyImageRecordModel = BlogBodyImageRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
