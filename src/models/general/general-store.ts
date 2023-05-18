import { types } from "mobx-state-tree";
import { GeneralModel } from "./general";

export const GeneralStoreModel = types.model("GeneralStore").props({
  config: types.optional(GeneralModel, { MOV: 49 }),  //TO BE UPDATED
});
