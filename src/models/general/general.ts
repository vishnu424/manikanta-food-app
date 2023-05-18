import { types } from 'mobx-state-tree';

export const GeneralModel = types
  .model('General')
  .props({
    MOV: types.number,
  })
  .views(() => ({
    get getMOV() : number {
      // TO BE UPDATED - Call API
      return 49;
    },
  }));
