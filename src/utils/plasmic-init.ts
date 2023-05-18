import { initPlasmicLoader } from '@plasmicapp/loader-nextjs';

import Button from '@/components/common/Button/Button';
import LinkText from '@/components/common/LinkText/LinkText';
import PlanTileContainer from '@/components/common/PlanTileContainer/PlanTileContainer';
import ProductCategoryTileContainer from '@/components/common/ProductCategoryTileContainer/ProductCategoryTileContainer';
import { GeneralPageDataProvider } from '@/components/plasmic/GeneralPageDataProvider';
import { LandingPageDataProvider } from '@/components/plasmic/LandingPageDataProvider';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.PLASMIC_ID || '',
      token: process.env.PLASMIC_TOKEN || '',
    },
  ],
  preview: true,
});

PLASMIC.registerComponent(Button, {
  name: 'Button',
  props: {
    children: {
      type: 'string',
      displayName: 'Text',
    },
    theme: {
      type: 'choice',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'custom',
        'wlp',
        'calorie',
        'muscle',
      ],
    },
    link: 'string',
  },
});

PLASMIC.registerComponent(ProductCategoryTileContainer, {
  name: 'ProductCategoryTileContainer',
  props: {
    children: 'slot',
  },
});

PLASMIC.registerComponent(PlanTileContainer, {
  name: 'PlanTileContainer',
  props: {
    children: 'slot',
  },
});

PLASMIC.registerComponent(LandingPageDataProvider, {
  name: 'LandingPageDataProvider',
  providesData: true,
  props: {
    slug: 'string',
    children: 'slot',
  },
});

PLASMIC.registerComponent(GeneralPageDataProvider, {
  name: 'GeneralPageDataProvider',
  providesData: true,
  props: {
    slug: 'string',
    children: 'slot',
  },
});

PLASMIC.registerComponent(LinkText, {
  name: 'LinkText',
  props: {
    text: 'string',
    link: 'string',
    hasArrow: 'boolean',
  },
});
