import "pure-react-carousel/dist/react-carousel.es.css";

import Image from "next/image";
import React, { useState } from "react";
import { useMediaQuery } from "@/hooks";
import Subscription from "@/components/subscriptionBoard/Subscription/Subscription";
import SuggestionMenu from "@/components/subscriptionBoard/SuggestionMenu/SuggestionMenu";
import MyOrders from "@/components/subscriptionBoard/MyOrders/MyOrders";
import OrderDetails from "@/components/subscriptionBoard/Order/Order";
import ManageSubscription from "@/components/subscriptionBoard/ManageSubscription/ManageSubscription";
import ReferralCredit from "@/components/subscriptionBoard/ReferralCredit/ReferralCredit";
import DiscoveryTiles from "@/components/discoveryTiles/DiscoveryTiles";
import NewOrder from "@/components/subscriptionBoard/NewOrder/NewOrder";

type Props = {
  customClass: string;
};
const ProfileButton: React.FC<Props> = ({ customClass }) => {
  return (
    <button
      className={`flex w-full items-center rounded border border-attention bg-blue-lite py-2.5 font-jekoBold text-xs leading-4 sm:w-auto ${customClass}`}
    >
      <div className="pr-3">🎉 Complete your profile and win!</div>
      <Image
        src="/assets/icons/arrow-forward.svg"
        alt="Arrow forward"
        width={15}
        height={15}
      />
    </button>
  );
};

const Content: React.FC = () => {
  const mobileDevice = useMediaQuery(`(max-width:767px)`);
  const tabs = [
    { id: 1, day: "29 Oct", type: "Processed" },
    { id: 2, day: "5 Oct", type: "" },
    { id: 3, day: "12 Oct", type: "Skipped" },
    { id: 4, day: "19 Oct", type: "Locked for editing" },
  ];
  const menuTabs = [
    { id: 1, name: "New to the menu" },
    { id: 2, name: "Picked for me" },
  ];
  const [isProfileCompleted] = useState(false);
  const [order, setOrder] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(true);

  return (
    <div className="flex h-auto flex-col md:h-full md:flex-row bg-off-grey">
      <div
        className={`${
          isSubscribed ? "order-2" : "order-1"
        } w-full bg-white py-3 md:order-1 md:w-3/6 md:bg-off-grey md:p-8 xl:w-4/6 ${
          !order && "px-4"
        }`}
      >
        <div className="flex flex-col">
          {order ? (
            <OrderDetails onClose={setOrder} />
          ) : (
            <>
              {!isProfileCompleted && (
                <div className="hidden md:block">
                  <ProfileButton customClass="px-3 lg:px-12 justify-between" />
                </div>
              )}
              <div className={isSubscribed ? "order-1" : "order-3"}>
                <SuggestionMenu menuTabs={menuTabs} />
              </div>
              <div className={`mt-10 ${isSubscribed ? "order-2" : "order-4"}`}>
                <ReferralCredit />
              </div>
              {isSubscribed && (
                <div className="mt-10 order-3">
                  <ManageSubscription />
                </div>
              )}
              <div
                className={`${
                  isSubscribed ? "order-4 mt-10" : "order-1 mt-0 md:mt-10"
                }`}
              >
                <MyOrders setOrderDetails={setOrder} />
              </div>
              {!isSubscribed && (
                <div className="md:hidden order-2 bg-white mb-10">
                  <NewOrder />
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div
        className={`${
          isSubscribed ? "order-1" : "order-2"
        } bg-white md:bg-off-grey flex h-full w-full flex-col md:order-2 md:w-3/6 xl:w-2/6`}
      >
        {isSubscribed ? (
          !(mobileDevice && order) && (
            <>
              {!isProfileCompleted && (
                <div className="px-4 pt-3 pb-0 md:hidden">
                  <ProfileButton customClass="px-10 md:hidden justify-center" />
                </div>
              )}
              <Subscription tabs={tabs} />
            </>
          )
        ) : (
          <>
            <div className="md:mr-8 mt-8 md:ml-0 mx-4 hidden md:block bg-off-grey">
              <NewOrder />
            </div>
            <div className="my-8 bg-white rounded-xl md:ml-0 md:mr-8 mx-4">
              <DiscoveryTiles />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Content;
