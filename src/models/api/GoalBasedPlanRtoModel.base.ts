// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AttributeModel, AttributeModelType } from "./AttributeModel"
import { AttributeModelSelector } from "./AttributeModel.base"
import { MealPlanItemModel, MealPlanItemModelType } from "./MealPlanItemModel"
import { MealPlanItemModelSelector } from "./MealPlanItemModel.base"
import { PackCategoryEnumType } from "./PackCategoryEnum"
import { PlanCategoryEnumType } from "./PlanCategoryEnum"
import { RootStoreType } from "./index"


/**
 * GoalBasedPlanRtoBase
 * auto generated base class for the model GoalBasedPlanRtoModel.
 *
 * Goal Based Plan
 */
export const GoalBasedPlanRtoModelBase = ModelBase
  .named('GoalBasedPlanRto')
  .props({
    __typename: types.optional(types.literal("GoalBasedPlanRto"), "GoalBasedPlanRto"),
    attributes: types.union(types.undefined, types.array(types.late((): any => AttributeModel))),
    category: types.union(types.undefined, PlanCategoryEnumType),
    image: types.union(types.undefined, types.string),
    lineItems: types.union(types.undefined, types.array(types.late((): any => MealPlanItemModel))),
    name: types.union(types.undefined, types.string),
    netPrice: types.union(types.undefined, types.number),
    subCategory: types.union(types.undefined, PackCategoryEnumType),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class GoalBasedPlanRtoModelSelector extends QueryBuilder {
  get category() { return this.__attr(`category`) }
  get image() { return this.__attr(`image`) }
  get name() { return this.__attr(`name`) }
  get netPrice() { return this.__attr(`netPrice`) }
  get subCategory() { return this.__attr(`subCategory`) }
  attributes(builder: string | AttributeModelSelector | ((selector: AttributeModelSelector) => AttributeModelSelector) | undefined) { return this.__child(`attributes`, AttributeModelSelector, builder) }
  lineItems(builder: string | MealPlanItemModelSelector | ((selector: MealPlanItemModelSelector) => MealPlanItemModelSelector) | undefined) { return this.__child(`lineItems`, MealPlanItemModelSelector, builder) }
}
export function selectFromGoalBasedPlanRto() {
  return new GoalBasedPlanRtoModelSelector()
}

export const goalBasedPlanRtoModelPrimitives = selectFromGoalBasedPlanRto().category.image.name.netPrice.subCategory
