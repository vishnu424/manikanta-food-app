// @ts-nocheck 
import { Instance } from 'mobx-state-tree';
import { ProductModelBase } from './ProductModel.base';
import round from 'lodash/round';

/* The TypeScript type of an instance of ProductModel */
export interface ProductModelType extends Instance<typeof ProductModel.Type> {}

/* A graphql query fragment builders for ProductModel */
export {
  selectFromProduct,
  productModelPrimitives,
  ProductModelSelector,
} from './ProductModel.base';

const MIN_DISCOUNT_PRICE = 9.95;

/**
 * ProductModel
 *
 * Product
 */
export const ProductModel = ProductModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self));
  },
})).views((self) => ({
  get isDiscountable(): boolean {
    // TODO: should be a boolean field in the API
    return !self.hasSubProducts && self.netPrice > MIN_DISCOUNT_PRICE;
  },
  get productDiscount(): number {
    return self.promotionTotal && self.grossPrice
      ? Math.trunc((self.promotionTotal / self.grossPrice) * 100)
      : 0;
  },
  getDiscountedPrice(discount?: number): number {
    return this.isDiscountable && !!discount
      ? round((self.netPrice * (100 - discount)) / 100, 2)
      : self.netPrice;
  },
}));
