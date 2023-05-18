// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { PaymentCardModelBase } from "./PaymentCardModel.base"

/* The TypeScript type of an instance of PaymentCardModel */
export interface PaymentCardModelType extends Instance<typeof PaymentCardModel.Type> {}

/* A graphql query fragment builders for PaymentCardModel */
export { selectFromPaymentCard, paymentCardModelPrimitives, PaymentCardModelSelector } from "./PaymentCardModel.base"

/**
 * PaymentCardModel
 *
 * Customer Payment Card
 */
export const PaymentCardModel = PaymentCardModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
