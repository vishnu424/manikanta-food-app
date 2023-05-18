// @ts-nocheck 
import { Instance } from "mobx-state-tree"
import { GeneralNutritionalTestimonialRecordModelBase } from "./GeneralNutritionalTestimonialRecordModel.base"

/* The TypeScript type of an instance of GeneralNutritionalTestimonialRecordModel */
export interface GeneralNutritionalTestimonialRecordModelType extends Instance<typeof GeneralNutritionalTestimonialRecordModel.Type> {}

/* A graphql query fragment builders for GeneralNutritionalTestimonialRecordModel */
export { selectFromGeneralNutritionalTestimonialRecord, generalNutritionalTestimonialRecordModelPrimitives, GeneralNutritionalTestimonialRecordModelSelector } from "./GeneralNutritionalTestimonialRecordModel.base"

/**
 * GeneralNutritionalTestimonialRecordModel
 *
 * Block of type General Nutritional Testimonial (general_nutritional_testimonial)
 */
export const GeneralNutritionalTestimonialRecordModel = GeneralNutritionalTestimonialRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
