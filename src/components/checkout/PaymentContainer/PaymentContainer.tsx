import Image from 'next/image';
import { useState } from 'react';

import { PaymentForm } from '@/components/checkout/PaymentForm/PaymentForm';
import { PaymentMethod } from '@/components/checkout/PaymentMethod/PaymentMethod';
import SelectedButton from '@/components/checkout/SelectedButton/SelectedButton';
import TextInput from '@/components/common/TextInput/TextInput';

export interface IPaymentContainer {
  payments?: Array<any>;
}

export const PaymentContainer: React.FC<IPaymentContainer> = () => {
  const payment = {
    paymentCard: {
      cardType: 'mastercard',
      creditCardExpired: '',
      expirationMonth: 7,
      expirationYear: 25,
      holder: 'Lubana Abouassaf',
      maskedNumber: 123445,
      numberLastDigits: 2344,
      type: '',
    },
    paypalAccountEmail: '',
    preferred: true,
    paymentMethodId: '',
  };

  const [paymentForm, setPaymentForm] = useState(false);

  return (
    <div className="flex flex-col p-6">
      {/* Promo code Mobile */}
      <div className="block md:hidden">
        <TextInput
          label="Promo Code"
          name="promoCode"
          placeholder="Enter Promo Code"
          register={() => {}}
          apply={true}
        />
      </div>
      <div className="pt-4 pb-2 font-jekoBold text-2xl">
        How do you want to pay?
      </div>

      <div className="my-3 flex justify-between space-x-3">
        <SelectedButton>
          <div className="flex w-20 items-center justify-center p-2">
            <Image
              width={27}
              height={20}
              src="/assets/images/svg/Card.svg"
              alt={'Card'}
            />
          </div>
        </SelectedButton>
        <SelectedButton>
          <div className="flex w-20 items-center justify-center p-2">
            <Image
              width={48}
              height={11}
              src="/assets/images/svg/PayPal.svg"
              alt={'Card'}
            />
          </div>
        </SelectedButton>
        <SelectedButton>
          <div className="flex w-20 items-center justify-center p-2">
            <Image
              width={41}
              height={14}
              src="/assets/images/svg/ZipPay.svg"
              alt={'Card'}
            />
          </div>
        </SelectedButton>
      </div>

      {/* Payment methods */}

      <PaymentMethod payment={payment} />

      {/* add a new payment method - Mobile */}
      {!paymentForm && (
        <>
          <div className="flex md:hidden">
            <SelectedButton
              onClick={() => setPaymentForm(!paymentForm)}
              fullWidth={true}
            >
              <div className="w-full p-1 font-jekoBold text-sm">
                Add a new payment method
              </div>
            </SelectedButton>
          </div>

          <div
            className="hidden cursor-pointer md:flex"
            onClick={() => setPaymentForm(!paymentForm)}
          >
            <div className="font-jekoMedium text-attention">
              + Add a new payment method
            </div>
          </div>
        </>
      )}

      {paymentForm && <PaymentForm />}

      {/* Gift Card */}
      <div className="my-4">
        <TextInput
          label="Gift Card"
          name="giftCard"
          placeholder="Enter Code"
          register={() => {}}
          apply={true}
        />
      </div>
    </div>
  );
};
