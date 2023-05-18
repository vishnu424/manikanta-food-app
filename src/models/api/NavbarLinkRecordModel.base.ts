// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ItemStatusEnumType } from "./ItemStatusEnum"
import { NavbarLinkRecordModel, NavbarLinkRecordModelType } from "./NavbarLinkRecordModel"
import { SiteLocale } from "./SiteLocaleEnum"
import { TagModel, TagModelType } from "./TagModel"
import { TagModelSelector } from "./TagModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  subLinks: IObservableArray<NavbarLinkRecordModelType>;
}

/**
 * NavbarLinkRecordBase
 * auto generated base class for the model NavbarLinkRecordModel.
 *
 * Block of type Navbar Link (navbar_link)
 */
export const NavbarLinkRecordModelBase = withTypedRefs<Refs>()(ModelBase
  .named('NavbarLinkRecord')
  .props({
    __typename: types.optional(types.literal("NavbarLinkRecord"), "NavbarLinkRecord"),
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
    accessibilityText: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    dropdown: types.union(types.undefined, types.null, types.frozen()),
    externalUrl: types.union(types.undefined, types.null, types.string),
    extraInfo: types.union(types.undefined, types.null, types.frozen()),
    id: types.union(types.undefined, types.frozen()),
    linkType: types.union(types.undefined, types.null, types.string),
    relativePathLink: types.union(types.undefined, types.null, types.string),
    subLinks: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => NavbarLinkRecordModel)))),
    text: types.union(types.undefined, types.null, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class NavbarLinkRecordModelSelector extends QueryBuilder {
  get _createdAt() { return this.__attr(`_createdAt`) }
  get _firstPublishedAt() { return this.__attr(`_firstPublishedAt`) }
  get _isValid() { return this.__attr(`_isValid`) }
  get _modelApiKey() { return this.__attr(`_modelApiKey`) }
  get _publicationScheduledAt() { return this.__attr(`_publicationScheduledAt`) }
  get _publishedAt() { return this.__attr(`_publishedAt`) }
  get _status() { return this.__attr(`_status`) }
  get _unpublishingScheduledAt() { return this.__attr(`_unpublishingScheduledAt`) }
  get _updatedAt() { return this.__attr(`_updatedAt`) }
  get accessibilityText() { return this.__attr(`accessibilityText`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get dropdown() { return this.__attr(`dropdown`) }
  get externalUrl() { return this.__attr(`externalUrl`) }
  get extraInfo() { return this.__attr(`extraInfo`) }
  get id() { return this.__attr(`id`) }
  get linkType() { return this.__attr(`linkType`) }
  get relativePathLink() { return this.__attr(`relativePathLink`) }
  get text() { return this.__attr(`text`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  _seoMetaTags(builder: string | TagModelSelector | ((selector: TagModelSelector) => TagModelSelector) | undefined, args?: { locale?: (SiteLocale | null) }) { return this.__child(`_seoMetaTags`+ (args ? '('+['locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), TagModelSelector, builder) }
  subLinks(builder: string | NavbarLinkRecordModelSelector | ((selector: NavbarLinkRecordModelSelector) => NavbarLinkRecordModelSelector) | undefined) { return this.__child(`subLinks`, NavbarLinkRecordModelSelector, builder) }
}
export function selectFromNavbarLinkRecord() {
  return new NavbarLinkRecordModelSelector()
}

export const navbarLinkRecordModelPrimitives = selectFromNavbarLinkRecord()._createdAt._firstPublishedAt._isValid._modelApiKey._publicationScheduledAt._publishedAt._status._unpublishingScheduledAt._updatedAt.accessibilityText.createdAt.dropdown.externalUrl.extraInfo.linkType.relativePathLink.text.updatedAt
