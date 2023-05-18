import React, { useState } from 'react';

import { Modal } from '@/components/common/Modal/Modal';
import ManageSubscriptionList from '@/components/manageSubscriptionList/ManageSubscriptionList';
import UpcomingDelivery from '@/components/upcomingDelivery/UpcomingDelivery';

const Subscription = () => {
  const [currentComponent, setCurrentComponent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <ManageSubscriptionList
        onClick={(value) => {
          setCurrentComponent(value);
          setIsModalOpen(true);
        }}
      />
      {currentComponent === 'deliveryFrequency' && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          customPadding="p-8"
          headerTitle="Delivery Frequency"
          headerTitleStyle="font-jekoBold"
        >
          Delivery Frequency
        </Modal>
      )}
      {currentComponent === 'upcomingDelivery' && (
        <UpcomingDelivery
          isOpen={isModalOpen}
          isClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
      {currentComponent === 'deliveryAddress' && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          customPadding="p-8"
          headerTitle="Delivery Address"
          headerTitleStyle="font-jekoBold"
        >
          Delivery Address
        </Modal>
      )}
      {currentComponent === 'payment' && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          customPadding="p-8"
          headerTitle="Payment"
          headerTitleStyle="font-jekoBold"
        >
          Payment
        </Modal>
      )}
      {currentComponent === 'subscriptionStatus' && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          customPadding="p-8"
          headerTitle="Subscription Status"
          headerTitleStyle="font-jekoBold"
        >
          Subscription Status
        </Modal>
      )}
    </>
  );
};

export default Subscription;
