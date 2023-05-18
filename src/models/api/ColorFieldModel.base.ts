// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ColorFieldBase
 * auto generated base class for the model ColorFieldModel.
 */
export const ColorFieldModelBase = ModelBase
  .named('ColorField')
  .props({
    __typename: types.optional(types.literal("ColorField"), "ColorField"),
    alpha: types.union(types.undefined, types.frozen()),
    blue: types.union(types.undefined, types.frozen()),
    green: types.union(types.undefined, types.frozen()),
    hex: types.union(types.undefined, types.string),
    red: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ColorFieldModelSelector extends QueryBuilder {
  get alpha() { return this.__attr(`alpha`) }
  get blue() { return this.__attr(`blue`) }
  get green() { return this.__attr(`green`) }
  get hex() { return this.__attr(`hex`) }
  get red() { return this.__attr(`red`) }
}
export function selectFromColorField() {
  return new ColorFieldModelSelector()
}

export const colorFieldModelPrimitives = selectFromColorField().alpha.blue.green.hex.red
