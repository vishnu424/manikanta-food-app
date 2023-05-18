import type { Address } from '@/models/customer/address';

export interface IShippingAddress {
  address: Address;
  buttonLabel: string;
  onClick: any;
  onSelect?: () => void;
  selected?: boolean;
}

export const ShippingAddress: React.FC<IShippingAddress> = ({
  address,
  buttonLabel,
  onSelect,
  onClick,
  selected = false,
}) => {
  const defaultStyle = selected
    ? 'border-2 border-primary2 bg-apricot-lite'
    : 'border border-black bg-white';
  return (
    <div
      className={`my-3 flex justify-between rounded-lg p-3 ${defaultStyle}`}
      onClick={onSelect}
    >
      <div className="flex w-3/4 flex-col">
        <div className="font-jekoBold text-lg">
          {address.firstName} {address.lastName}
        </div>
        <div className="font-jekoMedium text-xs">
          {address.street}, {address.suburb}
          <br />
          {address.state} {address.postcode}
          <br />
          {address.phone}
        </div>
      </div>

      <div
        className="flex items-center justify-center font-jekoMedium text-attention"
        role="button"
        onClick={onClick}
      >
        {buttonLabel}
      </div>
    </div>
  );
};
