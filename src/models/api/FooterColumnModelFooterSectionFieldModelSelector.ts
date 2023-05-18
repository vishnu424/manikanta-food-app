// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { QueryBuilder } from "mst-gql"
import { FooterLinkSectionRecordModelType } from "./FooterLinkSectionRecordModel"
import { FooterLinkSectionRecordModelSelector, footerLinkSectionRecordModelPrimitives } from "./FooterLinkSectionRecordModel.base"
import { FooterTextSectionRecordModelType } from "./FooterTextSectionRecordModel"
import { FooterTextSectionRecordModelSelector, footerTextSectionRecordModelPrimitives } from "./FooterTextSectionRecordModel.base"

export type FooterColumnModelFooterSectionFieldUnion = FooterLinkSectionRecordModelType | FooterTextSectionRecordModelType

export class FooterColumnModelFooterSectionFieldModelSelector extends QueryBuilder {
  footerLinkSectionRecord(builder?: string | FooterLinkSectionRecordModelSelector | ((selector: FooterLinkSectionRecordModelSelector) => FooterLinkSectionRecordModelSelector)) { return this.__inlineFragment(`FooterLinkSectionRecord`, FooterLinkSectionRecordModelSelector, builder) }
  footerTextSectionRecord(builder?: string | FooterTextSectionRecordModelSelector | ((selector: FooterTextSectionRecordModelSelector) => FooterTextSectionRecordModelSelector)) { return this.__inlineFragment(`FooterTextSectionRecord`, FooterTextSectionRecordModelSelector, builder) }
}
export function selectFromFooterColumnModelFooterSectionField() {
  return new FooterColumnModelFooterSectionFieldModelSelector()
}

// provides all primitive fields of union member types combined together
export const footerColumnModelFooterSectionFieldModelPrimitives = selectFromFooterColumnModelFooterSectionField().footerLinkSectionRecord(footerLinkSectionRecordModelPrimitives).footerTextSectionRecord(footerTextSectionRecordModelPrimitives)