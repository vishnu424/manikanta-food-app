import { observer } from 'mobx-react-lite';

import DeliveryHeader from '@/components/checkDelivery/DeliveryHeader/DeliveryHeader';
import DeliveryNotes from '@/components/checkDelivery/DeliveryNotes/DeliveryNotes';
import DeliveryTable from '@/components/checkDelivery/DeliveryTable/DeliveryTable';
import DeliveryTimer from '@/components/checkDelivery/DeliveryTimer/DeliveryTimer';
import Button from '@/components/common/Button/Button';
import type { DeliveryInfoModelType } from '@/models/api';

type DeliveryDetailsType = {
  postalData: DeliveryInfoModelType;
};

const DeliveryDetails: React.FC<DeliveryDetailsType> = observer(
  ({ postalData }: DeliveryDetailsType) => {
    const { deliveryDetails } = postalData;
    const nextDeliveryDate =
      deliveryDetails && deliveryDetails.length > 0 ? deliveryDetails[0] : {};
    return (
      <div>
        <DeliveryHeader postalData={postalData}></DeliveryHeader>
        <DeliveryTimer nextDeliveryDate={nextDeliveryDate} />
        <DeliveryTable postalData={postalData}></DeliveryTable>
        <div className="mt-4 flex justify-center">
          <Button type="button">
            <span className="py-1 font-jekoSemibold leading-none">
              Continue Ordering
            </span>
          </Button>
        </div>
        <DeliveryNotes />
      </div>
    );
  }
);

export default DeliveryDetails;
