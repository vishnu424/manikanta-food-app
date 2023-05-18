export type UnfilledDiscountsType = {
  item: number;
};

const UnfilledDiscounts: React.FC<UnfilledDiscountsType> = ({
  item,
}: UnfilledDiscountsType) => {
  return (
    <>
      <li
        className={
          'mr-1.5 w-7 rounded-full bg-off-grey text-center text-grey-dark'
        }
      >
        {item}&#37;
      </li>
    </>
  );
};

export default UnfilledDiscounts;
