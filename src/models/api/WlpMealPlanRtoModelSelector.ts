// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { QueryBuilder } from "mst-gql"
import { DynamicMealPlanRtoModelType } from "./DynamicMealPlanRtoModel"
import { DynamicMealPlanRtoModelSelector, dynamicMealPlanRtoModelPrimitives } from "./DynamicMealPlanRtoModel.base"
import { FixedFemaleMealPlanRtoModelType } from "./FixedFemaleMealPlanRtoModel"
import { FixedFemaleMealPlanRtoModelSelector, fixedFemaleMealPlanRtoModelPrimitives } from "./FixedFemaleMealPlanRtoModel.base"
import { FixedMaleMealPlanRtoModelType } from "./FixedMaleMealPlanRtoModel"
import { FixedMaleMealPlanRtoModelSelector, fixedMaleMealPlanRtoModelPrimitives } from "./FixedMaleMealPlanRtoModel.base"

export type WlpMealPlanRtoUnion = DynamicMealPlanRtoModelType | FixedFemaleMealPlanRtoModelType | FixedMaleMealPlanRtoModelType

export class WlpMealPlanRtoModelSelector extends QueryBuilder {
  dynamicMealPlanRto(builder?: string | DynamicMealPlanRtoModelSelector | ((selector: DynamicMealPlanRtoModelSelector) => DynamicMealPlanRtoModelSelector)) { return this.__inlineFragment(`DynamicMealPlanRto`, DynamicMealPlanRtoModelSelector, builder) }
  fixedFemaleMealPlanRto(builder?: string | FixedFemaleMealPlanRtoModelSelector | ((selector: FixedFemaleMealPlanRtoModelSelector) => FixedFemaleMealPlanRtoModelSelector)) { return this.__inlineFragment(`FixedFemaleMealPlanRto`, FixedFemaleMealPlanRtoModelSelector, builder) }
  fixedMaleMealPlanRto(builder?: string | FixedMaleMealPlanRtoModelSelector | ((selector: FixedMaleMealPlanRtoModelSelector) => FixedMaleMealPlanRtoModelSelector)) { return this.__inlineFragment(`FixedMaleMealPlanRto`, FixedMaleMealPlanRtoModelSelector, builder) }
}
export function selectFromWlpMealPlanRto() {
  return new WlpMealPlanRtoModelSelector()
}

// provides all primitive fields of union member types combined together
export const wlpMealPlanRtoModelPrimitives = selectFromWlpMealPlanRto().dynamicMealPlanRto(dynamicMealPlanRtoModelPrimitives).fixedFemaleMealPlanRto(fixedFemaleMealPlanRtoModelPrimitives).fixedMaleMealPlanRto(fixedMaleMealPlanRtoModelPrimitives)