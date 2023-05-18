// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AddressModel, AddressModelType } from "./AddressModel"
import { AddressModelSelector } from "./AddressModel.base"
import { FrequencyEnumType } from "./FrequencyEnum"
import { OrderCustomerModel, OrderCustomerModelType } from "./OrderCustomerModel"
import { OrderCustomerModelSelector } from "./OrderCustomerModel.base"
import { OrderDeliveryModel, OrderDeliveryModelType } from "./OrderDeliveryModel"
import { OrderDeliveryModelSelector } from "./OrderDeliveryModel.base"
import { OrderModel, OrderModelType } from "./OrderModel"
import { OrderModelSelector } from "./OrderModel.base"
import { PaymentModel, PaymentModelType } from "./PaymentModel"
import { PaymentModelSelector } from "./PaymentModel.base"
import { SubscriptionCategoryEnumType } from "./SubscriptionCategoryEnum"
import { SubscriptionFutureModel, SubscriptionFutureModelType } from "./SubscriptionFutureModel"
import { SubscriptionFutureModelSelector } from "./SubscriptionFutureModel.base"
import { SubscriptionPlanModel, SubscriptionPlanModelType } from "./SubscriptionPlanModel"
import { SubscriptionPlanModelSelector } from "./SubscriptionPlanModel.base"
import { SubscriptionStatusEnumType } from "./SubscriptionStatusEnum"
import { RootStoreType } from "./index"


/**
 * SubscriptionEntityBase
 * auto generated base class for the model SubscriptionEntityModel.
 *
 * Subscription
 */
export const SubscriptionEntityModelBase = ModelBase
  .named('SubscriptionEntity')
  .props({
    __typename: types.optional(types.literal("SubscriptionEntity"), "SubscriptionEntity"),
    _id: types.identifier,
    billingAddress: types.union(types.undefined, types.late((): any => AddressModel)),
    category: types.union(types.undefined, SubscriptionCategoryEnumType),
    chargeDate: types.union(types.undefined, types.frozen()),
    currentOrder: types.union(types.undefined, types.late((): any => OrderModel)),
    customer: types.union(types.undefined, types.late((): any => OrderCustomerModel)),
    delivery: types.union(types.undefined, types.late((): any => OrderDeliveryModel)),
    endDate: types.union(types.undefined, types.null, types.frozen()),
    frequency: types.union(types.undefined, FrequencyEnumType),
    futures: types.union(types.undefined, types.array(types.late((): any => SubscriptionFutureModel))),
    payment: types.union(types.undefined, types.late((): any => PaymentModel)),
    plans: types.union(types.undefined, types.array(types.late((): any => SubscriptionPlanModel))),
    startDate: types.union(types.undefined, types.frozen()),
    status: types.union(types.undefined, SubscriptionStatusEnumType),
    subId: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SubscriptionEntityModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get category() { return this.__attr(`category`) }
  get chargeDate() { return this.__attr(`chargeDate`) }
  get endDate() { return this.__attr(`endDate`) }
  get frequency() { return this.__attr(`frequency`) }
  get startDate() { return this.__attr(`startDate`) }
  get status() { return this.__attr(`status`) }
  get subId() { return this.__attr(`subId`) }
  billingAddress(builder: string | AddressModelSelector | ((selector: AddressModelSelector) => AddressModelSelector) | undefined) { return this.__child(`billingAddress`, AddressModelSelector, builder) }
  currentOrder(builder: string | OrderModelSelector | ((selector: OrderModelSelector) => OrderModelSelector) | undefined) { return this.__child(`currentOrder`, OrderModelSelector, builder) }
  customer(builder: string | OrderCustomerModelSelector | ((selector: OrderCustomerModelSelector) => OrderCustomerModelSelector) | undefined) { return this.__child(`customer`, OrderCustomerModelSelector, builder) }
  delivery(builder: string | OrderDeliveryModelSelector | ((selector: OrderDeliveryModelSelector) => OrderDeliveryModelSelector) | undefined) { return this.__child(`delivery`, OrderDeliveryModelSelector, builder) }
  futures(builder: string | SubscriptionFutureModelSelector | ((selector: SubscriptionFutureModelSelector) => SubscriptionFutureModelSelector) | undefined) { return this.__child(`futures`, SubscriptionFutureModelSelector, builder) }
  payment(builder: string | PaymentModelSelector | ((selector: PaymentModelSelector) => PaymentModelSelector) | undefined) { return this.__child(`payment`, PaymentModelSelector, builder) }
  plans(builder: string | SubscriptionPlanModelSelector | ((selector: SubscriptionPlanModelSelector) => SubscriptionPlanModelSelector) | undefined) { return this.__child(`plans`, SubscriptionPlanModelSelector, builder) }
}
export function selectFromSubscriptionEntity() {
  return new SubscriptionEntityModelSelector()
}

export const subscriptionEntityModelPrimitives = selectFromSubscriptionEntity()._id.category.chargeDate.endDate.frequency.startDate.status.subId
