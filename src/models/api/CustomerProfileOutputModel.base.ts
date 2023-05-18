// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CustomerProfileModel, CustomerProfileModelType } from "./CustomerProfileModel"
import { CustomerProfileModelSelector } from "./CustomerProfileModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  customer: CustomerProfileModelType;
}

/**
 * CustomerProfileOutputBase
 * auto generated base class for the model CustomerProfileOutputModel.
 */
export const CustomerProfileOutputModelBase = withTypedRefs<Refs>()(ModelBase
  .named('CustomerProfileOutput')
  .props({
    __typename: types.optional(types.literal("CustomerProfileOutput"), "CustomerProfileOutput"),
    customer: types.union(types.undefined, MSTGQLRef(types.late((): any => CustomerProfileModel))),
    status: types.union(types.undefined, types.string),
    token: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CustomerProfileOutputModelSelector extends QueryBuilder {
  get status() { return this.__attr(`status`) }
  get token() { return this.__attr(`token`) }
  customer(builder: string | CustomerProfileModelSelector | ((selector: CustomerProfileModelSelector) => CustomerProfileModelSelector) | undefined) { return this.__child(`customer`, CustomerProfileModelSelector, builder) }
}
export function selectFromCustomerProfileOutput() {
  return new CustomerProfileOutputModelSelector()
}

export const customerProfileOutputModelPrimitives = selectFromCustomerProfileOutput().status.token
