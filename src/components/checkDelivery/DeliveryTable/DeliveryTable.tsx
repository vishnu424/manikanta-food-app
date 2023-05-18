import DeliveryDate from '@/components/checkDelivery/DeliveryDate/DeliveryDate';
import type { DeliveryInfoModelType } from '@/models/api';

export type DeliveryDetailsType = {
  postalData: DeliveryInfoModelType;
};

const DeliveryTable: React.FC<DeliveryDetailsType> = ({
  postalData,
}: DeliveryDetailsType) => {
  const { deliveryDetails } = postalData;
  return (
    <div className="m-auto my-6 max-w-[332px] border border-off-grey">
      <div className="pt-4 pb-5">
        <p className="text-center font-jekoBold text-xs leading-tight text-black md:text-sm">
          Order before 1PM
        </p>
        <p className="text-center font-jekoBold text-xs leading-tight text-black md:text-sm">
          today for delivery on:
        </p>
      </div>
      <div className="px-1.5">
        {deliveryDetails &&
          deliveryDetails.map((date: any, index: number) => (
            <DeliveryDate key={index} date={date} index={index} />
          ))}
      </div>
    </div>
  );
};

export default DeliveryTable;
