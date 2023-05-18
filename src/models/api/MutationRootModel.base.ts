// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AuthRtoModel, AuthRtoModelType } from "./AuthRtoModel"
import { AuthRtoModelSelector } from "./AuthRtoModel.base"
import { CartModel, CartModelType } from "./CartModel"
import { CartModelSelector } from "./CartModel.base"
import { CustomerProfileOutputModel, CustomerProfileOutputModelType } from "./CustomerProfileOutputModel"
import { CustomerProfileOutputModelSelector } from "./CustomerProfileOutputModel.base"
import { OrderModel, OrderModelType } from "./OrderModel"
import { OrderModelSelector } from "./OrderModel.base"
import { AuthCallbackInput, CartInput, ExtraItemDto, LoginInput, OldRegisterInput, PlaceOrderInput, RegisterInput, SubscriptionCancelInput, SubscriptionDeliveryDateInput, SubscriptionDeliveryInput, SubscriptionFrequencyInput, SubscriptionFuturesInput, SubscriptionPaymentInput, SwapWeeklyPlanDto, UpdateWeeklyPlanDto } from "./RootStore.base"
import { SubscriptionEntityModel, SubscriptionEntityModelType } from "./SubscriptionEntityModel"
import { SubscriptionEntityModelSelector } from "./SubscriptionEntityModel.base"
import { WeeklyPlanModel, WeeklyPlanModelType } from "./WeeklyPlanModel"
import { WeeklyPlanModelSelector } from "./WeeklyPlanModel.base"
import { RootStoreType } from "./index"


/**
 * MutationRootBase
 * auto generated base class for the model MutationRootModel.
 *
 * mutation root
 */
