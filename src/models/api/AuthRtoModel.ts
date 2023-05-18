// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { AuthRtoModelBase } from "./AuthRtoModel.base"

/* The TypeScript type of an instance of AuthRtoModel */
export interface AuthRtoModelType extends Instance<typeof AuthRtoModel.Type> {}

/* A graphql query fragment builders for AuthRtoModel */
export { selectFromAuthRto, authRtoModelPrimitives, AuthRtoModelSelector } from "./AuthRtoModel.base"

/**
 * AuthRtoModel
 *
 * Auth Response
 */
export const AuthRtoModel = AuthRtoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
