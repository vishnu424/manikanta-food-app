// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { ProductModelDescriptionFieldModelBase } from "./ProductModelDescriptionFieldModel.base"

/* The TypeScript type of an instance of ProductModelDescriptionFieldModel */
export interface ProductModelDescriptionFieldModelType extends Instance<typeof ProductModelDescriptionFieldModel.Type> {}

/* A graphql query fragment builders for ProductModelDescriptionFieldModel */
export { selectFromProductModelDescriptionField, productModelDescriptionFieldModelPrimitives, ProductModelDescriptionFieldModelSelector } from "./ProductModelDescriptionFieldModel.base"

/**
 * ProductModelDescriptionFieldModel
 */
export const ProductModelDescriptionFieldModel = ProductModelDescriptionFieldModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
