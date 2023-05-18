// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PaymentCardBase
 * auto generated base class for the model PaymentCardModel.
 *
 * Customer Payment Card
 */
export const PaymentCardModelBase = ModelBase
  .named('PaymentCard')
  .props({
    __typename: types.optional(types.literal("PaymentCard"), "PaymentCard"),
    cardType: types.union(types.undefined, types.string),
    creditCardExpired: types.union(types.undefined, types.boolean),
    expirationMonth: types.union(types.undefined, types.string),
    expirationYear: types.union(types.undefined, types.string),
    holder: types.union(types.undefined, types.null, types.string),
    maskedNumber: types.union(types.undefined, types.string),
    numberLastDigits: types.union(types.undefined, types.string),
    type: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PaymentCardModelSelector extends QueryBuilder {
  get cardType() { return this.__attr(`cardType`) }
  get creditCardExpired() { return this.__attr(`creditCardExpired`) }
  get expirationMonth() { return this.__attr(`expirationMonth`) }
  get expirationYear() { return this.__attr(`expirationYear`) }
  get holder() { return this.__attr(`holder`) }
  get maskedNumber() { return this.__attr(`maskedNumber`) }
  get numberLastDigits() { return this.__attr(`numberLastDigits`) }
  get type() { return this.__attr(`type`) }
}
export function selectFromPaymentCard() {
  return new PaymentCardModelSelector()
}

export const paymentCardModelPrimitives = selectFromPaymentCard().cardType.creditCardExpired.expirationMonth.expirationYear.holder.maskedNumber.numberLastDigits.type
