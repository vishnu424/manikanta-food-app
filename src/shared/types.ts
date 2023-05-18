import type { FileFieldModelType } from '@/models/api';
import type { SelectedFilterKey } from '@/models/product/filters';

export type GoalBasedPlan = {
  name: string;
  description: string;
  image: string;
  goal: string;
  category: string;
};

export type Product = {
  name: string;
  sku: string;
  description: string;
  image: string;
  category: string;
  subCategory: string[];
};

export type HandleFilterSelectionType = (
  key: keyof SelectedFilterKey,
  value: string,
  checked: boolean
) => Promise<void>;

export type HandleSortSelectionType = (value: string) => Promise<void>;

export type CmsSeo = {
  seoTitle: string | undefined;
  seoDescription: string | undefined;
  ogImage: FileFieldModelType | undefined;
};
