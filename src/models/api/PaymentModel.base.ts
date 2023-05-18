// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PaymentTypeEnumType } from "./PaymentTypeEnum"
import { RootStoreType } from "./index"


/**
 * PaymentBase
 * auto generated base class for the model PaymentModel.
 *
 * Payment
 */
export const PaymentModelBase = ModelBase
  .named('Payment')
  .props({
    __typename: types.optional(types.literal("Payment"), "Payment"),
    token: types.union(types.undefined, types.string),
    type: types.union(types.undefined, PaymentTypeEnumType),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PaymentModelSelector extends QueryBuilder {
  get token() { return this.__attr(`token`) }
  get type() { return this.__attr(`type`) }
}
export function selectFromPayment() {
  return new PaymentModelSelector()
}

export const paymentModelPrimitives = selectFromPayment().token.type
