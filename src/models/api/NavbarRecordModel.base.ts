// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FileFieldModel, FileFieldModelType } from "./FileFieldModel"
import { FileFieldModelSelector } from "./FileFieldModel.base"
import { ItemStatusEnumType } from "./ItemStatusEnum"
import { NavbarLinkRecordModel, NavbarLinkRecordModelType } from "./NavbarLinkRecordModel"
import { NavbarLinkRecordModelSelector } from "./NavbarLinkRecordModel.base"
import { SiteLocale } from "./SiteLocaleEnum"
import { TagModel, TagModelType } from "./TagModel"
import { TagModelSelector } from "./TagModel.base"
import { RootStoreType } from "./index"


/**
 * NavbarRecordBase
 * auto generated base class for the model NavbarRecordModel.
 *
 * Record of type Navbar (navbar)
 */
export const NavbarRecordModelBase = ModelBase
  .named('NavbarRecord')
  .props({
    __typename: types.optional(types.literal("NavbarRecord"), "NavbarRecord"),
    _createdAt: types.union(types.undefined, types.frozen()),
    _firstPublishedAt: types.union(types.undefined, types.null, types.frozen()),
    _isValid: types.union(types.undefined, types.frozen()),
    _modelApiKey: types.union(types.undefined, types.string),
    _publicationScheduledAt: types.union(types.undefined, types.null, types.frozen()),
    _publishedAt: types.union(types.undefined, types.null, types.frozen()),
    /** SEO meta tags */
    _seoMetaTags: types.union(types.undefined, types.array(types.late((): any => TagModel))),
    _status: types.union(types.undefined, ItemStatusEnumType),
    _unpublishingScheduledAt: types.union(types.undefined, types.null, types.frozen()),
    _updatedAt: types.union(types.undefined, types.frozen()),
    accountIcon: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    cartIcon: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    createdAt: types.union(types.undefined, types.frozen()),
    extraInfo: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.frozen()),
    links: types.union(types.undefined, types.array(types.late((): any => NavbarLinkRecordModel))),
    logo: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    myAccountText: types.union(types.undefined, types.null, types.string),
    signInText: types.union(types.undefined, types.null, types.string),
    signOutText: types.union(types.undefined, types.null, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class NavbarRecordModelSelector extends QueryBuilder {
  get _createdAt() { return this.__attr(`_createdAt`) }
  get _firstPublishedAt() { return this.__attr(`_firstPublishedAt`) }
  get _isValid() { return this.__attr(`_isValid`) }
  get _modelApiKey() { return this.__attr(`_modelApiKey`) }
  get _publicationScheduledAt() { return this.__attr(`_publicationScheduledAt`) }
  get _publishedAt() { return this.__attr(`_publishedAt`) }
  get _status() { return this.__attr(`_status`) }
  get _unpublishingScheduledAt() { return this.__attr(`_unpublishingScheduledAt`) }
  get _updatedAt() { return this.__attr(`_updatedAt`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get extraInfo() { return this.__attr(`extraInfo`) }
  get id() { return this.__attr(`id`) }
  get myAccountText() { return this.__attr(`myAccountText`) }
  get signInText() { return this.__attr(`signInText`) }
  get signOutText() { return this.__attr(`signOutText`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  _seoMetaTags(builder: string | TagModelSelector | ((selector: TagModelSelector) => TagModelSelector) | undefined, args?: { locale?: (SiteLocale | null) }) { return this.__child(`_seoMetaTags`+ (args ? '('+['locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), TagModelSelector, builder) }
  accountIcon(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`accountIcon`, FileFieldModelSelector, builder) }
  cartIcon(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`cartIcon`, FileFieldModelSelector, builder) }
  links(builder: string | NavbarLinkRecordModelSelector | ((selector: NavbarLinkRecordModelSelector) => NavbarLinkRecordModelSelector) | undefined) { return this.__child(`links`, NavbarLinkRecordModelSelector, builder) }
  logo(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`logo`, FileFieldModelSelector, builder) }
}
export function selectFromNavbarRecord() {
  return new NavbarRecordModelSelector()
}

export const navbarRecordModelPrimitives = selectFromNavbarRecord()._createdAt._firstPublishedAt._isValid._modelApiKey._publicationScheduledAt._publishedAt._status._unpublishingScheduledAt._updatedAt.createdAt.extraInfo.myAccountText.signInText.signOutText.updatedAt
