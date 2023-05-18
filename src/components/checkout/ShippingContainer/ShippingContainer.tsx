import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { AddressForm } from '@/components/checkout/AddressForm/AddressForm';
import { ChangeAddressContainer } from '@/components/checkout/ChangeAddressContainer/ChangeAddressContainer';
import SelectedButton from '@/components/checkout/SelectedButton/SelectedButton';
import { ShippingAddress } from '@/components/checkout/ShippingAddress/ShippingAddress';
import { ShippingNote } from '@/components/checkout/ShippingNote/ShippingNote';
import { Modal } from '@/components/common/Modal/Modal';
import { SkeletonContainer } from '@/components/skeleton/SkeletonContainer/SkeletonContainer';
import type { Cart } from '@/models/cart/cart';
import type { Address } from '@/models/customer/address';
import type { Customer } from '@/models/customer/customer';

export interface IShippingContainer {
  customer: Customer;
  cart: Cart;
}

export const ShippingContainer: React.FC<IShippingContainer> = observer(
  ({ customer, cart }) => {
    const [addressForm, setAddressForm] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [mounted, setMounted] = useState(false);

    const { addresses, defaultAddress } = customer;
    const currentAddress = cart.delivery.deliveryAddress ?? defaultAddress;

    // TODO: might move this one to checkout page
    useEffect(() => {
      if (!cart.delivery?.deliveryAddress && defaultAddress) {
        cart.setDeliveryAddress(defaultAddress);
      }
      setMounted(true);
    }, []);

    const handleSelectAddress = (address: Address) => {
      cart.setDeliveryAddress(address);
      setShowModal(false);
    };

    if (!mounted) {
      return (
        <div>
          <SkeletonContainer />
        </div>
      );
    }

    return (
      <div className="flex flex-col px-6 py-3">
        <div className="pt-1 pb-3 font-jekoBold text-2xl">
          Where should we deliver?
        </div>

        {currentAddress && (
          <ShippingAddress
            address={currentAddress}
            buttonLabel="Change"
            onClick={() => setShowModal(true)}
            selected={!addressForm}
          />
        )}

        <Modal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          headerTitle={''}
        >
          <ChangeAddressContainer
            addresses={addresses}
            onSelect={handleSelectAddress}
          />
        </Modal>

        {/* add a new address - Mobile */}
        <div className="flex md:hidden">
          <SelectedButton onClick={() => setAddressForm(true)} fullWidth={true}>
            <span className="p-1 font-jekoBold text-sm">Add a new address</span>
          </SelectedButton>
        </div>

        {/* add a new address - Desktop */}
        <div
          className="hidden cursor-pointer md:flex"
          onClick={() => setAddressForm(true)}
        >
          <div className="font-jekoMedium text-attention">
            + Add a new address
          </div>
        </div>

        {addressForm && (
          <>
            <AddressForm address={{}} />
            <ShippingNote />
          </>
        )}

        {/* email */}
        {!addressForm && (
          <div className="my-5 flex font-jeko text-grey-dark">
            <div className="hidden pr-2 md:block">
              <Image
                src="/assets/images/svg/avatar.svg"
                alt=""
                width={14}
                height={14}
              />
            </div>
            Logged in as{' '}
            <span className="pl-1 font-jekoMedium line-clamp-1">
              {customer.email}
            </span>
          </div>
        )}
      </div>
    );
  }
);
