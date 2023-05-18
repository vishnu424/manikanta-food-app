// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { LineItemModelBase } from "./LineItemModel.base"

/* The TypeScript type of an instance of LineItemModel */
export interface LineItemModelType extends Instance<typeof LineItemModel.Type> {}

/* A graphql query fragment builders for LineItemModel */
export { selectFromLineItem, lineItemModelPrimitives, LineItemModelSelector } from "./LineItemModel.base"

/**
 * LineItemModel
 *
 * Order LineItem
 */
export const LineItemModel = LineItemModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