export const MutationRootModelBase = ModelBase
  .named('MutationRoot')
  .props({
    __typename: types.optional(types.literal("mutation_root"), "mutation_root"),
    addWeeklyPlanItem: types.union(types.undefined, types.late((): any => WeeklyPlanModel)),
    authCallback: types.union(types.undefined, types.late((): any => AuthRtoModel)),
    cancelSubscription: types.union(types.undefined, types.late((): any => SubscriptionEntityModel)),
    deleteWeeklyPlanItem: types.union(types.undefined, types.late((): any => WeeklyPlanModel)),
    login: types.union(types.undefined, types.late((): any => AuthRtoModel)),
    loginGuest: types.union(types.undefined, types.late((): any => AuthRtoModel)),
    logout: types.union(types.undefined, types.string),
    oldLogin: types.union(types.undefined, types.late((): any => CustomerProfileOutputModel)),
    placeOrder: types.union(types.undefined, types.late((): any => OrderModel)),
    register: types.union(types.undefined, types.late((): any => AuthRtoModel)),
    signup: types.union(types.undefined, types.late((): any => CustomerProfileOutputModel)),
    swapWeeklyPlanDays: types.union(types.undefined, types.late((): any => WeeklyPlanModel)),
    updateSubscriptionDelivery: types.union(types.undefined, types.late((): any => SubscriptionEntityModel)),
    updateSubscriptionDeliveryDate: types.union(types.undefined, types.late((): any => SubscriptionEntityModel)),
    updateSubscriptionFrequency: types.union(types.undefined, types.late((): any => SubscriptionEntityModel)),
    updateSubscriptionFutures: types.union(types.undefined, types.late((): any => SubscriptionEntityModel)),
    updateSubscriptionPayment: types.union(types.undefined, types.late((): any => SubscriptionEntityModel)),
    updateWeeklyPlan: types.union(types.undefined, types.late((): any => WeeklyPlanModel)),
    updateWeeklyPlanItem: types.union(types.undefined, types.late((): any => WeeklyPlanModel)),
    upsertCart: types.union(types.undefined, types.late((): any => CartModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MutationRootModelSelector extends QueryBuilder {
  get logout() { return this.__attr(`logout`) }
  addWeeklyPlanItem(builder: string | WeeklyPlanModelSelector | ((selector: WeeklyPlanModelSelector) => WeeklyPlanModelSelector) | undefined, args: { id: string, input: ExtraItemDto }) { return this.__child(`addWeeklyPlanItem`+ (args ? '('+['id', 'input'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), WeeklyPlanModelSelector, builder) }
  authCallback(builder: string | AuthRtoModelSelector | ((selector: AuthRtoModelSelector) => AuthRtoModelSelector) | undefined, args: { input: AuthCallbackInput }) { return this.__child(`authCallback`+ (args ? '('+['input'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AuthRtoModelSelector, builder) }
  cancelSubscription(builder: string | SubscriptionEntityModelSelector | ((selector: SubscriptionEntityModelSelector) => SubscriptionEntityModelSelector) | undefined, args: { input: SubscriptionCancelInput }) { return this.__child(`cancelSubscription`+ (args ? '('+['input'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), SubscriptionEntityModelSelector, builder) }
  deleteWeeklyPlanItem(builder: string | WeeklyPlanModelSelector | ((selector: WeeklyPlanModelSelector) => WeeklyPlanModelSelector) | undefined, args: { day: number, id: string, itemId: string }) { return this.__child(`deleteWeeklyPlanItem`+ (args ? '('+['day', 'id', 'itemId'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), WeeklyPlanModelSelector, builder) }
  login(builder: string | AuthRtoModelSelector | ((selector: AuthRtoModelSelector) => AuthRtoModelSelector) | undefined, args: { input: LoginInput }) { return this.__child(`login`+ (args ? '('+['input'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AuthRtoModelSelector, builder) }
  loginGuest(builder: string | AuthRtoModelSelector | ((selector: AuthRtoModelSelector) => AuthRtoModelSelector) | undefined) { return this.__child(`loginGuest`, AuthRtoModelSelector, builder) }
  oldLogin(builder: string | CustomerProfileOutputModelSelector | ((selector: CustomerProfileOutputModelSelector) => CustomerProfileOutputModelSelector) | undefined, args: { input: LoginInput }) { return this.__child(`oldLogin`+ (args ? '('+['input'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CustomerProfileOutputModelSelector, builder) }
  placeOrder(builder: string | OrderModelSelector | ((selector: OrderModelSelector) => OrderModelSelector) | undefined, args: { input: PlaceOrderInput }) { return this.__child(`placeOrder`+ (args ? '('+['input'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrderModelSelector, builder) }
  register(builder: string | AuthRtoModelSelector | ((selector: AuthRtoModelSelector) => AuthRtoModelSelector) | undefined, args: { input: RegisterInput }) { return this.__child(`register`+ (args ? '('+['input'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AuthRtoModelSelector, builder) }
  signup(builder: string | CustomerProfileOutputModelSelector | ((selector: CustomerProfileOutputModelSelector) => CustomerProfileOutputModelSelector) | undefined, args: { input: OldRegisterInput }) { return this.__child(`signup`+ (args ? '('+['input'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CustomerProfileOutputModelSelector, builder) }
  swapWeeklyPlanDays(builder: string | WeeklyPlanModelSelector | ((selector: WeeklyPlanModelSelector) => WeeklyPlanModelSelector) | undefined, args: { id: string, input: SwapWeeklyPlanDto }) { return this.__child(`swapWeeklyPlanDays`+ (args ? '('+['id', 'input'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), WeeklyPlanModelSelector, builder) }
  updateSubscriptionDelivery(builder: string | SubscriptionEntityModelSelector | ((selector: SubscriptionEntityModelSelector) => SubscriptionEntityModelSelector) | undefined, args: { input: SubscriptionDeliveryInput }) { return this.__child(`updateSubscriptionDelivery`+ (args ? '('+['input'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), SubscriptionEntityModelSelector, builder) }
  updateSubscriptionDeliveryDate(builder: string | SubscriptionEntityModelSelector | ((selector: SubscriptionEntityModelSelector) => SubscriptionEntityModelSelector) | undefined, args: { input: SubscriptionDeliveryDateInput }) { return this.__child(`updateSubscriptionDeliveryDate`+ (args ? '('+['input'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), SubscriptionEntityModelSelector, builder) }
  updateSubscriptionFrequency(builder: string | SubscriptionEntityModelSelector | ((selector: SubscriptionEntityModelSelector) => SubscriptionEntityModelSelector) | undefined, args: { input: SubscriptionFrequencyInput }) { return this.__child(`updateSubscriptionFrequency`+ (args ? '('+['input'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), SubscriptionEntityModelSelector, builder) }
  updateSubscriptionFutures(builder: string | SubscriptionEntityModelSelector | ((selector: SubscriptionEntityModelSelector) => SubscriptionEntityModelSelector) | undefined, args: { input: SubscriptionFuturesInput }) { return this.__child(`updateSubscriptionFutures`+ (args ? '('+['input'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), SubscriptionEntityModelSelector, builder) }
  updateSubscriptionPayment(builder: string | SubscriptionEntityModelSelector | ((selector: SubscriptionEntityModelSelector) => SubscriptionEntityModelSelector) | undefined, args: { input: SubscriptionPaymentInput }) { return this.__child(`updateSubscriptionPayment`+ (args ? '('+['input'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), SubscriptionEntityModelSelector, builder) }
  updateWeeklyPlan(builder: string | WeeklyPlanModelSelector | ((selector: WeeklyPlanModelSelector) => WeeklyPlanModelSelector) | undefined, args: { id: string, input: UpdateWeeklyPlanDto }) { return this.__child(`updateWeeklyPlan`+ (args ? '('+['id', 'input'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), WeeklyPlanModelSelector, builder) }
  updateWeeklyPlanItem(builder: string | WeeklyPlanModelSelector | ((selector: WeeklyPlanModelSelector) => WeeklyPlanModelSelector) | undefined, args: { id: string, input: ExtraItemDto, itemId: string }) { return this.__child(`updateWeeklyPlanItem`+ (args ? '('+['id', 'input', 'itemId'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), WeeklyPlanModelSelector, builder) }
  upsertCart(builder: string | CartModelSelector | ((selector: CartModelSelector) => CartModelSelector) | undefined, args: { input: CartInput }) { return this.__child(`upsertCart`+ (args ? '('+['input'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CartModelSelector, builder) }
}
export function selectFromMutationRoot() {
  return new MutationRootModelSelector()
}

export const mutationRootModelPrimitives = selectFromMutationRoot().logout
