// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CartAddressModel, CartAddressModelType } from "./CartAddressModel"
import { CartAddressModelSelector } from "./CartAddressModel.base"
import { CartDeliveryModel, CartDeliveryModelType } from "./CartDeliveryModel"
import { CartDeliveryModelSelector } from "./CartDeliveryModel.base"
import { CartPlanModel, CartPlanModelType } from "./CartPlanModel"
import { CartPlanModelSelector } from "./CartPlanModel.base"
import { CartTotalModel, CartTotalModelType } from "./CartTotalModel"
import { CartTotalModelSelector } from "./CartTotalModel.base"
import { FrequencyEnumType } from "./FrequencyEnum"
import { GiftCertificateModel, GiftCertificateModelType } from "./GiftCertificateModel"
import { GiftCertificateModelSelector } from "./GiftCertificateModel.base"
import { OrderCustomerModel, OrderCustomerModelType } from "./OrderCustomerModel"
import { OrderCustomerModelSelector } from "./OrderCustomerModel.base"
import { OrderSourceEnumType } from "./OrderSourceEnum"
import { RootStoreType } from "./index"


/**
 * CartBase
 * auto generated base class for the model CartModel.
 *
 * Cart
 */
export const CartModelBase = ModelBase
  .named('Cart')
  .props({
    __typename: types.optional(types.literal("Cart"), "Cart"),
    _id: types.identifier,
    billing: types.union(types.undefined, types.null, types.late((): any => CartAddressModel)),
    checkoutStartAt: types.union(types.undefined, types.null, types.frozen()),
    customer: types.union(types.undefined, types.late((): any => OrderCustomerModel)),
    delivery: types.union(types.undefined, types.late((): any => CartDeliveryModel)),
    frequency: types.union(types.undefined, types.null, FrequencyEnumType),
    giftCertificates: types.union(types.undefined, types.array(types.late((): any => GiftCertificateModel))),
    plans: types.union(types.undefined, types.array(types.late((): any => CartPlanModel))),
    source: types.union(types.undefined, OrderSourceEnumType),
    totals: types.union(types.undefined, types.late((): any => CartTotalModel)),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CartModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get checkoutStartAt() { return this.__attr(`checkoutStartAt`) }
  get frequency() { return this.__attr(`frequency`) }
  get source() { return this.__attr(`source`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  billing(builder: string | CartAddressModelSelector | ((selector: CartAddressModelSelector) => CartAddressModelSelector) | undefined) { return this.__child(`billing`, CartAddressModelSelector, builder) }
  customer(builder: string | OrderCustomerModelSelector | ((selector: OrderCustomerModelSelector) => OrderCustomerModelSelector) | undefined) { return this.__child(`customer`, OrderCustomerModelSelector, builder) }
  delivery(builder: string | CartDeliveryModelSelector | ((selector: CartDeliveryModelSelector) => CartDeliveryModelSelector) | undefined) { return this.__child(`delivery`, CartDeliveryModelSelector, builder) }
  giftCertificates(builder: string | GiftCertificateModelSelector | ((selector: GiftCertificateModelSelector) => GiftCertificateModelSelector) | undefined) { return this.__child(`giftCertificates`, GiftCertificateModelSelector, builder) }
  plans(builder: string | CartPlanModelSelector | ((selector: CartPlanModelSelector) => CartPlanModelSelector) | undefined) { return this.__child(`plans`, CartPlanModelSelector, builder) }
  totals(builder: string | CartTotalModelSelector | ((selector: CartTotalModelSelector) => CartTotalModelSelector) | undefined) { return this.__child(`totals`, CartTotalModelSelector, builder) }
}
export function selectFromCart() {
  return new CartModelSelector()
}

export const cartModelPrimitives = selectFromCart()._id.checkoutStartAt.frequency.source.updatedAt
