import Image from 'next/image';
import React from 'react';

import { Card } from '@/components/common/Card/Card';

const discoveryTiles = [
  {
    imageUrl: '/assets/icons/WhyChoose.svg',
    title: 'Subscribe & Save',
    description:
      'Get free shipping on every delivery! No lock-ins. Skip or cancel anytime.',
  },
  {
    imageUrl: '/assets/icons/WhatsNew.svg',
    title: 'What’s new?',
    description: 'We’ve added 7 new low calorie meals to the menu!',
  },
];

const DiscoveryTiles = () => {
  return (
    <div className="flex flex-col justify-center p-2 md:p-6 md:pt-3">
      <p className="font-jekoBold leading-[30px] text-2xl">Discover</p>
      {discoveryTiles.map((discovery: any, index: number) => (
        <div key={index}>
          <Card
            imageSrc={discovery.imageUrl}
            title={discovery.title}
            description={discovery.description}
            theme="secondaryStyle"
            imageStyle="imageStyleSecondary"
            background="bg-off-white"
          >
            <div className="absolute bottom-4 right-4">
              <Image
                src="/assets/icons/arrow-forward.svg"
                width="12"
                height="12"
                alt="Arrow Forward"
              />
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default DiscoveryTiles;
