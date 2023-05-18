import 'swiper/css/swiper.css';

import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import SelectedButton from '@/components/checkout/SelectedButton/SelectedButton';
import { DELIVERY_INFO_SELECTOR } from '@/graphql/selectors';
import type { DeliveryDetailModelType } from '@/models/api';
import type { Cart } from '@/models/cart/cart';
import { useQuery } from '@/models/reactUtils';

export type DeliveryType = {
  date: string;
  formattedDate: string;
  timeslots: Array<string>;
};

export interface IDeliveryContainer {
  deliveryDetails?: Array<DeliveryType>;
  cart: Cart;
}

export const DeliveryContainer: React.FC<IDeliveryContainer> = observer(
  ({ cart }) => {
    const { delivery } = cart;
    const deliveryAddress = delivery?.deliveryAddress;
    const { setQuery, data } = useQuery();

    const [deliveryDetails, setDeliveryDetails] = useState<
      Array<DeliveryDetailModelType>
    >([]);
    const [timeslots, setTimes] = useState(
      deliveryDetails ? deliveryDetails[0]?.timeslots : []
    );

    useEffect(() => {
      if (deliveryAddress) {
        setQuery((store) =>
          store.api.queryDeliveryInfo(
            { lookup: deliveryAddress?.postcode },
            DELIVERY_INFO_SELECTOR
          )
        );
      }
    }, [deliveryAddress]);

    useEffect(() => {
      const deliveryInfos = _.get(data, 'deliveryInfo');
      const deliveryInfo =
        deliveryInfos?.length > 0 ? deliveryInfos[0] : undefined;
      const details =
        deliveryInfo?.deliveryDetails as DeliveryDetailModelType[];

      setDeliveryDetails(details ?? []);
      const deliveryDetail =
        details && details.length > 0 ? details[0] : undefined;
      if (deliveryDetail?.formattedDate) {
        delivery.setDeliveryDate(deliveryDetail.formattedDate);
        if (
          deliveryDetail.timeslots &&
          deliveryDetail.timeslots.length > 0 &&
          deliveryDetail.timeslots[0]
        ) {
          delivery.setTimeSlot(deliveryDetail.timeslots[0]);
        }
      }
      cart.setShippingCostBase(deliveryInfo?.fee ?? 0);
      setTimes(deliveryDetail?.timeslots ?? []);
    }, [data]);

    const selectDay = (date: number) => {
      setTimes(
        deliveryDetails && deliveryDetails.length
          ? deliveryDetails[date]?.timeslots
          : []
      );
    };

    return (
      <div className="flex flex-col px-6 py-3">
        <div className="py-2 font-jekoBold text-2xl">When can we deliver?</div>
        <div className="mt-3 font-jekoBold text-grey-dark">Date</div>
        <div className="z-0 my-3">
          {deliveryDetails?.length > 0 && (
            /* <Swiper {...params}> */
            <div className="mt-3 mb-8 flex space-x-4">
              {deliveryDetails.map(
                (date: DeliveryDetailModelType, index: number) => (
                  <div key={date.date}>
                    <SelectedButton
                      onClick={() => {
                        selectDay(index);
                        if (date.formattedDate) {
                          delivery.setDeliveryDate(date.formattedDate);
                          if (date.timeslots && date.timeslots.length > 0) {
                            delivery.setTimeSlot(date.timeslots[0] ?? '');
                          }
                        }
                      }}
                      selected={date.formattedDate === delivery.deliveryDate}
                    >
                      <div className="px-3 py-1 font-jekoBold text-sm">
                        {date.formattedDate?.substr(0, 3)}
                        <br />
                        {date.formattedDate?.substr(3)}
                      </div>
                    </SelectedButton>
                  </div>
                )
              )}
            </div>
            /*  </Swiper> */
          )}
        </div>

        <hr />

        <div className="mt-3 font-jekoBold text-grey-dark">Time</div>

        <div className="mt-3 mb-8 flex space-x-4">
          {timeslots &&
            timeslots.map((time: any, index: number) => (
              <SelectedButton
                key={index}
                onClick={() => {
                  // setDefaultTime(index);
                  delivery.setTimeSlot(time);
                }}
                selected={time === delivery.timeSlot}
              >
                <span className="p-1 font-jekoBold text-sm">{time}</span>
              </SelectedButton>
            ))}
        </div>
      </div>
    );
  }
);
