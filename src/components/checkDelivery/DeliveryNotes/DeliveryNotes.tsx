import React from 'react';

/* TO BE UPDATED FROM CMS */
const DeliveryNotes: React.FC = () => {
  return (
    <div className="m-auto max-w-[80%]">
      <div>
        <p className="mt-6 text-center font-jeko text-xs leading-4 md:font-jekoBold md:text-base md:leading-normal">
          Get
          <span className="font-jekoBold text-success-copy">
            {' '}
            FREE SHIPPING{' '}
          </span>
          on every order with a subscription, or pay
          <span className="font-jekoBold"> $15 </span> per delivery to your
          area.
        </p>
      </div>

      <div className="mt-4 mb-6">
        <p className="rounded-lg border border-attention p-3 text-left font-jekoMedium text-sm leading-5">
          <span className="font-jekoBold sm:font-jekoMedium">Note:</span> Our
          Weight Loss Program delivery schedule will vary.{' '}
          <span className="font-jekoBold">
            Cut off is every Tuesday at 1pm,
          </span>
          and can be scheduled for
          <span className="font-jekoBold">
            delivery on Saturday, Sunday or Monday
          </span>
          depending on your location.
        </p>
      </div>
    </div>
  );
};

export default DeliveryNotes;
