import {
	Instance,
	SnapshotOut,
	types
} from 'mobx-state-tree';
import { WlpPresetModel } from '../wlp/preset';
import { CartModel } from "./cart";
import randomise from "randomatic";

export const CartStoreModel = types
	.model('CartStore')
	.props({
		// goalBasedPreset: types.maybe(GoalBasedPresetModel),
    cart: types.optional(CartModel, { cartId: randomise("Aa0", 48) }),
		wlp: types.optional(WlpPresetModel, {}),
	})

export type CartStoreType = Instance<typeof CartStoreModel>;
type CartStoreSnapshotType = SnapshotOut<typeof CartStoreModel>;
export interface CartStoreSnapshot extends CartStoreSnapshotType {}
