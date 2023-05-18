// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CollectionMetadataBase
 * auto generated base class for the model CollectionMetadataModel.
 */
export const CollectionMetadataModelBase = ModelBase
  .named('CollectionMetadata')
  .props({
    __typename: types.optional(types.literal("CollectionMetadata"), "CollectionMetadata"),
    count: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CollectionMetadataModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
}
export function selectFromCollectionMetadata() {
  return new CollectionMetadataModelSelector()
}

export const collectionMetadataModelPrimitives = selectFromCollectionMetadata().count
