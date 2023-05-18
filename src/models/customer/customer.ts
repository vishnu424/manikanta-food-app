import { types, Instance } from "mobx-state-tree";
import { PaymentModel } from "./payment";
import { Address, AddressModel } from "./address";
import { AuthRole } from "../api";

export const CustomerModel = types
  .model("Customer")
  .props({
    _id: types.identifier,
    email: types.union(types.undefined, types.null, types.string),
    firstName: types.union(types.undefined, types.null, types.string),
    lastName: types.union(types.undefined, types.null, types.string),
    role: types.enumeration(Object.values(AuthRole)),
    phone: types.maybe(types.string),
    credit: types.optional(types.number, 0),
    referCode: types.maybe(types.string),
    addresses: types.optional(types.array(AddressModel), []),
    payments: types.optional(types.array(PaymentModel), []),
  })
  .views((self) => ({
    get defaultAddress(): Address | undefined {
      return self.addresses.find((address) => address.preferred);
    },
  }));

export interface Customer extends Instance<typeof CustomerModel> {}
