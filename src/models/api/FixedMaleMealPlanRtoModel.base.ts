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
 * FixedMaleMealPlanRtoBase
 * auto generated base class for the model FixedMaleMealPlanRtoModel.
 */
export const FixedMaleMealPlanRtoModelBase = ModelBase
  .named('FixedMaleMealPlanRto')
  .props({
    __typename: types.optional(types.literal("FixedMaleMealPlanRto"), "FixedMaleMealPlanRto"),
    wlp_fixed_male: types.union(types.undefined, types.late((): any => MealPlanModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FixedMaleMealPlanRtoModelSelector extends QueryBuilder {
  wlp_fixed_male(builder: string | MealPlanModelSelector | ((selector: MealPlanModelSelector) => MealPlanModelSelector) | undefined) { return this.__child(`wlp_fixed_male`, MealPlanModelSelector, builder) }
}
export function selectFromFixedMaleMealPlanRto() {
  return new FixedMaleMealPlanRtoModelSelector()
}

export const fixedMaleMealPlanRtoModelPrimitives = selectFromFixedMaleMealPlanRto()
