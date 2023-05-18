// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { NutritionalPanelInfoModel, NutritionalPanelInfoModelType } from "./NutritionalPanelInfoModel"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  children: IObservableArray<NutritionalPanelInfoModelType>;
}

/**
 * NutritionalPanelInfoBase
 * auto generated base class for the model NutritionalPanelInfoModel.
 *
 * Nutritional Panel Info
 */
export const NutritionalPanelInfoModelBase = withTypedRefs<Refs>()(ModelBase
  .named('NutritionalPanelInfo')
  .props({
    __typename: types.optional(types.literal("NutritionalPanelInfo"), "NutritionalPanelInfo"),
    children: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => NutritionalPanelInfoModel)))),
    display: types.union(types.undefined, types.boolean),
    name: types.union(types.undefined, types.string),
    per100: types.union(types.undefined, types.number),
    perServing: types.union(types.undefined, types.number),
    unit: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class NutritionalPanelInfoModelSelector extends QueryBuilder {
  get display() { return this.__attr(`display`) }
  get name() { return this.__attr(`name`) }
  get per100() { return this.__attr(`per100`) }
  get perServing() { return this.__attr(`perServing`) }
  get unit() { return this.__attr(`unit`) }
  children(builder: string | NutritionalPanelInfoModelSelector | ((selector: NutritionalPanelInfoModelSelector) => NutritionalPanelInfoModelSelector) | undefined) { return this.__child(`children`, NutritionalPanelInfoModelSelector, builder) }
}
export function selectFromNutritionalPanelInfo() {
  return new NutritionalPanelInfoModelSelector()
}

export const nutritionalPanelInfoModelPrimitives = selectFromNutritionalPanelInfo().display.name.per100.perServing.unit
