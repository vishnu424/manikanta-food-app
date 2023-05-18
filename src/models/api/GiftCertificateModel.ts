// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { GiftCertificateModelBase } from "./GiftCertificateModel.base"

/* The TypeScript type of an instance of GiftCertificateModel */
export interface GiftCertificateModelType extends Instance<typeof GiftCertificateModel.Type> {}

/* A graphql query fragment builders for GiftCertificateModel */
export { selectFromGiftCertificate, giftCertificateModelPrimitives, GiftCertificateModelSelector } from "./GiftCertificateModel.base"

/**
 * GiftCertificateModel
 *
 * Gift Card
 */
export const GiftCertificateModel = GiftCertificateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
