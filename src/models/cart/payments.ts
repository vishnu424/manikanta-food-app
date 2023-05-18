import { PaymentType } from '@/models/api';
import { types } from 'mobx-state-tree';

export const CartPaymentModel = types.model('Payment').props({
  amount: types.number,
  paymentMethodId: types.enumeration(Object.values(PaymentType)),
  paymentMethodToken: types.maybe(types.string),
  paymentMethodNonce: types.maybe(types.string),
  account: types.maybe(types.string),
  cardType: types.maybe(types.string),
});

export const GiftPaymentModel = types.model('GiftPayment').props({
  amount: types.number,
  code: types.string,
});

export const CreditPaymentModel = types.model('CreditPayment').props({
  amount: types.number,
});

export const PaymentsModel = types.model('Payments').props({
  payment: types.maybe(CartPaymentModel),
  giftCards: types.optional(types.array(GiftPaymentModel), []),
  credit: types.maybe(CreditPaymentModel),
});
