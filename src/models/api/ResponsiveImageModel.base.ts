// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ResponsiveImageBase
 * auto generated base class for the model ResponsiveImageModel.
 */
export const ResponsiveImageModelBase = ModelBase
  .named('ResponsiveImage')
  .props({
    __typename: types.optional(types.literal("ResponsiveImage"), "ResponsiveImage"),
    alt: types.union(types.undefined, types.null, types.string),
    aspectRatio: types.union(types.undefined, types.frozen()),
    base64: types.union(types.undefined, types.null, types.string),
    bgColor: types.union(types.undefined, types.null, types.string),
    height: types.union(types.undefined, types.frozen()),
    sizes: types.union(types.undefined, types.string),
    src: types.union(types.undefined, types.string),
    srcSet: types.union(types.undefined, types.string),
    title: types.union(types.undefined, types.null, types.string),
    webpSrcSet: types.union(types.undefined, types.string),
    width: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ResponsiveImageModelSelector extends QueryBuilder {
  get alt() { return this.__attr(`alt`) }
  get aspectRatio() { return this.__attr(`aspectRatio`) }
  get base64() { return this.__attr(`base64`) }
  get bgColor() { return this.__attr(`bgColor`) }
  get height() { return this.__attr(`height`) }
  get sizes() { return this.__attr(`sizes`) }
  get src() { return this.__attr(`src`) }
  get srcSet() { return this.__attr(`srcSet`) }
  get title() { return this.__attr(`title`) }
  get webpSrcSet() { return this.__attr(`webpSrcSet`) }
  get width() { return this.__attr(`width`) }
}
export function selectFromResponsiveImage() {
  return new ResponsiveImageModelSelector()
}

export const responsiveImageModelPrimitives = selectFromResponsiveImage().alt.aspectRatio.base64.bgColor.height.sizes.src.srcSet.title.webpSrcSet.width
