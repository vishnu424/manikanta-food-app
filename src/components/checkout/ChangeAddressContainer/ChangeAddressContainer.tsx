import { useState } from 'react';

import { AddressForm } from '@/components/checkout/AddressForm/AddressForm';
import { ShippingAddress } from '@/components/checkout/ShippingAddress/ShippingAddress';
import Button from '@/components/common/Button/Button';
import type { Address } from '@/models/customer/address';

export interface IChangeAddressContainer {
  addresses: Array<Address>;
  onSelect: (address: any) => void;
}

export const ChangeAddressContainer: React.FC<IChangeAddressContainer> = ({
  addresses,
  onSelect,
}) => {
  const [editAddress, setEditAddress] = useState(-1);
  const [selectAddress, setSelectAddress] = useState(-1);
  const handleSelect = () => {
    const index = selectAddress > -1 ? selectAddress : editAddress;
    if (index > -1) {
      onSelect(addresses[index]);
    }
  };

  return (
    <div className="my-2 px-0 md:px-16">
      <div className="my-3 flex flex-col items-center justify-center">
        <div className="py-5 font-jekoBold text-3xl">Change Address</div>
      </div>

      {addresses &&
        addresses.map((address: Address, index: number) => (
          <>
            <ShippingAddress
              key={address.addressId}
              address={address}
              buttonLabel="Edit"
              onSelect={() => setSelectAddress(index)}
              onClick={() => {
                setEditAddress(index);
              }}
              selected={index === editAddress || index === selectAddress}
            />
            {index === editAddress && <AddressForm address={address} />}
          </>
        ))}

      {/* Confirm Button */}
      <div className="flex items-center justify-center p-3">
        <Button theme="primary" onClick={handleSelect}>
          <span className="px-2 font-jekoSemibold">Confirm Address</span>
        </Button>
      </div>
    </div>
  );
};
