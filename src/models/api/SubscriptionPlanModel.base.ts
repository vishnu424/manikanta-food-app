// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AttributeModel, AttributeModelType } from "./AttributeModel"
import { AttributeModelSelector } from "./AttributeModel.base"
import { FrequencyEnumType } from "./FrequencyEnum"
import { LineItemModel, LineItemModelType } from "./LineItemModel"
import { LineItemModelSelector } from "./LineItemModel.base"
import { OrderDeliveryModel, OrderDeliveryModelType } from "./OrderDeliveryModel"
import { OrderDeliveryModelSelector } from "./OrderDeliveryModel.base"
import { PackCategoryEnumType } from "./PackCategoryEnum"
import { PlanCategoryEnumType } from "./PlanCategoryEnum"
import { SubscriptionPlanStatusEnumType } from "./SubscriptionPlanStatusEnum"
import { RootStoreType } from "./index"


/**
 * SubscriptionPlanBase
 * auto generated base class for the model SubscriptionPlanModel.
 *
 * Subscription Plan
 */
export const SubscriptionPlanModelBase = ModelBase
  .named('SubscriptionPlan')
  .props({
    __typename: types.optional(types.literal("SubscriptionPlan"), "SubscriptionPlan"),
    attributes: types.union(types.undefined, types.array(types.late((): any => AttributeModel))),
    category: types.union(types.undefined, PlanCategoryEnumType),
    chargeDate: types.union(types.undefined, types.frozen()),
    delivery: types.union(types.undefined, types.late((): any => OrderDeliveryModel)),
    endDate: types.union(types.undefined, types.null, types.frozen()),
    frequency: types.union(types.undefined, FrequencyEnumType),
    image: types.union(types.undefined, types.null, types.string),
    lineItems: types.union(types.undefined, types.array(types.late((): any => LineItemModel))),
    name: types.union(types.undefined, types.string),
    netPrice: types.union(types.undefined, types.number),
    planId: types.union(types.undefined, types.string),
    startDate: types.union(types.undefined, types.frozen()),
    status: types.union(types.undefined, SubscriptionPlanStatusEnumType),
    subCategory: types.union(types.undefined, types.null, PackCategoryEnumType),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SubscriptionPlanModelSelector extends QueryBuilder {
  get category() { return this.__attr(`category`) }
  get chargeDate() { return this.__attr(`chargeDate`) }
  get endDate() { return this.__attr(`endDate`) }
  get frequency() { return this.__attr(`frequency`) }
  get image() { return this.__attr(`image`) }
  get name() { return this.__attr(`name`) }
  get netPrice() { return this.__attr(`netPrice`) }
  get planId() { return this.__attr(`planId`) }
  get startDate() { return this.__attr(`startDate`) }
  get status() { return this.__attr(`status`) }
  get subCategory() { return this.__attr(`subCategory`) }
  attributes(builder: string | AttributeModelSelector | ((selector: AttributeModelSelector) => AttributeModelSelector) | undefined) { return this.__child(`attributes`, AttributeModelSelector, builder) }
  delivery(builder: string | OrderDeliveryModelSelector | ((selector: OrderDeliveryModelSelector) => OrderDeliveryModelSelector) | undefined) { return this.__child(`delivery`, OrderDeliveryModelSelector, builder) }
  lineItems(builder: string | LineItemModelSelector | ((selector: LineItemModelSelector) => LineItemModelSelector) | undefined) { return this.__child(`lineItems`, LineItemModelSelector, builder) }
}
export function selectFromSubscriptionPlan() {
  return new SubscriptionPlanModelSelector()
}

export const subscriptionPlanModelPrimitives = selectFromSubscriptionPlan().category.chargeDate.endDate.frequency.image.name.netPrice.planId.startDate.status.subCategory
