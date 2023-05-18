// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PaymentCardModel, PaymentCardModelType } from "./PaymentCardModel"
import { PaymentCardModelSelector } from "./PaymentCardModel.base"
import { RootStoreType } from "./index"


/**
 * CustomerPaymentBase
 * auto generated base class for the model CustomerPaymentModel.
 *
 * Customer Payment
 */
export const CustomerPaymentModelBase = ModelBase
  .named('CustomerPayment')
  .props({
    __typename: types.optional(types.literal("CustomerPayment"), "CustomerPayment"),
    paymentCard: types.union(types.undefined, types.null, types.late((): any => PaymentCardModel)),
    paymentInstrumentId: types.identifier,
    paymentMethodId: types.union(types.undefined, types.string),
    paymentMethodToken: types.union(types.undefined, types.string),
    paypalAccountEmail: types.union(types.undefined, types.null, types.string),
    preferred: types.union(types.undefined, types.boolean),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CustomerPaymentModelSelector extends QueryBuilder {
  get paymentInstrumentId() { return this.__attr(`paymentInstrumentId`) }
  get paymentMethodId() { return this.__attr(`paymentMethodId`) }
  get paymentMethodToken() { return this.__attr(`paymentMethodToken`) }
  get paypalAccountEmail() { return this.__attr(`paypalAccountEmail`) }
  get preferred() { return this.__attr(`preferred`) }
  paymentCard(builder: string | PaymentCardModelSelector | ((selector: PaymentCardModelSelector) => PaymentCardModelSelector) | undefined) { return this.__child(`paymentCard`, PaymentCardModelSelector, builder) }
}
export function selectFromCustomerPayment() {
  return new CustomerPaymentModelSelector()
}

export const customerPaymentModelPrimitives = selectFromCustomerPayment().paymentInstrumentId.paymentMethodId.paymentMethodToken.paypalAccountEmail.preferred
