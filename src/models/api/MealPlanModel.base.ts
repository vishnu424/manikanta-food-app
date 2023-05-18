// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AttributeModel, AttributeModelType } from "./AttributeModel"
import { AttributeModelSelector } from "./AttributeModel.base"
import { GenderEnumType } from "./GenderEnum"
import { MealPlanCategoryEnumType } from "./MealPlanCategoryEnum"
import { MealPlanItemModel, MealPlanItemModelType } from "./MealPlanItemModel"
import { MealPlanItemModelSelector } from "./MealPlanItemModel.base"
import { MealPlanModelOrderBy } from "./MealPlanModelOrderByEnum"
import { MealPlanRecordModel, MealPlanRecordModelType } from "./MealPlanRecordModel"
import { MealPlanRecordModelSelector } from "./MealPlanRecordModel.base"
import { MealPlanSubCategoryEnumType } from "./MealPlanSubCategoryEnum"
import { ProductStatusEnumType } from "./ProductStatusEnum"
import { MealPlanModelFilterRemoteRelRomecms } from "./RootStore.base"
import { SiteLocale } from "./SiteLocaleEnum"
import { RootStoreType } from "./index"


/**
 * MealPlanBase
 * auto generated base class for the model MealPlanModel.
 *
 * Meal Plan
 */
export const MealPlanModelBase = ModelBase
  .named('MealPlan')
  .props({
    __typename: types.optional(types.literal("MealPlan"), "MealPlan"),
    attributes: types.union(types.undefined, types.null, types.array(types.late((): any => AttributeModel))),
    brekkie: types.union(types.undefined, types.array(types.late((): any => MealPlanItemModel))),
    calories: types.union(types.undefined, types.null, types.number),
    category: types.union(types.undefined, MealPlanCategoryEnumType),
    cms: types.union(types.undefined, types.null, types.late((): any => MealPlanRecordModel)),
    cmsUpdatedAt: types.union(types.undefined, types.null, types.frozen()),
    createdAt: types.union(types.undefined, types.frozen()),
    drinks: types.union(types.undefined, types.array(types.late((): any => MealPlanItemModel))),
    gender: types.union(types.undefined, GenderEnumType),
    key: types.union(types.undefined, types.string),
    lineItems: types.union(types.undefined, types.array(types.late((): any => MealPlanItemModel))),
    meals: types.union(types.undefined, types.array(types.late((): any => MealPlanItemModel))),
    name: types.union(types.undefined, types.string),
    price: types.union(types.undefined, types.null, types.number),
    snacks: types.union(types.undefined, types.array(types.late((): any => MealPlanItemModel))),
    status: types.union(types.undefined, ProductStatusEnumType),
    subCategory: types.union(types.undefined, types.null, MealPlanSubCategoryEnumType),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MealPlanModelSelector extends QueryBuilder {
  get calories() { return this.__attr(`calories`) }
  get category() { return this.__attr(`category`) }
  get cmsUpdatedAt() { return this.__attr(`cmsUpdatedAt`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get gender() { return this.__attr(`gender`) }
  get key() { return this.__attr(`key`) }
  get name() { return this.__attr(`name`) }
  get price() { return this.__attr(`price`) }
  get status() { return this.__attr(`status`) }
  get subCategory() { return this.__attr(`subCategory`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  attributes(builder: string | AttributeModelSelector | ((selector: AttributeModelSelector) => AttributeModelSelector) | undefined) { return this.__child(`attributes`, AttributeModelSelector, builder) }
  brekkie(builder: string | MealPlanItemModelSelector | ((selector: MealPlanItemModelSelector) => MealPlanItemModelSelector) | undefined) { return this.__child(`brekkie`, MealPlanItemModelSelector, builder) }
  cms(builder: string | MealPlanRecordModelSelector | ((selector: MealPlanRecordModelSelector) => MealPlanRecordModelSelector) | undefined, args?: { fallbackLocales?: SiteLocale[], filter?: (MealPlanModelFilterRemoteRelRomecms | null), locale?: (SiteLocale | null), orderBy?: (MealPlanModelOrderBy | null)[] }) { return this.__child(`cms`+ (args ? '('+['fallbackLocales', 'filter', 'locale', 'orderBy'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), MealPlanRecordModelSelector, builder) }
  drinks(builder: string | MealPlanItemModelSelector | ((selector: MealPlanItemModelSelector) => MealPlanItemModelSelector) | undefined) { return this.__child(`drinks`, MealPlanItemModelSelector, builder) }
  lineItems(builder: string | MealPlanItemModelSelector | ((selector: MealPlanItemModelSelector) => MealPlanItemModelSelector) | undefined) { return this.__child(`lineItems`, MealPlanItemModelSelector, builder) }
  meals(builder: string | MealPlanItemModelSelector | ((selector: MealPlanItemModelSelector) => MealPlanItemModelSelector) | undefined) { return this.__child(`meals`, MealPlanItemModelSelector, builder) }
  snacks(builder: string | MealPlanItemModelSelector | ((selector: MealPlanItemModelSelector) => MealPlanItemModelSelector) | undefined) { return this.__child(`snacks`, MealPlanItemModelSelector, builder) }
}
export function selectFromMealPlan() {
  return new MealPlanModelSelector()
}

export const mealPlanModelPrimitives = selectFromMealPlan().calories.category.cmsUpdatedAt.createdAt.gender.key.name.price.status.subCategory.updatedAt
