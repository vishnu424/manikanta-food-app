import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';

import CartFooter from '@/components/cart/CartFooter/CartFooter';
import { ClearCartModal } from '@/components/cart/ClearCartModal/ClearCartModal';
import CustomPlan from '@/components/cart/CustomPlan/CustomPlan';
import EmptyCart from '@/components/cart/EmptyCart/EmptyCart';
import FreeShippingBanner from '@/components/cart/FreeShippingBanner/FreeShippingBanner';
import GoalBasedPlan from '@/components/cart/GoalBasedPlan/GoalBasedPlan';
import ItemDeletedMsg from '@/components/cart/ItemDeletedMsg/ItemDeletedMsg';
import OrderSummary from '@/components/cart/OrderSummary/OrderSummary';
import TopButtons from '@/components/cart/TopButtons/TopButtons';
import { OtherProductsContainer } from '@/components/common/OtherProductsContainer/OtherProductsContainer';
import { useDebouncedUndo } from '@/hooks';
import { useStore } from '@/models/root-store';

export type CartType = {
  closeCart: () => void;
};

const Cart = observer(({ closeCart }: CartType) => {
  const {
    cartStore: { cart },
    generalStore: { config },
  } = useStore();
  const [showClearCartModal, setShowClearCartModal] = useState(false);
  const [showItemDeletedMsg, setShowItemDeletedMsg] = useState(false);
  const [doDelete, setDoDelete] = useState(false);
  const [numberOfDeletedItems, setNumberOfDeletedItems] = useState(0);
  const [deletedLineItem, setDeletedLineItem] = useState('');

  const { menuBuilderPlan, subTotal, cartList, isEmpty } = cart;
  const { MOV } = config;

  const orderPlans = cartList.filter(
    (list: any) => list.title === 'Order Plans'
  )[0]?.data;

  const clearCart = () => {
    cart.clearCart();
  };

  const { undo, showUndo, call } = useDebouncedUndo(() => {
    setDoDelete(true);
  });

  useEffect(() => {
    if (!showUndo) {
      setDoDelete(false);
    }
  }, [showUndo]);

  return (
    <div>
      {isEmpty && <EmptyCart closeCart={closeCart} />}

      {!isEmpty && (
        <div className="relative">
          <OrderSummary cart={cart} />
          <TopButtons closeCart={closeCart} />

          {/* Clear Cart */}
          <div className="relative mt-8">
            <p
              className="absolute top-1 right-3 mr-4 cursor-pointer font-jekoMedium text-sm text-attention"
              onClick={() => setShowClearCartModal(!showClearCartModal)}
            >
              Clear Cart
            </p>
          </div>

          {showUndo && (
            <ItemDeletedMsg qty={numberOfDeletedItems} undoDelete={undo} />
          )}

          {/* Order Plans */}
          {orderPlans &&
            orderPlans.length > 0 &&
            orderPlans.map((plan: any) => (
              <div key={plan.planId}>
                <GoalBasedPlan
                  plan={plan}
                  showItemDeletedMsg={showItemDeletedMsg}
                  setShowItemDeletedMsg={setShowItemDeletedMsg}
                />
              </div>
            ))}

          {/* Menu Builder */}
          <CustomPlan
            categories={cartList}
            plan={menuBuilderPlan}
            doDelete={doDelete}
            setDeletedLineItem={setDeletedLineItem}
            setNumberOfDeletedItems={setNumberOfDeletedItems}
            call={call}
            deletedLineItem={deletedLineItem}
          />

          <div className="flex px-2 pt-10 pb-7 md:px-6">
            <OtherProductsContainer products={[]} slidesPerView={1.1} />
          </div>

          <FreeShippingBanner />

          <ClearCartModal
            isOpen={showClearCartModal}
            onRequestClose={() => setShowClearCartModal(false)}
            clearCart={clearCart}
          />
          <CartFooter total={subTotal} MOV={MOV} closeCart={closeCart} />
        </div>
      )}
    </div>
  );
});

export default Cart;
