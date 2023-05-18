import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { BenefitsContainer } from '@/components/checkout/BenefitsContainer/BenefitsContainer';
import SelectedButton from '@/components/checkout/SelectedButton/SelectedButton';
import { Frequency } from '@/models/api';
import type { Cart } from '@/models/cart/cart';

export interface IFrequencyContainer {
  address?: any;
  cart: Cart;
}

export const FrequencyContainer: React.FC<IFrequencyContainer> = observer(
  ({ cart }) => {
    const [frequency, setFrequency] = useState<Frequency>(Frequency.WEEKLY);

    const frequencies = [
      { id: 1, label: 'Week', popular: true, value: Frequency.WEEKLY },
      { id: 2, label: '2 Weeks', value: Frequency.FORTNIGHTLY },
      { id: 3, label: '4 Weeks', value: Frequency.MONTHLY },
    ];

    return (
      <div className="flex flex-col rounded-2xl bg-white px-6 py-3 md:bg-off-white">
        <div className="py-2 font-jekoBold text-2xl">
          Choose your order frequency
        </div>

        <div className="mt-3 mb-8 flex justify-between space-x-8">
          <SelectedButton
            onClick={() => cart.setFrequency(frequency)}
            selected={cart.isSubscriptionOrder}
          >
            <span className="w-36 px-0 py-1 font-jekoBold text-sm md:w-full md:px-12 md:py-3">
              Subscribe & <br className="flex md:hidden" />
              Save
            </span>
          </SelectedButton>

          <SelectedButton
            onClick={() => {
              cart.setFrequency(Frequency.ONCE);
            }}
            selected={!cart.isSubscriptionOrder}
          >
            <span className="w-36 px-0 font-jekoBold text-sm md:w-full md:px-12">
              One-time <br className="flex md:hidden" />
              purchase
            </span>
          </SelectedButton>
        </div>

        {/* Benefits */}
        <BenefitsContainer />

        {/* Frequency */}
        {cart.isSubscriptionOrder && (
          <>
            <div className="mt-3 py-4 font-jekoBold text-2xl">
              Deliver to me every
            </div>

            <div className="mt-3 mb-8 flex justify-start space-x-2 md:justify-between">
              {frequencies &&
                frequencies.map((freq) => (
                  <div key={freq.id} className="relative">
                    <SelectedButton
                      selected={cart.frequency === freq.value}
                      onClick={() => {
                        cart.setFrequency(freq.value);
                        setFrequency(freq.value);
                      }}
                    >
                      <span className="w-24 px-0 py-2 font-jekoBold text-sm md:w-full md:px-12">
                        {freq.label}
                      </span>
                    </SelectedButton>
                    {freq.popular && (
                      <div
                        className="absolute left-1/4 flex items-center justify-center rounded-64 bg-primary2 px-2 font-jekoSemibold text-xxs text-white md:left-1/3"
                        style={{ bottom: '-10px' }}
                      >
                        Popular
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    );
  }
);
