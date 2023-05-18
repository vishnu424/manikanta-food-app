// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * TagBase
 * auto generated base class for the model TagModel.
 */
export const TagModelBase = ModelBase
  .named('Tag')
  .props({
    __typename: types.optional(types.literal("Tag"), "Tag"),
    attributes: types.union(types.undefined, types.null, types.frozen()),
    content: types.union(types.undefined, types.null, types.string),
    tag: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class TagModelSelector extends QueryBuilder {
  get attributes() { return this.__attr(`attributes`) }
  get content() { return this.__attr(`content`) }
  get tag() { return this.__attr(`tag`) }
}
export function selectFromTag() {
  return new TagModelSelector()
}

export const tagModelPrimitives = selectFromTag().attributes.content.tag
