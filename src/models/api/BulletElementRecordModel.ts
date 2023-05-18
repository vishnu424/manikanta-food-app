// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { BulletElementRecordModelBase } from "./BulletElementRecordModel.base"

/* The TypeScript type of an instance of BulletElementRecordModel */
export interface BulletElementRecordModelType extends Instance<typeof BulletElementRecordModel.Type> {}

/* A graphql query fragment builders for BulletElementRecordModel */
export { selectFromBulletElementRecord, bulletElementRecordModelPrimitives, BulletElementRecordModelSelector } from "./BulletElementRecordModel.base"

/**
 * BulletElementRecordModel
 *
 * Block of type Bullet Element (bullet_element)
 */
export const BulletElementRecordModel = BulletElementRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
