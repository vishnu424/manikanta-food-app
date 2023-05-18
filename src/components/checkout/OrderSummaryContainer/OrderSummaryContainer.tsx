import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import { useState } from 'react';

import AuthContainer from '@/components/auth/AuthContainer/AuthContainer';
import Button from '@/components/common/Button/Button';
import { Modal } from '@/components/common/Modal/Modal';
import TextInput from '@/components/common/TextInput/TextInput';
import { Frequency } from '@/models/api';
import type { Cart } from '@/models/cart/cart';
import { useStore } from '@/models/root-store';

interface OrderSummaryContainerProps {
  cart: Cart;
}

const OrderSummaryContainer: React.FC<OrderSummaryContainerProps> = observer(
  ({ cart }: OrderSummaryContainerProps) => {
    const { subTotal, total, numberOfItems, gst, frequency } = cart;
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);
    const {
      customerStore: { isLoggedIn },
    } = useStore();

    function confirmOrder() {
      if (isLoggedIn) {
        setIsOpen(true);
      } else {
        setAuthModalOpen(true);
      }
    }
    return (
      <div className="w-full py-2">
        {/* Order Summary Header - Desktop */}
        <div className="hidden max-w-sm rounded-t-lg bg-off-white py-4 text-center font-jekoBold md:block">
          Order Summary
        </div>

        <div className="max-w-sm overflow-hidden rounded shadow-lg">
          <div className="px-8 py-5">
            <div className="flex flex-col gap-4 font-jekoMedium">
              <div className="flex justify-between font-jekoBold">
                <p className="">Subtotal ({numberOfItems} items)</p>
                <p className="">${subTotal}</p>
              </div>

              <div className="flex justify-between font-jekoBold text-xs text-black">
                <p>GST (incl)</p>
                <p>${gst}</p>
              </div>

              {/* Check if there is no address yet */}
              <div className="flex justify-between">
                <p className="mb-2 font-jekoMedium text-xs leading-4 text-grey-dark">
                  Shipping calculated at checkout
                </p>
              </div>

              {frequency === Frequency.ONCE ? (
                <div className="flex items-center justify-center rounded-md bg-rhubarb-lite py-1.5 text-xs text-rhubarb-dark">
                  <Image
                    src="/assets/images/svg/shipping.svg"
                    alt="Shipping"
                    width={24}
                    height={15}
                  />
                  <p className="pl-2.5 font-jekoSemibold text-xs">
                    Get FREE SHIPPING when you subscribe 🎉
                  </p>
                </div>
              ) : null}

              <hr />

              {/* Promo code Desktop */}
              <div className="hidden w-full md:block">
                <span className="font-jekoMedium text-xs text-grey-dark">
                  Do you have a promo code?
                </span>
                <TextInput
                  label="Promo Code"
                  name="promoCode"
                  placeholder="Enter Promo Code"
                  register={() => {}}
                  apply={true}
                />
                <hr />
              </div>

              <div className="mt-4 flex justify-between font-jekoBold text-4xl">
                <p>Total</p>
                <p>${total}</p>
              </div>
            </div>
          </div>

          {/* Confirm Order Button */}
          <div className="mb-4 hidden w-full justify-center md:flex">
            <Button
              theme="primary"
              type="button"
              onClick={() => confirmOrder()}
            >
              <span className="px-1 font-jekoSemibold">
                <span className="pr-3">Confirm Order</span>
                <Image
                  width={18}
                  height={14}
                  src="/assets/images/svg/Arrow.svg"
                  alt={''}
                  className="mt-2"
                />
              </span>
            </Button>
          </div>
          <Modal
            isOpen={isAuthModalOpen}
            onRequestClose={() => setAuthModalOpen(false)}
            customContentStyles={{ maxWidth: 500 }}
          >
            <AuthContainer
              navigatedFrom="checkout"
              setIsOpen={setAuthModalOpen}
            />
          </Modal>
          <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
            <div>Order Placed Successfully</div>
          </Modal>
        </div>
      </div>
    );
  }
);

export default OrderSummaryContainer;
