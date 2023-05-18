// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FileFieldModel, FileFieldModelType } from "./FileFieldModel"
import { FileFieldModelSelector } from "./FileFieldModel.base"
import { RootStoreType } from "./index"


/**
 * SeoFieldBase
 * auto generated base class for the model SeoFieldModel.
 */
export const SeoFieldModelBase = ModelBase
  .named('SeoField')
  .props({
    __typename: types.optional(types.literal("SeoField"), "SeoField"),
    description: types.union(types.undefined, types.null, types.string),
    image: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    title: types.union(types.undefined, types.null, types.string),
    twitterCard: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SeoFieldModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get title() { return this.__attr(`title`) }
  get twitterCard() { return this.__attr(`twitterCard`) }
  image(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`image`, FileFieldModelSelector, builder) }
}
export function selectFromSeoField() {
  return new SeoFieldModelSelector()
}

export const seoFieldModelPrimitives = selectFromSeoField().description.title.twitterCard
