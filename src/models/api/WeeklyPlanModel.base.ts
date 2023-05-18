// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CustomerModel, CustomerModelType } from "./CustomerModel"
import { CustomerModelSelector } from "./CustomerModel.base"
import { DailyOrderModel, DailyOrderModelType } from "./DailyOrderModel"
import { DailyOrderModelSelector } from "./DailyOrderModel.base"
import { PackSubCategoryEnumType } from "./PackSubCategoryEnum"
import { RootStoreType } from "./index"


/**
 * WeeklyPlanBase
 * auto generated base class for the model WeeklyPlanModel.
 */
export const WeeklyPlanModelBase = ModelBase
  .named('WeeklyPlan')
  .props({
    __typename: types.optional(types.literal("WeeklyPlan"), "WeeklyPlan"),
    archived: types.union(types.undefined, types.boolean),
    createdAt: types.union(types.undefined, types.frozen()),
    customer: types.union(types.undefined, types.late((): any => CustomerModel)),
    days: types.union(types.undefined, types.array(types.late((): any => DailyOrderModel))),
    endDate: types.union(types.undefined, types.frozen()),
    order: types.union(types.undefined, types.frozen()),
    startDate: types.union(types.undefined, types.frozen()),
    type: types.union(types.undefined, PackSubCategoryEnumType),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class WeeklyPlanModelSelector extends QueryBuilder {
  get archived() { return this.__attr(`archived`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get endDate() { return this.__attr(`endDate`) }
  get order() { return this.__attr(`order`) }
  get startDate() { return this.__attr(`startDate`) }
  get type() { return this.__attr(`type`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  customer(builder: string | CustomerModelSelector | ((selector: CustomerModelSelector) => CustomerModelSelector) | undefined) { return this.__child(`customer`, CustomerModelSelector, builder) }
  days(builder: string | DailyOrderModelSelector | ((selector: DailyOrderModelSelector) => DailyOrderModelSelector) | undefined) { return this.__child(`days`, DailyOrderModelSelector, builder) }
}
export function selectFromWeeklyPlan() {
  return new WeeklyPlanModelSelector()
}

export const weeklyPlanModelPrimitives = selectFromWeeklyPlan().archived.createdAt.endDate.order.startDate.type.updatedAt
