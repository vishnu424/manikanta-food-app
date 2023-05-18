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
 * TransactionBase
 * auto generated base class for the model TransactionModel.
 *
 * Order Transaction
 */
export const TransactionModelBase = ModelBase
  .named('Transaction')
  .props({
    __typename: types.optional(types.literal("Transaction"), "Transaction"),
    account: types.union(types.undefined, types.null, types.string),
    amount: types.union(types.undefined, types.number),
    cardType: types.union(types.undefined, types.null, types.string),
    customerId: types.union(types.undefined, types.null, types.string),
    meta: types.union(types.undefined, types.null, types.frozen()),
    token: types.union(types.undefined, types.null, types.string),
    transactionId: types.union(types.undefined, types.null, types.string),
    type: types.union(types.undefined, PaymentTypeEnumType),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class TransactionModelSelector extends QueryBuilder {
  get account() { return this.__attr(`account`) }
  get amount() { return this.__attr(`amount`) }
  get cardType() { return this.__attr(`cardType`) }
  get customerId() { return this.__attr(`customerId`) }
  get meta() { return this.__attr(`meta`) }
  get token() { return this.__attr(`token`) }
  get transactionId() { return this.__attr(`transactionId`) }
  get type() { return this.__attr(`type`) }
}
export function selectFromTransaction() {
  return new TransactionModelSelector()
}

export const transactionModelPrimitives = selectFromTransaction().account.amount.cardType.customerId.meta.token.transactionId.type
