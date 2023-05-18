import TextInput from '@/components/common/TextInput/TextInput';

export interface IBillingForm {
  register?: any;
}

export const BillingForm: React.FC<IBillingForm> = ({ register }) => {
  return (
    <>
      <div className="mt-8 font-jekoBold text-2xl">Enter Billing Details</div>
      <div className="flex flex-col py-3">
        <TextInput
          label="Address"
          name="street"
          placeholder="Street Address"
          register={() => register('street', { required: true })}
        />

        <TextInput
          label="Address Line 2"
          name="unit"
          placeholder="Address Line 2"
          register={() => register('unit')}
        />

        <TextInput
          label="Suburb"
          name="suburb"
          placeholder="Suburb"
          register={() => register('suburb')}
        />

        <div className="flex w-full space-x-4">
          <div className="w-1/2">
            <TextInput
              label="State"
              name="state"
              placeholder="State"
              register={() => register('state')}
            />
          </div>
          <div className="w-1/2">
            <TextInput
              label="Postcode"
              name="postcode"
              placeholder="Postcode"
              register={() => register('postcode')}
            />
          </div>
        </div>
      </div>
    </>
  );
};
