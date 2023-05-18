// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { QueryBuilder } from "mst-gql"
import { LinkRecordModelType } from "./LinkRecordModel"
import { LinkRecordModelSelector, linkRecordModelPrimitives } from "./LinkRecordModel.base"
import { LinkSeparatorRecordModelType } from "./LinkSeparatorRecordModel"
import { LinkSeparatorRecordModelSelector, linkSeparatorRecordModelPrimitives } from "./LinkSeparatorRecordModel.base"

export type FooterLinkSectionModelSectionLinksFieldUnion = LinkRecordModelType | LinkSeparatorRecordModelType

export class FooterLinkSectionModelSectionLinksFieldModelSelector extends QueryBuilder {
  linkRecord(builder?: string | LinkRecordModelSelector | ((selector: LinkRecordModelSelector) => LinkRecordModelSelector)) { return this.__inlineFragment(`LinkRecord`, LinkRecordModelSelector, builder) }
  linkSeparatorRecord(builder?: string | LinkSeparatorRecordModelSelector | ((selector: LinkSeparatorRecordModelSelector) => LinkSeparatorRecordModelSelector)) { return this.__inlineFragment(`LinkSeparatorRecord`, LinkSeparatorRecordModelSelector, builder) }
}
export function selectFromFooterLinkSectionModelSectionLinksField() {
  return new FooterLinkSectionModelSectionLinksFieldModelSelector()
}

// provides all primitive fields of union member types combined together
export const footerLinkSectionModelSectionLinksFieldModelPrimitives = selectFromFooterLinkSectionModelSectionLinksField().linkRecord(linkRecordModelPrimitives).linkSeparatorRecord(linkSeparatorRecordModelPrimitives)