import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { BillingForm } from '@/components/checkout/BillingForm/BillingForm';
import CheckBox from '@/components/common/CheckBox/CheckBox';
import TextInput from '@/components/common/TextInput/TextInput';

export const PaymentForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {};
  const [billingForm, setBillingForm] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col py-3">
        <TextInput
          label="Credit/Debit Card Number"
          name="cardNumber"
          placeholder=""
          register={() => register('cardNumber', { required: true })}
        />

        <div className="flex w-full justify-between space-x-4">
          <div className="w-1/2">
            <TextInput
              label="MM/YY"
              name="expiry"
              placeholder=""
              register={() => register('expiry', { required: true })}
            />
          </div>
          <div className="w-1/2">
            <TextInput
              label="CVV"
              name="cvv"
              placeholder=""
              register={() => register('cvv', { required: true })}
            />
          </div>
        </div>

        {/* Checkboxes */}
        <CheckBox
          label="Make this my default payment"
          name="preferred"
          checked={true}
          register={register}
          onChange={() => {}}
        />

        <CheckBox
          label="Billing address same as shipping"
          name="billing"
          checked={!billingForm}
          register={register}
          onChange={() => {
            setBillingForm(!billingForm);
          }}
        />

        {billingForm && <BillingForm register={register} />}
      </div>

      {/* Save AND Cancel */}
      <div className="mb-16 hidden cursor-pointer justify-end space-x-4 font-jekoMedium md:flex">
        <span className="text-attention">Save</span>
        <span className="text-error">Cancel</span>
      </div>
      <hr className="hidden md:flex" />
    </form>
  );
};
