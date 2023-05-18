// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { NutritionalPanelInfoModel, NutritionalPanelInfoModelType } from "./NutritionalPanelInfoModel"
import { NutritionalPanelInfoModelSelector } from "./NutritionalPanelInfoModel.base"
import { ProductDietaryRestrictionEnumType } from "./ProductDietaryRestrictionEnum"
import { ProductProteinEnumType } from "./ProductProteinEnum"
import { RootStoreType } from "./index"


/**
 * NutritionalInfoBase
 * auto generated base class for the model NutritionalInfoModel.
 *
 * Nutritional Info
 */
export const NutritionalInfoModelBase = ModelBase
  .named('NutritionalInfo')
  .props({
    __typename: types.optional(types.literal("NutritionalInfo"), "NutritionalInfo"),
    allergens: types.union(types.undefined, types.null, types.string),
    calories: types.union(types.undefined, types.null, types.number),
    carbs: types.union(types.undefined, types.null, types.number),
    dietary: types.union(types.undefined, types.null, types.array(ProductDietaryRestrictionEnumType)),
    fats: types.union(types.undefined, types.null, types.number),
    ingredients: types.union(types.undefined, types.null, types.string),
    panelInfo: types.union(types.undefined, types.array(types.late((): any => NutritionalPanelInfoModel))),
    protein: types.union(types.undefined, types.null, types.number),
    proteinType: types.union(types.undefined, ProductProteinEnumType),
    servingSize: types.union(types.undefined, types.null, types.string),
    servingsPerPackage: types.union(types.undefined, types.null, types.number),
    size: types.union(types.undefined, types.null, types.number),
    unit: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class NutritionalInfoModelSelector extends QueryBuilder {
  get allergens() { return this.__attr(`allergens`) }
  get calories() { return this.__attr(`calories`) }
  get carbs() { return this.__attr(`carbs`) }
  get dietary() { return this.__attr(`dietary`) }
  get fats() { return this.__attr(`fats`) }
  get ingredients() { return this.__attr(`ingredients`) }
  get protein() { return this.__attr(`protein`) }
  get proteinType() { return this.__attr(`proteinType`) }
  get servingSize() { return this.__attr(`servingSize`) }
  get servingsPerPackage() { return this.__attr(`servingsPerPackage`) }
  get size() { return this.__attr(`size`) }
  get unit() { return this.__attr(`unit`) }
  panelInfo(builder: string | NutritionalPanelInfoModelSelector | ((selector: NutritionalPanelInfoModelSelector) => NutritionalPanelInfoModelSelector) | undefined) { return this.__child(`panelInfo`, NutritionalPanelInfoModelSelector, builder) }
}
export function selectFromNutritionalInfo() {
  return new NutritionalInfoModelSelector()
}

export const nutritionalInfoModelPrimitives = selectFromNutritionalInfo().allergens.calories.carbs.dietary.fats.ingredients.protein.proteinType.servingSize.servingsPerPackage.size.unit
