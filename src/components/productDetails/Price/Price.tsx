export type PriceType = {
  discount: number;
  netPrice: number;
  discountedAmount: number;
  grossPrice: number;
  hasSubProducts: boolean;
};

export const Price: React.FC<PriceType> = ({
  discount,
  netPrice,
  discountedAmount,
  grossPrice,
  hasSubProducts,
}) => {
  const discountable = discount || hasSubProducts;
  const discountStyle = discountable ? 'line-through' : 'font-jekoExtrabold';
  let newPrice;

  if (hasSubProducts) {
    newPrice = grossPrice;
  } else if (discount) {
    newPrice = discountedAmount;
  }

  return (
    <div className="flex space-x-3">
      <span className={`text-xl ${discountStyle}`}>${netPrice}</span>
      {discountable ? (
        <span className="font-jekoExtrabold text-xl">${newPrice}</span>
      ) : null}
    </div>
  );
};
