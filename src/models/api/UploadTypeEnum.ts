// @ts-nocheck 
/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum UploadType {
  archive="archive",
audio="audio",
image="image",
pdfdocument="pdfdocument",
presentation="presentation",
richtext="richtext",
spreadsheet="spreadsheet",
video="video"
}

/**
* UploadType
*/
export const UploadTypeEnumType = types.enumeration("UploadType", [
        "archive",
  "audio",
  "image",
  "pdfdocument",
  "presentation",
  "richtext",
  "spreadsheet",
  "video",
      ])
