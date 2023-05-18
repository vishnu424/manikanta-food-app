import {
  AttributeModel,
  ProductModel,
  ProductModelType,
  PlanCategory,
} from '@/models/api';
import { Instance, types, destroy} from 'mobx-state-tree';
import { find, sumBy, keyBy } from 'lodash';
import { withRootStore } from '../helpers/with-root-store';

export const LineItemModel = types.model('LineItem').props({
  product: types.reference(types.late(() => ProductModel)),
  qty: types.number,
  attributes: types.optional(types.array(AttributeModel), []),
});

export interface LineItem extends Instance<typeof LineItemModel> {}

export const OrderPlanModel = types
  .model('OrderPlan')
  .props({
    planId: types.identifier,
    category: types.enumeration(Object.values(PlanCategory)),
    subCategory: types.maybe(types.frozen()),
    name: types.string,
    image: types.maybe(types.string),
    netPrice: types.optional(types.number, 0),
    attributes: types.optional(types.array(AttributeModel), []),
    lineItems: types.optional(types.array(LineItemModel), []),
  })
  .extend(withRootStore)
  .views((self) => ({
    get isWlpPlan(): boolean {
      return self.subCategory?.startsWith('wlp-');
    },
    get numberOfItems(): number {
      return sumBy(self.lineItems, 'qty');
    },
    get numberOfDiscountedItems(): number {
      if (this.isWlpPlan) return 0;
      return sumBy(self.lineItems, (item) =>
        item.product.isDiscountable ? item.qty : 0
      );
    },
    get productQtyBySku(): Record<string, LineItem> {
      return keyBy(self.lineItems, (item) => item.product.sku);
    },
    get discount(): number {
      const cart = self.rootStore.cartStore.cart;
      if (this.isWlpPlan) return 0; // TODO: add discount for WLP plans
      return cart?.discount || 0;
    },
    get total(): number {
      if (this.isWlpPlan) return self.netPrice;
      const discount = this.discount;
      return sumBy(self.lineItems, ({ product, qty }) => {
        return product.getDiscountedPrice(discount) * qty;
      });
    },
  }))
  .actions((self) => ({
    increaseLineItem(product: ProductModelType) {
      const lineItem = self.lineItems.find(
        (item) => item.product.sku === product.sku
      );
      if (lineItem) {
        lineItem.qty += 1;
      } else {
        const lineItem = LineItemModel.create({ product: product.sku, qty: 1 });
        self.lineItems.push(lineItem);
      }
    },
    decreaseLineItem(product: ProductModelType) {
      const lineItem = self.lineItems.find(
        (item) => item.product.sku === product.sku
      );
      if (lineItem) {
        lineItem.qty -= 1;
        if (lineItem.qty <= 0) {
          destroy(lineItem);
        }
      }
    },
    deleteLineItem(product: ProductModelType) {
      const lineItem = self.lineItems.find(
        (item) => item.product.sku === product.sku
      );
      if (lineItem) { 
        destroy(lineItem);
      }
      
    },
    swapLineItem(product: ProductModelType, position: number, day: number) {
      const lineItem = self.lineItems.find((item) => {
        const attributes = item.attributes;
        return (
          find(attributes, { name: 'position', value: position }) &&
          find(attributes, { name: 'day', value: day })
        );
      });
      if (lineItem) {
        lineItem.product = product;
      } else {
        const lineItem = LineItemModel.create({
          product: product.sku,
          qty: 1,
          attributes: [
            { name: 'position', value: position },
            { name: 'day', value: day },
          ],
        });
        self.lineItems.push(lineItem);
      }
    },
  }));

export interface OrderPlan extends Instance<typeof OrderPlanModel> {}
