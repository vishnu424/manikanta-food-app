import "react-sliding-pane/dist/react-sliding-pane.css";

import Image from "next/image";
import React, { memo, useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import SlidingPane from "react-sliding-pane";

import Button from "@/components/common/Button/Button";
import { Modal } from "@/components/common/Modal/Modal";
import ToolTip from "@/components/common/ToolTip/ToolTip";
import CloseIcon from "@/components/icons/CloseIcon";
import Item from "@/components/subscriptionBoard/Item/Item";
import Planmodal from "@/components/subscriptionBoard/PlanModal/PlanModal";
import { useMediaQuery } from "@/hooks";

type Props = {
  onClose: (val: boolean) => void;
};

const defaultArray = [
  {
    id: 1,
    title: "Plans",
    items: [
      {
        id: 1,
        title: "Male Calorie Control",
        imageUrl:
          "https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dwa355b422/images/hi-res/BE032.jpg",
        quantity: 1,
        category: "plan",
        total: 18,
      },
    ],
  },
  {
    id: 2,
    title: "Meals",
    items: [
      {
        id: 1,
        title: "Lamb Shanks with Sweet Potato Mashed and herbs",
        imageUrl:
          "https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dwa355b422/images/hi-res/BE032.jpg",
        quantity: 2,
        category: "Meals",
        total: "18",
      },
      {
        id: 2,
        title: "Lamb Shanks with Sweet Potato Mashed and herbs",
        imageUrl:
          "https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dwa355b422/images/hi-res/BE032.jpg",
        quantity: 4,
        category: "Meals",
        total: "18",
      },
      {
        id: 3,
        title: "Lamb Shanks with Sweet Potato Mashed and herbs",
        imageUrl:
          "https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dwa355b422/images/hi-res/BE032.jpg",
        quantity: 2,
        category: "Meals",
        total: "18",
      },
    ],
  },
  {
    id: 3,
    title: "Snacks",
    items: [
      {
        id: 1,
        title: "Lamb Shanks with Sweet Potato Mashed and herbs",
        imageUrl:
          "https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dwa355b422/images/hi-res/BE032.jpg",
        quantity: 3,
        category: "Snacks",
        total: "18",
      },
      {
        id: 2,
        title: "Lamb Shanks with Sweet Potato Mashed and herbs",
        imageUrl:
          "https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dwa355b422/images/hi-res/BE032.jpg",
        quantity: 4,
        category: "Snacks",
        total: "18",
      },
      {
        id: 3,
        title: "Lamb Shanks with Sweet Potato Mashed and herbs",
        imageUrl:
          "https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dwa355b422/images/hi-res/BE032.jpg",
        quantity: 4,
        category: "Snacks",
        total: "18",
      },
    ],
  },
];

const DetailedView: React.FC<Props> = ({ onClose }) => {
  const [showModal, setShowModal] = useState({});
  const [showOrderInfo, setShowOrderInfo] = useState(false);

  const onClickPlan = (planItem: object) => {
    setShowModal(planItem);
  };
  const [isPaneOpen, setIsPaneOpen] = useState(true);
  const isMobile = useMediaQuery(`(max-width:767px)`);
  const getOrderInfo = () => {
    return (
      <div className="flex flex-col items-start justify-start leading-[22px]">
        <div className="mb-6 font-jekoMedium text-base">
          You will receive an SMS reminder on 0432323232 prior to your delivery.
        </div>
        <div className="mb-6 font-jekoMedium text-base">
          Delivery tip: If you are not available at the time of delivery your
          meals will be left at the front door of your house or apartment block
          (for secured apartments). Please provide additional instructions if
          you are not home at the time of delivery.
        </div>
        <div className="font-jekoMedium text-base">
          Note: Please review your meal plan to ensure we have recieved the
          correct order. Contact us if you spot any issues.
        </div>
      </div>
    );
  };
  const getContent = () => {
    return (
      <div className="relative flex w-full flex-col items-start rounded-xl bg-white md:mt-4 md:pt-10 ">
        <div className="isolate box-border flex flex-col items-start gap-3 self-stretch bg-off-grey p-4 md:border-b md:border-grey-disable md:bg-white md:py-6 md:px-8">
          <div className="flex items-center justify-between gap-4 self-stretch ">
            <div className="flex items-center gap-2">
              <p className=" font-jekoBold text-base text-black">#154722</p>
              <div
                className="flex md:hidden"
                onClick={() => setShowOrderInfo(true)}
              >
                <Image
                  height={15}
                  width={15}
                  src="/assets/icons/info.svg"
                  alt="icon"
                />
              </div>
              <span className="group relative hidden md:flex">
                <Image
                  height={15}
                  width={15}
                  src="/assets/icons/info.svg"
                  alt=""
                />
                <ToolTip contentStyle="rounded-md text-black bg-off-grey shadow-lg p-6">
                  {getOrderInfo()}
                </ToolTip>
              </span>
            </div>

            <div className="flex h-7 w-28 items-center justify-between  gap-2 rounded border border-success-copy  bg-success-container p-1">
              <p className="font-jekoMedium text-sm text-black">Delivered</p>

              <Image
                height={15}
                width={15}
                src="/assets/icons/check_circle.svg"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-1 self-stretch ">
            <p className=" font-jekoMedium text-base text-black">
              August 10, 2022
            </p>

            <div className=" flex items-center justify-between gap-2 self-stretch  p-1 ">
              <p className="font-jekoBold text-sm text-black">$152.60</p>
              <p className="cursor-pointer font-jekoMedium  text-sm text-attention">
                Print invoice
              </p>
            </div>
          </div>
        </div>
        <div className="flex  h-full w-full  items-start  justify-start  gap-6 self-stretch md:p-6 ">
          <div className="custom-scroll flex w-full flex-col items-start  justify-start  gap-9 self-stretch md:h-[510px] md:overflow-auto md:pr-4">
            <div className="flex w-full flex-col items-start justify-start gap-9 self-stretch p-6  md:p-0 ">
              {defaultArray.map((each) => (
                <div
                  className="mt-1 flex flex-col items-start justify-start gap-4 self-stretch "
                  key={each.id}
                >
                  <div className="flex items-center justify-start gap-4">
                    <p className="font-jekoBold text-2xl">{each.title}</p>
                    <p className="flex h-7 w-7 items-center justify-center rounded-full border border-grey-dark font-jekoBold text-lg text-grey-dark">
                      {each.items.length}
                    </p>
                  </div>

                  {each.items.map((item) => (
                    <Item
                      key={item.id}
                      item={item}
                      onClickPlan={() => onClickPlan(item)}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="isolate flex w-full flex-col items-center gap-1 self-stretch rounded-xl bg-off-grey p-6 md:p-10">
              <div className="flex w-full flex-col justify-center gap-4 self-stretch rounded-xl border-b border-grey-liter pt-2 pb-4">
                <div className="flex w-full items-start justify-between gap-1 self-stretch">
                  <p className="font-jekoBold text-sm">Subtotal (12 Items)</p>
                  <p className="font-jekoBold text-sm">$110.10</p>
                </div>
                <div className="flex w-full items-start justify-between gap-1  self-stretch">
                  <p className="font-jekoMedium text-sm">Order discount</p>
                  <p className="font-jekoMedium text-sm text-success-copy">
                    -$8.91
                  </p>
                </div>
                <div className="flex w-full items-start justify-between gap-1  self-stretch">
                  <p className="font-jekoMedium text-sm">Shipping</p>
                  <p className="font-jekoMedium text-sm ">$15</p>
                </div>
                <div className="flex w-full items-start justify-between gap-1  self-stretch">
                  <p className="font-jekoMedium text-sm">GST (incl)</p>
                  <p className="font-jekoMedium text-sm ">$21.91</p>
                </div>
                <div className="flex w-full items-start justify-between gap-1  self-stretch">
                  <p className="font-jekoBold text-sm">Total</p>
                  <p className="font-jekoBold text-sm">$152.60</p>
                </div>
              </div>
              <div className="flex w-full flex-col  justify-start gap-4 self-stretch rounded-xl border-b border-grey-liter pt-2 pb-4">
                <p className="font-jekoBold text-sm">Shipping Details</p>
                <p className="font-jekoMedium text-sm">
                  181 Concord Rd, North Strathfield Sydney, 2137
                </p>
              </div>

              <div className="flex w-full flex-col justify-start gap-4 self-stretch rounded-xl border-b border-grey-liter pt-2 pb-4">
                <p className="font-jekoBold text-sm">Payment Method</p>
                <p className="font-jekoMedium text-sm">Credit card</p>{" "}
                <p className="font-jekoBold text-sm">0259</p>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 flex w-full items-center justify-center bg-white p-6 md:static md:gap-8 md:border-t md:border-t-grey-liter">
          <Button>Edit & Reorder</Button>
        </div>
      </div>
    );
  };
  const styles = {
    closeIconStyle: {
      width: "24px !important",
    },
    titleStyle: {
      fontSize: "18px",
      fontWeight: "bold",
    },
  };
  return (
    <>
      {!isMobile ? (
        <div className="relative w-full">
          <button
            className=" cursor-pointer items-center space-x-3 outline-none md:flex"
            onClick={() => onClose(false)}
          >
            <HiChevronLeft className="w-auto" />
            <span className="cursor-pointer underline">Back</span>
          </button>
          {getContent()}
        </div>
      ) : (
        <SlidingPane
          isOpen={isPaneOpen}
          title={
            <div className="flex justify-between">
              <span className="mt-2 mr-2 font-jekoBold">Order 154722</span>
              <Image
                height={15}
                width={15}
                src="/assets/icons/check_circle.svg"
                alt="order"
              />
              <div className=" float-right ml-auto">
                <Button>Reorder</Button>
              </div>
            </div>
          }
          width="100%"
          from="right"
          closeIcon={
            <div style={styles.closeIconStyle}>
              <CloseIcon />
            </div>
          }
          onRequestClose={() => {
            setIsPaneOpen(false);
          }}
        >
          {getContent()}
        </SlidingPane>
      )}

      <Planmodal
        isOpen={Object?.keys(showModal).length > 0}
        onClose={() => setShowModal({})}
        plan={showModal}
      />

      <Modal
        isOpen={showOrderInfo}
        onRequestClose={() => setShowOrderInfo(false)}
      >
        <div className="p-6  pt-10">{getOrderInfo()}</div>
      </Modal>
    </>
  );
};

export default memo(DetailedView);
