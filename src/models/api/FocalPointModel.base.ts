// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * FocalPointBase
 * auto generated base class for the model FocalPointModel.
 */
export const FocalPointModelBase = ModelBase
  .named('FocalPoint')
  .props({
    __typename: types.optional(types.literal("focalPoint"), "focalPoint"),
    x: types.union(types.undefined, types.frozen()),
    y: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FocalPointModelSelector extends QueryBuilder {
  get x() { return this.__attr(`x`) }
  get y() { return this.__attr(`y`) }
}
export function selectFromFocalPoint() {
  return new FocalPointModelSelector()
}

export const focalPointModelPrimitives = selectFromFocalPoint().x.y
