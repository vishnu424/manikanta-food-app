// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FaviconType } from "./FaviconTypeEnum"
import { FileFieldModel, FileFieldModelType } from "./FileFieldModel"
import { FileFieldModelSelector } from "./FileFieldModel.base"
import { GlobalSeoFieldModel, GlobalSeoFieldModelType } from "./GlobalSeoFieldModel"
import { GlobalSeoFieldModelSelector } from "./GlobalSeoFieldModel.base"
import { SiteLocale, SiteLocaleEnumType } from "./SiteLocaleEnum"
import { TagModel, TagModelType } from "./TagModel"
import { TagModelSelector } from "./TagModel.base"
import { RootStoreType } from "./index"


/**
 * SiteBase
 * auto generated base class for the model SiteModel.
 */
export const SiteModelBase = ModelBase
  .named('Site')
  .props({
    __typename: types.optional(types.literal("Site"), "Site"),
    favicon: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    faviconMetaTags: types.union(types.undefined, types.array(types.late((): any => TagModel))),
    globalSeo: types.union(types.undefined, types.null, types.late((): any => GlobalSeoFieldModel)),
    locales: types.union(types.undefined, types.array(SiteLocaleEnumType)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SiteModelSelector extends QueryBuilder {
  get locales() { return this.__attr(`locales`) }
  favicon(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`favicon`, FileFieldModelSelector, builder) }
  faviconMetaTags(builder: string | TagModelSelector | ((selector: TagModelSelector) => TagModelSelector) | undefined, args?: { variants?: (FaviconType | null)[] }) { return this.__child(`faviconMetaTags`+ (args ? '('+['variants'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), TagModelSelector, builder) }
  globalSeo(builder: string | GlobalSeoFieldModelSelector | ((selector: GlobalSeoFieldModelSelector) => GlobalSeoFieldModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], locale?: (SiteLocale | null) }) { return this.__child(`globalSeo`+ (args ? '('+['fallbackLocales', 'locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), GlobalSeoFieldModelSelector, builder) }
}
export function selectFromSite() {
  return new SiteModelSelector()
}

export const siteModelPrimitives = selectFromSite().locales
