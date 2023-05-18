// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CustomerInfoModel, CustomerInfoModelType } from "./CustomerInfoModel"
import { CustomerInfoModelSelector } from "./CustomerInfoModel.base"
import { RootStoreType } from "./index"


/**
 * AuthRtoBase
 * auto generated base class for the model AuthRtoModel.
 *
 * Auth Response
 */
export const AuthRtoModelBase = ModelBase
  .named('AuthRto')
  .props({
    __typename: types.optional(types.literal("AuthRTO"), "AuthRTO"),
    accessToken: types.union(types.undefined, types.string),
    customerId: types.union(types.undefined, types.string),
    customerInfo: types.union(types.undefined, types.late((): any => CustomerInfoModel)),
    refreshToken: types.union(types.undefined, types.string),
    usid: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AuthRtoModelSelector extends QueryBuilder {
  get accessToken() { return this.__attr(`accessToken`) }
  get customerId() { return this.__attr(`customerId`) }
  get refreshToken() { return this.__attr(`refreshToken`) }
  get usid() { return this.__attr(`usid`) }
  customerInfo(builder: string | CustomerInfoModelSelector | ((selector: CustomerInfoModelSelector) => CustomerInfoModelSelector) | undefined) { return this.__child(`customerInfo`, CustomerInfoModelSelector, builder) }
}
export function selectFromAuthRto() {
  return new AuthRtoModelSelector()
}

export const authRtoModelPrimitives = selectFromAuthRto().accessToken.customerId.refreshToken.usid
