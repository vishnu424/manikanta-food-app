// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AppContentBase
 * auto generated base class for the model AppContentModel.
 *
 * App Content
 */
export const AppContentModelBase = ModelBase
  .named('AppContent')
  .props({
    __typename: types.optional(types.literal("AppContent"), "AppContent"),
    active: types.union(types.undefined, types.boolean),
    meta: types.union(types.undefined, types.frozen()),
    position: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AppContentModelSelector extends QueryBuilder {
  get active() { return this.__attr(`active`) }
  get meta() { return this.__attr(`meta`) }
  get position() { return this.__attr(`position`) }
}
export function selectFromAppContent() {
  return new AppContentModelSelector()
}

export const appContentModelPrimitives = selectFromAppContent().active.meta.position
