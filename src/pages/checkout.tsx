import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';

import CheckoutHeader from '@/components/checkout/CheckoutHeader/CheckoutHeader';
import { ConfirmButtonContainer } from '@/components/checkout/ConfirmButtonContainer/ConfirmButtonContainer';
import { DeliveryContainer } from '@/components/checkout/DeliveryContainer/DeliveryContainer';
import { FrequencyContainer } from '@/components/checkout/FrequencyContainer/FrequencyContainer';
import OrderSummary from '@/components/checkout/OrderSummary/OrderSummary';
import OrderSummaryContainer from '@/components/checkout/OrderSummaryContainer/OrderSummaryContainer';
import { PaymentContainer } from '@/components/checkout/PaymentContainer/PaymentContainer';
import { ShippingContainer } from '@/components/checkout/ShippingContainer/ShippingContainer';
import { useStore } from '@/models/root-store';

const Checkout = observer(() => {
  const {
    cartStore,
    customerStore: { customer },
  } = useStore();

  const { handleSubmit } = useForm();
  const onSubmit = () => {};

  return (
    <>
      {/* Page title */}
      <CheckoutHeader onClick={() => {}}></CheckoutHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-0 flex space-x-10 scroll-smooth md:mx-28">
          <div className="mx-auto w-full md:w-1/2">
            {/* Order Summary Mobile */}
            <div className="block md:hidden">
              <OrderSummary cart={cartStore.cart} />
            </div>

            {/* Checkout Form */}
            <ShippingContainer customer={customer} cart={cartStore.cart} />
            <hr />
            <DeliveryContainer cart={cartStore.cart} />
            <hr className="block md:hidden" />
            <FrequencyContainer cart={cartStore.cart} />
            <hr className="block md:hidden" />
            <PaymentContainer />

            {/* MOBILE - Confirm Order */}
            <div className="sticky bottom-0 left-0 z-50 flex w-full bg-white px-4 pt-3 pb-8 shadow-3xl md:hidden">
              <ConfirmButtonContainer />
            </div>
          </div>

          {/* Order Summary Desktop */}
          <div className="hidden w-1/3 md:block">
            <OrderSummaryContainer cart={cartStore.cart} />
          </div>
        </div>
      </form>
    </>
  );
});

export default Checkout;
