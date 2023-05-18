// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { SeoFieldModel, SeoFieldModelType } from "./SeoFieldModel"
import { SeoFieldModelSelector } from "./SeoFieldModel.base"
import { RootStoreType } from "./index"


/**
 * GlobalSeoFieldBase
 * auto generated base class for the model GlobalSeoFieldModel.
 */
export const GlobalSeoFieldModelBase = ModelBase
  .named('GlobalSeoField')
  .props({
    __typename: types.optional(types.literal("GlobalSeoField"), "GlobalSeoField"),
    facebookPageUrl: types.union(types.undefined, types.null, types.string),
    fallbackSeo: types.union(types.undefined, types.null, types.late((): any => SeoFieldModel)),
    siteName: types.union(types.undefined, types.null, types.string),
    titleSuffix: types.union(types.undefined, types.null, types.string),
    twitterAccount: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class GlobalSeoFieldModelSelector extends QueryBuilder {
  get facebookPageUrl() { return this.__attr(`facebookPageUrl`) }
  get siteName() { return this.__attr(`siteName`) }
  get titleSuffix() { return this.__attr(`titleSuffix`) }
  get twitterAccount() { return this.__attr(`twitterAccount`) }
  fallbackSeo(builder: string | SeoFieldModelSelector | ((selector: SeoFieldModelSelector) => SeoFieldModelSelector) | undefined) { return this.__child(`fallbackSeo`, SeoFieldModelSelector, builder) }
}
export function selectFromGlobalSeoField() {
  return new GlobalSeoFieldModelSelector()
}

export const globalSeoFieldModelPrimitives = selectFromGlobalSeoField().facebookPageUrl.siteName.titleSuffix.twitterAccount
