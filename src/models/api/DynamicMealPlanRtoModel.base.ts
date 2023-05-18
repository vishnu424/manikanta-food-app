// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { MealPlanModel, MealPlanModelType } from "./MealPlanModel"
import { MealPlanModelSelector } from "./MealPlanModel.base"
import { RootStoreType } from "./index"


/**
 * DynamicMealPlanRtoBase
 * auto generated base class for the model DynamicMealPlanRtoModel.
 */
export const DynamicMealPlanRtoModelBase = ModelBase
  .named('DynamicMealPlanRto')
  .props({
    __typename: types.optional(types.literal("DynamicMealPlanRto"), "DynamicMealPlanRto"),
    wlp_full: types.union(types.undefined, types.late((): any => MealPlanModel)),
    wlp_lite: types.union(types.undefined, types.late((): any => MealPlanModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class DynamicMealPlanRtoModelSelector extends QueryBuilder {
  wlp_full(builder: string | MealPlanModelSelector | ((selector: MealPlanModelSelector) => MealPlanModelSelector) | undefined) { return this.__child(`wlp_full`, MealPlanModelSelector, builder) }
  wlp_lite(builder: string | MealPlanModelSelector | ((selector: MealPlanModelSelector) => MealPlanModelSelector) | undefined) { return this.__child(`wlp_lite`, MealPlanModelSelector, builder) }
}
export function selectFromDynamicMealPlanRto() {
  return new DynamicMealPlanRtoModelSelector()
}

export const dynamicMealPlanRtoModelPrimitives = selectFromDynamicMealPlanRto()
