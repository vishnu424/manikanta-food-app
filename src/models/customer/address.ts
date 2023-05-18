import { Instance, types } from "mobx-state-tree";
import { State } from "../api";

// address
export enum AddressCategory {
  Residential = "home",
  Business = "work",
}

export const AddressModel = types
  .model("Address")
  .props({
    addressId: "",
    method: types.string,
    zone: types.maybe(types.number),
    street: types.string,
    suburb: types.string,
    postcode: types.string,
    state: types.maybe(types.enumeration(Object.values(State))),
    firstName: types.union(types.undefined, types.null, types.string),
    lastName: types.union(types.undefined, types.null, types.string),
    phone: types.optional(types.string, ""),
    businessName: types.union(types.undefined, types.null, types.string),
    instructions: types.union(types.undefined, types.null, types.string),
    country: "AU",
    preferred: false,
  })
  .views((self) => ({
    get showBusinessName() {
      return self.method === AddressCategory.Business;
    },
  }));

export interface Address extends Instance<typeof AddressModel> {}
