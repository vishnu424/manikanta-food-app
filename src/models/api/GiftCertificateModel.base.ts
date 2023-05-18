// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * GiftCertificateBase
 * auto generated base class for the model GiftCertificateModel.
 *
 * Gift Card
 */
export const GiftCertificateModelBase = ModelBase
  .named('GiftCertificate')
  .props({
    __typename: types.optional(types.literal("GiftCertificate"), "GiftCertificate"),
    grossPrice: types.union(types.undefined, types.number),
    lineitemText: types.union(types.undefined, types.null, types.string),
    netPrice: types.union(types.undefined, types.number),
    recipientEmail: types.union(types.undefined, types.string),
    recipientName: types.union(types.undefined, types.string),
    senderName: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class GiftCertificateModelSelector extends QueryBuilder {
  get grossPrice() { return this.__attr(`grossPrice`) }
  get lineitemText() { return this.__attr(`lineitemText`) }
  get netPrice() { return this.__attr(`netPrice`) }
  get recipientEmail() { return this.__attr(`recipientEmail`) }
  get recipientName() { return this.__attr(`recipientName`) }
  get senderName() { return this.__attr(`senderName`) }
}
export function selectFromGiftCertificate() {
  return new GiftCertificateModelSelector()
}

export const giftCertificateModelPrimitives = selectFromGiftCertificate().grossPrice.lineitemText.netPrice.recipientEmail.recipientName.senderName
