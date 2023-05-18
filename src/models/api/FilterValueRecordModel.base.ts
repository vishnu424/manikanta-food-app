// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FileFieldModel, FileFieldModelType } from "./FileFieldModel"
import { FileFieldModelSelector } from "./FileFieldModel.base"
import { FilterValueRecordModel, FilterValueRecordModelType } from "./FilterValueRecordModel"
import { ItemStatusEnumType } from "./ItemStatusEnum"
import { SiteLocale } from "./SiteLocaleEnum"
import { TagModel, TagModelType } from "./TagModel"
import { TagModelSelector } from "./TagModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  subValues: IObservableArray<FilterValueRecordModelType>;
}

/**
 * FilterValueRecordBase
 * auto generated base class for the model FilterValueRecordModel.
 *
 * Block of type Filter Value (filter_value)
 */
export const FilterValueRecordModelBase = withTypedRefs<Refs>()(ModelBase
  .named('FilterValueRecord')
  .props({
    __typename: types.optional(types.literal("FilterValueRecord"), "FilterValueRecord"),
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
    createdAt: types.union(types.undefined, types.frozen()),
    data: types.union(types.undefined, types.null, types.frozen()),
    icon: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    iconActive: types.union(types.undefined, types.null, types.late((): any => FileFieldModel)),
    id: types.union(types.undefined, types.frozen()),
    key: types.union(types.undefined, types.null, types.string),
    multiKey: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.null, types.string),
    showCount: types.union(types.undefined, types.null, types.frozen()),
    singleKey: types.union(types.undefined, types.null, types.string),
    subValues: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => FilterValueRecordModel)))),
    updatedAt: types.union(types.undefined, types.frozen()),
    value: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class FilterValueRecordModelSelector extends QueryBuilder {
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
  get data() { return this.__attr(`data`) }
  get id() { return this.__attr(`id`) }
  get key() { return this.__attr(`key`) }
  get multiKey() { return this.__attr(`multiKey`) }
  get name() { return this.__attr(`name`) }
  get showCount() { return this.__attr(`showCount`) }
  get singleKey() { return this.__attr(`singleKey`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get value() { return this.__attr(`value`) }
  _seoMetaTags(builder: string | TagModelSelector | ((selector: TagModelSelector) => TagModelSelector) | undefined, args?: { locale?: (SiteLocale | null) }) { return this.__child(`_seoMetaTags`+ (args ? '('+['locale'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), TagModelSelector, builder) }
  icon(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`icon`, FileFieldModelSelector, builder) }
  iconActive(builder: string | FileFieldModelSelector | ((selector: FileFieldModelSelector) => FileFieldModelSelector) | undefined) { return this.__child(`iconActive`, FileFieldModelSelector, builder) }
  subValues(builder: string | FilterValueRecordModelSelector | ((selector: FilterValueRecordModelSelector) => FilterValueRecordModelSelector) | undefined) { return this.__child(`subValues`, FilterValueRecordModelSelector, builder) }
}
export function selectFromFilterValueRecord() {
  return new FilterValueRecordModelSelector()
}

export const filterValueRecordModelPrimitives = selectFromFilterValueRecord()._createdAt._firstPublishedAt._isValid._modelApiKey._publicationScheduledAt._publishedAt._status._unpublishingScheduledAt._updatedAt.createdAt.data.key.multiKey.name.showCount.singleKey.updatedAt.value
