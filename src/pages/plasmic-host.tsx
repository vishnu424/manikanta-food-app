import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import * as React from 'react';

import { PLASMIC } from '@/utils/plasmic-init';

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}
