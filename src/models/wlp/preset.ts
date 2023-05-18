import _ from 'lodash';
import { Instance, types } from 'mobx-state-tree';
import {
  BUCKET_CONFIG, Gender, Answer, ACTIVE_LEVEL_TYPE, WlpPlan,
} from '../../utils/constants';

export const WlpPresetModel = types
  .model('WlpStore').props({
    content: types.map(types.frozen()),
    preset: types.map(types.frozen()),
    step: 0,
    activeLevels: types.map(types.frozen()),
    presetLoading: types.map(types.frozen()),
    currentSelectionId: types.optional(types.string, ""),
    isMealsPlan: types.optional(types.boolean, false),
  })
  .views((self) => ({
    getPreset(key: string) {
      return self.preset.get(key);
    },
    getLoadScreen(key: string){
      return self.presetLoading.get(key);
    },
    get isFemale() {
      return this.getPreset('gender') === Gender.FEMALE;
    },
    get isBreastfeeding() {
      return this.isFemale && this.getPreset('breastfeeding') === Answer.YES;
    },
    get isPregnant() {
      return this.isFemale && this.getPreset('pregnant') === Answer.YES;
    },
    get questionId() {
      return this.getPreset(self.currentSelectionId);
    },
    get activeLevelType() {
      return this.isBreastfeeding ? 'breastfeeding' : this.getPreset(ACTIVE_LEVEL_TYPE);
    },
    get isOptionSelected() {
      return self.content.get('preset')[self.step].questions.findIndex(
        (question: any) => {
          return self.preset.get(question.id)
      })
    },
    get isFixedPlan() {
      const isExist = self.content.get('preset')[self.step].questions.filter((question: { id: string; }) => {
        return self.preset.get(question.id) === WlpPlan.FIXED_FEMALE || self.preset.get(question.id) === WlpPlan.FIXED_MALE;
      })
      return isExist;
    },
    get isContainsZero() {
      return self.activeLevels.get(this.activeLevelType).includes(0);
    },
    getMacros(
      activeLevel: number,
      weight: number,
      gender: string
    ){
      const { calConfig } = BUCKET_CONFIG.WLP_CONFIG;
      const offset = _.lowerCase(gender) === 'male' ? 0 : 7.5;
      // Cal/KG
      const calKg =
        ((calConfig.base + activeLevel * calConfig.coe) * (100 - offset)) / 100;
      // calculate macros
      // const cal = roundTotal(calKg * (weight || 0), 0);
      const cal = Math.round(calKg * (weight || 0) * 100) / 100;

      return cal;
    }
  }))
  .actions((self) => ({
    setPreset(key: string, value: any) {
      self.preset.set(key, value);
    },
    setCurrentSelection(id: string) {
      self.currentSelectionId = id;
    },
    setStep(step: number){
      self.step = step;
    },
    setInitialContent(data: any) {
      self.content = data;
    },
    setInitialactiveLevels(data: any) {
      self.activeLevels = data;
    },
    setPresetLoading(key: string, data: any) {
      self.presetLoading.delete(key);
      !_.isEmpty(data) && self.presetLoading.set(key, data);
    },
    setActiveStatus(parent: number, child: number, activeLevelType: string) {
      const getActiveLevels = [...self.activeLevels.get(activeLevelType)];
      getActiveLevels[parent] = child;
      self.activeLevels.set(activeLevelType, getActiveLevels);
    },
    setMealPlan(value: boolean){
      if(self.isFixedPlan.length > 0){
        self.preset.delete(ACTIVE_LEVEL_TYPE);
      }
      self.isMealsPlan = value;
    },
  }));

export type WlpType = Instance<typeof WlpPresetModel>;
export interface WlpStore extends WlpType {}
