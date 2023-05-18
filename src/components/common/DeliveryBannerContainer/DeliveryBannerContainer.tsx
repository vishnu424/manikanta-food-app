import { useSelector } from '@plasmicapp/loader-nextjs';
import type { FC } from 'react';
import React from 'react';

import type { GeneralDeliveryBannerSectionRecordModelType } from '@/models/api';

import DeliveryBanner from '../DeliveryBanner/DeliveryBanner';

type Props = {
  className?: string;
};

const DeliveryBannerContainer: FC<Props> = ({ className }) => {
  const landingPage = useSelector('landing');
  const sections = landingPage?.sections;

  const BannerData = sections.find(
    (item: GeneralDeliveryBannerSectionRecordModelType) =>
      // eslint-disable-next-line
    item.__typename === 'GeneralDeliveryBannerSectionRecord'
  );

  if (!BannerData) return null;

  return (
    <div className={className}>
      <DeliveryBanner
        icon={BannerData.icon}
        image={BannerData.image.url}
        buttonText={BannerData.buttonText}
        buttonLink={BannerData.buttonLink}
      />
    </div>
  );
};

export default DeliveryBannerContainer;
