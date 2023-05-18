// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AddressModel, AddressModelType } from "./AddressModel"
import { AddressModelSelector } from "./AddressModel.base"
import { AttributeModel, AttributeModelType } from "./AttributeModel"
import { AttributeModelSelector } from "./AttributeModel.base"
import { FrequencyEnumType } from "./FrequencyEnum"
import { GiftCertificateModel, GiftCertificateModelType } from "./GiftCertificateModel"
import { GiftCertificateModelSelector } from "./GiftCertificateModel.base"
import { OrderCategoryEnumType } from "./OrderCategoryEnum"
import { OrderCustomerModel, OrderCustomerModelType } from "./OrderCustomerModel"
import { OrderCustomerModelSelector } from "./OrderCustomerModel.base"
import { OrderDeliveryModel, OrderDeliveryModelType } from "./OrderDeliveryModel"
import { OrderDeliveryModelSelector } from "./OrderDeliveryModel.base"
import { OrderPlanModel, OrderPlanModelType } from "./OrderPlanModel"
import { OrderPlanModelSelector } from "./OrderPlanModel.base"
import { OrderSourceEnumType } from "./OrderSourceEnum"
import { OrderStatusEnumType } from "./OrderStatusEnum"
import { OrderTotalModel, OrderTotalModelType } from "./OrderTotalModel"
import { OrderTotalModelSelector } from "./OrderTotalModel.base"
import { PaymentStatusEnumType } from "./PaymentStatusEnum"
import { PromotionModel, PromotionModelType } from "./PromotionModel"
import { PromotionModelSelector } from "./PromotionModel.base"
import { ShippingStatusEnumType } from "./ShippingStatusEnum"
import { TransactionModel, TransactionModelType } from "./TransactionModel"
import { TransactionModelSelector } from "./TransactionModel.base"
import { RootStoreType } from "./index"


/**
 * OrderBase
 * auto generated base class for the model OrderModel.
 *
 * Order
 */
export const OrderModelBase = ModelBase
  .named('Order')
  .props({
    __typename: types.optional(types.literal("Order"), "Order"),
    _id: types.identifier,
    attributes: types.union(types.undefined, types.array(types.late((): any => AttributeModel))),
    billingAddress: types.union(types.undefined, types.late((): any => AddressModel)),
    category: types.union(types.undefined, OrderCategoryEnumType),
    createdAt: types.union(types.undefined, types.frozen()),
    customer: types.union(types.undefined, types.late((): any => OrderCustomerModel)),
    delivery: types.union(types.undefined, types.late((): any => OrderDeliveryModel)),
    frequency: types.union(types.undefined, FrequencyEnumType),
    giftCertificates: types.union(types.undefined, types.array(types.late((): any => GiftCertificateModel))),
    invoiceNumber: types.union(types.undefined, types.string),
    key: types.union(types.undefined, types.string),
    orderPlans: types.union(types.undefined, types.array(types.late((): any => OrderPlanModel))),
    orderStatus: types.union(types.undefined, OrderStatusEnumType),
    paymentStatus: types.union(types.undefined, PaymentStatusEnumType),
    processedAt: types.union(types.undefined, types.frozen()),
    promotions: types.union(types.undefined, types.array(types.late((): any => PromotionModel))),
    salesforceOrderNumber: types.union(types.undefined, types.null, types.string),
    shippingStatus: types.union(types.undefined, ShippingStatusEnumType),
    source: types.union(types.undefined, OrderSourceEnumType),
    subId: types.union(types.undefined, types.null, types.string),
    totals: types.union(types.undefined, types.late((): any => OrderTotalModel)),
    transactions: types.union(types.undefined, types.array(types.late((): any => TransactionModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get category() { return this.__attr(`category`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get frequency() { return this.__attr(`frequency`) }
  get invoiceNumber() { return this.__attr(`invoiceNumber`) }
  get key() { return this.__attr(`key`) }
  get orderStatus() { return this.__attr(`orderStatus`) }
  get paymentStatus() { return this.__attr(`paymentStatus`) }
  get processedAt() { return this.__attr(`processedAt`) }
  get salesforceOrderNumber() { return this.__attr(`salesforceOrderNumber`) }
  get shippingStatus() { return this.__attr(`shippingStatus`) }
  get source() { return this.__attr(`source`) }
  get subId() { return this.__attr(`subId`) }
  attributes(builder: string | AttributeModelSelector | ((selector: AttributeModelSelector) => AttributeModelSelector) | undefined) { return this.__child(`attributes`, AttributeModelSelector, builder) }
  billingAddress(builder: string | AddressModelSelector | ((selector: AddressModelSelector) => AddressModelSelector) | undefined) { return this.__child(`billingAddress`, AddressModelSelector, builder) }
  customer(builder: string | OrderCustomerModelSelector | ((selector: OrderCustomerModelSelector) => OrderCustomerModelSelector) | undefined) { return this.__child(`customer`, OrderCustomerModelSelector, builder) }
  delivery(builder: string | OrderDeliveryModelSelector | ((selector: OrderDeliveryModelSelector) => OrderDeliveryModelSelector) | undefined) { return this.__child(`delivery`, OrderDeliveryModelSelector, builder) }
  giftCertificates(builder: string | GiftCertificateModelSelector | ((selector: GiftCertificateModelSelector) => GiftCertificateModelSelector) | undefined) { return this.__child(`giftCertificates`, GiftCertificateModelSelector, builder) }
  orderPlans(builder: string | OrderPlanModelSelector | ((selector: OrderPlanModelSelector) => OrderPlanModelSelector) | undefined) { return this.__child(`orderPlans`, OrderPlanModelSelector, builder) }
  promotions(builder: string | PromotionModelSelector | ((selector: PromotionModelSelector) => PromotionModelSelector) | undefined) { return this.__child(`promotions`, PromotionModelSelector, builder) }
  totals(builder: string | OrderTotalModelSelector | ((selector: OrderTotalModelSelector) => OrderTotalModelSelector) | undefined) { return this.__child(`totals`, OrderTotalModelSelector, builder) }
  transactions(builder: string | TransactionModelSelector | ((selector: TransactionModelSelector) => TransactionModelSelector) | undefined) { return this.__child(`transactions`, TransactionModelSelector, builder) }
}
export function selectFromOrder() {
  return new OrderModelSelector()
}

export const orderModelPrimitives = selectFromOrder()._id.category.createdAt.frequency.invoiceNumber.key.orderStatus.paymentStatus.processedAt.salesforceOrderNumber.shippingStatus.source.subId
