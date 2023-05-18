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
 * WeeklyPlanRtoBase
 * auto generated base class for the model WeeklyPlanRtoModel.
 */
export const WeeklyPlanRtoModelBase = ModelBase
  .named('WeeklyPlanRto')
  .props({
    __typename: types.optional(types.literal("WeeklyPlanRTO"), "WeeklyPlanRTO"),
    _id: types.union(types.undefined, types.string),
    archived: types.union(types.undefined, types.boolean),
    createdAt: types.union(types.undefined, types.frozen()),
    customer: types.union(types.undefined, types.late((): any => CustomerModel)),
    days: types.union(types.undefined, types.array(types.late((): any => DailyOrderModel))),
    endDate: types.union(types.undefined, types.frozen()),
    order: types.union(types.undefined, types.frozen()),
    startDate: types.union(types.undefined, types.frozen()),
    startDateRange: types.union(types.undefined, types.array(types.string)),
    type: types.union(types.undefined, PackSubCategoryEnumType),
    updatedAt: types.union(types.undefined, types.frozen()),
    weight: types.union(types.undefined, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class WeeklyPlanRtoModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get archived() { return this.__attr(`archived`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get endDate() { return this.__attr(`endDate`) }
  get order() { return this.__attr(`order`) }
  get startDate() { return this.__attr(`startDate`) }
  get startDateRange() { return this.__attr(`startDateRange`) }
  get type() { return this.__attr(`type`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get weight() { return this.__attr(`weight`) }
  customer(builder: string | CustomerModelSelector | ((selector: CustomerModelSelector) => CustomerModelSelector) | undefined) { return this.__child(`customer`, CustomerModelSelector, builder) }
  days(builder: string | DailyOrderModelSelector | ((selector: DailyOrderModelSelector) => DailyOrderModelSelector) | undefined) { return this.__child(`days`, DailyOrderModelSelector, builder) }
}
export function selectFromWeeklyPlanRto() {
  return new WeeklyPlanRtoModelSelector()
}

export const weeklyPlanRtoModelPrimitives = selectFromWeeklyPlanRto()._id.archived.createdAt.endDate.order.startDate.startDateRange.type.updatedAt.weight
