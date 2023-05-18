import type { IStateTreeNode } from 'mobx-state-tree';
import { getRoot } from 'mobx-state-tree';

import type { RootStoreType } from '../root-store';

export const withRootStore = (self: IStateTreeNode) => ({
  views: {
    /**
     * The root store.
     */
    get rootStore(): RootStoreType {
      return getRoot<RootStoreType>(self);
    },
  },
});
