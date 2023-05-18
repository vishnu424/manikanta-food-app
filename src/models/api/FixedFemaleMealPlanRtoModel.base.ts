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
 * FixedFemaleMealPlanRtoBase
 * auto generated base class for the model FixedFemaleMealPlanRtoModel.
 */
export const FixedFemaleMealPlanRtoModelBase = ModelBase
  .named('FixedFemaleMealPlanRto')
  .props({
    __typename: types.optional(types.literal("FixedFemaleMealPlanRto"), "FixedFemaleMealPlanRto"),
    wlp_fixed_female: types.union(types.undefined, types.late((): any => MealPlanModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FixedFemaleMealPlanRtoModelSelector extends QueryBuilder {
  wlp_fixed_female(builder: string | MealPlanModelSelector | ((selector: MealPlanModelSelector) => MealPlanModelSelector) | undefined) { return this.__child(`wlp_fixed_female`, MealPlanModelSelector, builder) }
}
export function selectFromFixedFemaleMealPlanRto() {
  return new FixedFemaleMealPlanRtoModelSelector()
}

export const fixedFemaleMealPlanRtoModelPrimitives = selectFromFixedFemaleMealPlanRto()
