// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { NavbarRecordModelBase } from "./NavbarRecordModel.base"

/* The TypeScript type of an instance of NavbarRecordModel */
export interface NavbarRecordModelType extends Instance<typeof NavbarRecordModel.Type> {}

/* A graphql query fragment builders for NavbarRecordModel */
export { selectFromNavbarRecord, navbarRecordModelPrimitives, NavbarRecordModelSelector } from "./NavbarRecordModel.base"

/**
 * NavbarRecordModel
 *
 * Record of type Navbar (navbar)
 */
export const NavbarRecordModel = NavbarRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
