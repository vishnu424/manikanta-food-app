import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import CheckBox from '@/components/common/CheckBox/CheckBox';
import TextInput from '@/components/common/TextInput/TextInput';

export interface IAddressForm {
  address?: any;
}

export const AddressForm: React.FC<IAddressForm> = ({ address }) => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { }, // for errors
  } = useForm();
  const onSubmit = () => {};

  useEffect(() => {
    reset(address);
  }, [address]);

  const [businessName, showBusinessName] = useState(false);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col py-3">
        <TextInput
          label="First Name"
          name="firstName"
          placeholder="Eg. John"
          register={() => register('firstName', { required: true })}
          error={'This field is required'}
        />
        <TextInput
          label="Last Name"
          name="lastName"
          placeholder="Eg. Smith"
          register={() => register('lastName', { required: true })}
        />

        <CheckBox
          label="Business Address"
          name="business"
          checked={businessName}
          register={register}
          onChange={() => showBusinessName(!businessName)}
        />
        {businessName && (
          <TextInput
            label="Business Name"
            name="businessName"
            placeholder="Company Name"
            register={() => register('businessName')}
          />
        )}

        <TextInput
          label="Address"
          name="street"
          placeholder="Eg. 10 Main St"
          register={() => register('street', { required: true })}
        />

        <TextInput
          label="Address Line 2"
          name="unit"
          placeholder="Apartment, suite, etc. (optional)"
          register={() => register('unit')}
        />

        <TextInput
          label="Suburb"
          name="suburb"
          placeholder="Eg. Sydney"
          register={() => register('suburb')}
        />

        <div className="flex w-full space-x-4">
          <div className="w-1/2">
            <TextInput
              label="State"
              name="state"
              placeholder="Eg. NSW"
              register={() => register('state')}
            />
          </div>
          <div className="w-1/2">
            <TextInput
              label="Postcode"
              name="postcode"
              placeholder="Eg. 2000"
              register={() => register('postcode')}
            />
          </div>
        </div>

        <TextInput
          label="Mobile Phone Number"
          name="phone"
          placeholder="Eg. 0400 000 000"
          register={() => register('phone')}
        />
        <TextInput
          label="Specific Instructions"
          name="instructions"
          placeholder="Where should we leave the box?"
          register={() => register('instructions')}
        />
      </div>
    </form>
  );
};
