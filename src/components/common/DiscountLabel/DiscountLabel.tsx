export type DiscountLabelType = {
  promotionTotal: number;
  grossPrice: number | undefined;
};

export const DiscountLabel: React.FC<DiscountLabelType> = ({
  promotionTotal,
  grossPrice,
}) => {
  // CALCULATE DISCOUNT FOR PROMOTIONS
  const discount =
    promotionTotal && grossPrice
      ? Math.trunc((promotionTotal / grossPrice) * 100)
      : 0;

  if (discount === 0) return null;
  return (
    <div className="mb-2 h-5 w-16 rounded-2xl bg-gradient-to-r from-success to-success-secondary px-2 font-jekoBold text-xxs text-white md:w-24 md:text-sm">
      SAVE {discount.toFixed(0)}%
    </div>
  );
};
