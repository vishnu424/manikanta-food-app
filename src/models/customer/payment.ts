import { types } from 'mobx-state-tree';
import { PaymentType } from '../api';

export const PaymentCardModel = types
  .model({
    type: 'payment_card',
    cardType: types.string,
    creditCardExpired: false,
    holder: types.union(types.undefined, types.null, types.string),
    maskedNumber: types.union(types.undefined, types.null, types.string),
    numberLastDigits: types.union(types.undefined, types.null, types.string),
  })
  .views((self) => ({
    get cardTypeTrim() {
      return self.cardType.replace(/\s+-.*/, '');
    },
  }));

export const PaymentModel = types.model({
  paymentInstrumentId: types.identifier,
  paymentMethodId: types.enumeration(Object.values(PaymentType)),
  paypalAccountEmail: types.union(types.undefined, types.null, types.string),
  paymentCard: types.union(types.undefined, types.null, PaymentCardModel),
  paymentMethodToken: types.union(types.undefined, types.null, types.string),
  paymentNonce: types.union(types.undefined, types.null, types.string),
  preferred: false,
});
