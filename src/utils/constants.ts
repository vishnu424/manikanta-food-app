// macro calculator
export enum Goal {
  MGAIN = 'musclegain',
  PERF = 'performance',
  CCTRL = 'caloriecontrol',
  WLOSS = 'weightloss',
}

export const PACKS_COLLECTION_TYPE = {
  [Goal.MGAIN]: 'muscle-gain',
  [Goal.PERF]: 'performance',
  [Goal.CCTRL]: 'calorie-control',
  [Goal.WLOSS]: 'weight-loss',
};

export enum WlpPlan {
  FULL = 'wlp-full',
  LITE = 'wlp-lite',
  FIXED_FEMALE = 'wlp-fixed-female',
  FIXED_MALE = 'wlp-fixed-male',
  FULL_FEMALE = 'wlp-full-female',
  FULL_MALE = 'wlp-full-male',
}

export type OptionType = 'single-choice' | 'multiple-choice';

export type Position = { x: number; y: number };

export enum Answer {
  YES = 'yes',
  NO = 'no',
}

export const ActiveStatus = ['Lightly Active', 'Active', 'Very Active'];

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export const days = [
  { id: 0, day: 'Mon' },
  { id: 1, day: 'Tue' },
  { id: 2, day: 'Wed' },
  { id: 3, day: 'Thu' },
  { id: 4, day: 'Fri' },
  { id: 5, day: 'Sat' },
  { id: 6, day: 'Sun' },
];

export const ACTIVE_LEVEL_TYPE = 'activeLevelType';

export const BUCKET_CONFIG = {
  WLP_CONFIG: {
    calConfig: { base: 27, coe: 2.7 },
    pConfig: { base: 0.3, coe: -0.005 },
    cConfig: { base: 0.35, coe: 0.005 },
    fConfig: { base: 0.35, coe: 0 },
  },
};
