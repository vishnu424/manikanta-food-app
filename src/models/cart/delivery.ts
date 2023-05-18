import { types } from "mobx-state-tree";
import { AddressModel, Address } from "@/models/customer/address";

export const DeliveryModel = types
  .model("Delivery")
  .props({
    deliveryDate: types.maybe(types.string),
    timeSlot: types.maybe(types.string),
    deliveryAddress: types.maybe(AddressModel),
  })
  .actions((self) => ({
    setDeliveryAddress(address: Address) {
      self.deliveryAddress = address;
    },
    setDeliveryDate(date: string) {
      self.deliveryDate = date;
    },
    setTimeSlot(timeSlot: string) {
      self.timeSlot = timeSlot;
    },
  }));
