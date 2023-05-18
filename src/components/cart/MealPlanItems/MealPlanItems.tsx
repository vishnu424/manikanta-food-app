export type MealPlanItemsType = {
  day: number;
  lineItems: Array<any>;
};

const MealPlanItems: React.FC<MealPlanItemsType> = ({
  day,
  lineItems,
}: MealPlanItemsType) => {
  return (
    <div className="mb-5 block">
      <h4 className="mb-1.5 font-jekoBold text-sm leading-tight">Day {day}</h4>
      <p className="font-jekoSemibold text-xxs leading-4 tracking-wide">
        {lineItems &&
          lineItems.map((lineItem: any) => (
            <div key={lineItem.product}>{lineItem.product}</div>
          ))}
      </p>
    </div>
  );
};

export default MealPlanItems;
