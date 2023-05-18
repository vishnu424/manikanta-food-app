// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { NavbarLinkRecordModelBase } from "./NavbarLinkRecordModel.base"

/* The TypeScript type of an instance of NavbarLinkRecordModel */
export interface NavbarLinkRecordModelType extends Instance<typeof NavbarLinkRecordModel.Type> {}

/* A graphql query fragment builders for NavbarLinkRecordModel */
export { selectFromNavbarLinkRecord, navbarLinkRecordModelPrimitives, NavbarLinkRecordModelSelector } from "./NavbarLinkRecordModel.base"

/**
 * NavbarLinkRecordModel
 *
 * Block of type Navbar Link (navbar_link)
 */
export const NavbarLinkRecordModel = NavbarLinkRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
