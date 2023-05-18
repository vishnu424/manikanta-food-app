// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { BlogArticleModelContentFieldModelBase } from "./BlogArticleModelContentFieldModel.base"

/* The TypeScript type of an instance of BlogArticleModelContentFieldModel */
export interface BlogArticleModelContentFieldModelType extends Instance<typeof BlogArticleModelContentFieldModel.Type> {}

/* A graphql query fragment builders for BlogArticleModelContentFieldModel */
export { selectFromBlogArticleModelContentField, blogArticleModelContentFieldModelPrimitives, BlogArticleModelContentFieldModelSelector } from "./BlogArticleModelContentFieldModel.base"

/**
 * BlogArticleModelContentFieldModel
 */
export const BlogArticleModelContentFieldModel = BlogArticleModelContentFieldModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
