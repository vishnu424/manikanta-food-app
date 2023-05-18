// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { GoogleAuthRtoModelBase } from "./GoogleAuthRtoModel.base"

/* The TypeScript type of an instance of GoogleAuthRtoModel */
export interface GoogleAuthRtoModelType extends Instance<typeof GoogleAuthRtoModel.Type> {}

/* A graphql query fragment builders for GoogleAuthRtoModel */
export { selectFromGoogleAuthRto, googleAuthRtoModelPrimitives, GoogleAuthRtoModelSelector } from "./GoogleAuthRtoModel.base"

/**
 * GoogleAuthRtoModel
 *
 * Google Auth Response
 */
export const GoogleAuthRtoModel = GoogleAuthRtoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
