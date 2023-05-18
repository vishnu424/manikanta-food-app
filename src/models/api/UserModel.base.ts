// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UserBase
 * auto generated base class for the model UserModel.
 *
 * user
 */
export const UserModelBase = ModelBase
  .named('User')
  .props({
    __typename: types.optional(types.literal("User"), "User"),
    _id: types.identifier,
    accountNotes: types.union(types.undefined, types.string),
    activationDate: types.union(types.undefined, types.frozen()),
    active: types.union(types.undefined, types.boolean),
    authType: types.union(types.undefined, types.string),
    birthday: types.union(types.undefined, types.frozen()),
    braintreeId: types.union(types.undefined, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    credit: types.union(types.undefined, types.number),
    email: types.union(types.undefined, types.string),
    f45Id: types.union(types.undefined, types.string),
    faveOrder: types.union(types.undefined, types.string),
    isTrainer: types.union(types.undefined, types.boolean),
    lastCelebration: types.union(types.undefined, types.string),
    notes: types.union(types.undefined, types.string),
    numberOfOrders: types.union(types.undefined, types.number),
    numberOfRefers: types.union(types.undefined, types.number),
    orderCount: types.union(types.undefined, types.number),
    password: types.union(types.undefined, types.string),
    payment: types.union(types.undefined, types.string),
    phone: types.union(types.undefined, types.string),
    postcode: types.union(types.undefined, types.number),
    referCapped: types.union(types.undefined, types.boolean),
    referCode: types.union(types.undefined, types.string),
    salesforceId: types.union(types.undefined, types.string),
    salesforceSystemId: types.union(types.undefined, types.string),
    sid: types.union(types.undefined, types.string),
    source: types.union(types.undefined, types.string),
    unsubscribeEmail: types.union(types.undefined, types.boolean),
    updatedAt: types.union(types.undefined, types.frozen()),
    zippayId: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UserModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get accountNotes() { return this.__attr(`accountNotes`) }
  get activationDate() { return this.__attr(`activationDate`) }
  get active() { return this.__attr(`active`) }
  get authType() { return this.__attr(`authType`) }
  get birthday() { return this.__attr(`birthday`) }
  get braintreeId() { return this.__attr(`braintreeId`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get credit() { return this.__attr(`credit`) }
  get email() { return this.__attr(`email`) }
  get f45Id() { return this.__attr(`f45Id`) }
  get faveOrder() { return this.__attr(`faveOrder`) }
  get isTrainer() { return this.__attr(`isTrainer`) }
  get lastCelebration() { return this.__attr(`lastCelebration`) }
  get notes() { return this.__attr(`notes`) }
  get numberOfOrders() { return this.__attr(`numberOfOrders`) }
  get numberOfRefers() { return this.__attr(`numberOfRefers`) }
  get orderCount() { return this.__attr(`orderCount`) }
  get password() { return this.__attr(`password`) }
  get payment() { return this.__attr(`payment`) }
  get phone() { return this.__attr(`phone`) }
  get postcode() { return this.__attr(`postcode`) }
  get referCapped() { return this.__attr(`referCapped`) }
  get referCode() { return this.__attr(`referCode`) }
  get salesforceId() { return this.__attr(`salesforceId`) }
  get salesforceSystemId() { return this.__attr(`salesforceSystemId`) }
  get sid() { return this.__attr(`sid`) }
  get source() { return this.__attr(`source`) }
  get unsubscribeEmail() { return this.__attr(`unsubscribeEmail`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get zippayId() { return this.__attr(`zippayId`) }
}
export function selectFromUser() {
  return new UserModelSelector()
}

export const userModelPrimitives = selectFromUser()._id.accountNotes.activationDate.active.authType.birthday.braintreeId.createdAt.credit.email.f45Id.faveOrder.isTrainer.lastCelebration.notes.numberOfOrders.numberOfRefers.orderCount.password.payment.phone.postcode.referCapped.referCode.salesforceId.salesforceSystemId.sid.source.unsubscribeEmail.updatedAt.zippayId
