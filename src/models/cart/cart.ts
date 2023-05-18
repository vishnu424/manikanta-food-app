import { clone, Instance, types } from "mobx-state-tree";
import { OrderPlan, OrderPlanModel } from "./order-plan";
import { PaymentsModel } from "./payments";
import randomise from "randomatic";

import {
  GiftCertificateModel,
  Frequency,
  AddressModel,
  PromotionModel,
  OrderSource,
  PlanCategory,
  PromotionModelType,
  DiscountType,
} from "@/models/api";
import { DeliveryModel } from "./delivery";
import _ from "lodash";
import { DISCOUNTS } from "@/shared/constant";
import { Address } from "../customer/address";

export const CartModel = types
  .model("Cart")
  .props({
    cartId: types.string,
    plans: types.optional(types.array(OrderPlanModel), []),
    giftCertificates: types.optional(types.array(GiftCertificateModel), []),
    frequency: types.optional(types.enumeration(Object.values(Frequency)), Frequency.ONCE),
    billingAddress: types.maybe(AddressModel),
    delivery: types.optional(DeliveryModel, {}),
    promotions: types.optional(types.array(PromotionModel), []),
    source: types.optional(types.enumeration(Object.values(OrderSource)), OrderSource.WEB),
    shippingCostBase: types.optional(types.number, 0),
    payments: types.maybe(PaymentsModel),
    updatedAt: types.maybeNull(types.Date),
    isCartOpen: types.optional(types.boolean, false),
  })
  .views((self) => ({
    get menuBuilderPlan(): OrderPlan | undefined {
      return _.find(self.plans, { category: PlanCategory.MENU });
    },
    get numberOfItems() {
      return _.sumBy(self.plans, "numberOfItems");
    },
    get numberOfDiscountedItems(): number {
      return _.sumBy(self.plans, "numberOfDiscountedItems");
    },
    get discount(): number {
      const thresholdDiscounts = Object.values(DISCOUNTS);
      const thresholds = _.map(thresholdDiscounts, "threshold");
      const numberOfDiscountedItems = this.numberOfDiscountedItems;
      const index = _.findLastIndex(
        thresholds,
        (o: number): boolean => o <= numberOfDiscountedItems,
      );

      return _.nth(thresholdDiscounts, index)?.value ?? 0;
    },
    get itemPromotions(): PromotionModelType[] {
      return _.filter(self.promotions, (promotion) => promotion.type !== DiscountType.SHIPPING);
    },
    get shippingPromotions(): PromotionModelType[] {
      return _.filter(self.promotions, (promotion) => promotion.type === DiscountType.SHIPPING);
    },
    get itemPromotionTotal(): number {
      return _.sumBy(this.itemPromotions, "value");
    },
    get shippingPromotionTotal(): number {
      return _.sumBy(this.shippingPromotions, "value");
    },
    get itemTotal(): number {
      return _.sumBy(self.plans, "total");
    },
    get giftCertificateTotal(): number {
      return _.sumBy(self.giftCertificates, "total");
    },
    get giftCardDiscount(): number {
      return _.sumBy(self.payments?.giftCards, "amount") ?? 0;
    },
    get subTotal(): number {
      return _.round(this.itemTotal + this.giftCertificateTotal, 2);
    },
    get total(): number {
      const total =
        this.subTotal +
        self.shippingCostBase -
        this.itemPromotionTotal -
        this.shippingPromotionTotal -
        this.giftCardDiscount;
      return _.round(total, 2);
    },
    get gst(): number {
      return _.round((this.total - this.giftCertificateTotal) / 11, 2);
    },
    get isSubscriptionOrder(): boolean {
      return self.frequency !== Frequency.ONCE;
    },
    get menuBuilderItems() {
      const menuBuilderPlan = this.menuBuilderPlan;
      const menuBuilderItems = _.groupBy(
        menuBuilderPlan?.lineItems ?? [],
        (item) => item.product.displayCategory,
      );
      return _.map(_.entries(menuBuilderItems), ([title, data]) => ({ title, data }));
    },
    get cartList() {
      const orderPlans = _.filter(self.plans, (plan) => plan.category !== PlanCategory.MENU);
      const items = this.menuBuilderItems;

      const data = [
        { title: 'Order Plans', data: orderPlans },
        { title: 'Gift Cards', data: self.giftCertificates },
        ...items,
      ];

      return _.filter(data, (item) => item.data.length > 0);
    },
    get isEmpty() {
      return (_.isEmpty(self.plans) || this.menuBuilderPlan?.lineItems?.length === 0) && _.isEmpty(self.giftCertificates);
    },
    get overview() {
      const numberOfDiscountedItems = this.numberOfDiscountedItems;
      const thresholdDiscounts = Object.values(DISCOUNTS);
      const thresholds = _.map(thresholdDiscounts, 'threshold');
      const discountValues = _.map(thresholdDiscounts, 'value');
      const minIndx = _.findIndex(thresholdDiscounts, (o) => o.value > 0);
      const index = _.findLastIndex(
        thresholds,
        (o) => o <= numberOfDiscountedItems
      );
      const nextIndex = Math.min(
        Math.max(index + 1, minIndx),
        thresholdDiscounts.length - 1
      );
      const offset = (index > -1 ? thresholds[index] : 0) ?? 0;
      const threshold = thresholds[nextIndex] ?? 0;
      const curPercentage =
        threshold === offset
          ? 1
          : (numberOfDiscountedItems - offset) / (threshold - offset);
      const percentage = Math.min(1, curPercentage);
      const discount = thresholdDiscounts[nextIndex]?.value;
      const currentDiscount = thresholdDiscounts[index]?.value ?? 0;
      return { discount, currentDiscount, percentage, numberOfDiscountedItems, threshold, discountValues };
    },
  }))
  .actions((self) => ({
    initOrderPlan(data: any) {
      const plan = OrderPlanModel.create({
        planId: randomise("Aa0", 16),
        ...data,
      });
      self.plans.push(plan);
      return plan;
    },
    setFrequency(frequency: Frequency) {
      self.frequency = frequency;
    },
    setDeliveryAddress(address: Address) {
      self.delivery.setDeliveryAddress(clone(address));
    },
    setShippingCostBase(shippingCostBase: number) {
      self.shippingCostBase = shippingCostBase;
    },
    clearCart() {
      self.plans.clear();
    },
    openCart() {
      self.isCartOpen = true;
    },
    closeCart() {
      self.isCartOpen = false;
    }
  }));

export interface Cart extends Instance<typeof CartModel> {}
