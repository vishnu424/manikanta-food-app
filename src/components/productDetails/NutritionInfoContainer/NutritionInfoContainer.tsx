export type NutritionalInfoType = {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
};

interface NutritionInfoContainerType {
  nutritionalInfo: NutritionalInfoType;
}

export const NutritionInfoContainer: React.FC<NutritionInfoContainerType> = ({
  nutritionalInfo,
}) => {
  return (
    <div className="my-5 flex h-12 justify-center divide-x-2 divide-rhubarb-lite rounded-32 border border-rhubarb-lite bg-white px-2">
      <span className="my-1 inline-block px-4 text-center font-jekoSemibold text-black">
        {nutritionalInfo?.calories.toFixed(0)}
        <div className="pl-1 font-jeko text-xs text-rhubarb-dark">Calories</div>
      </span>
      <span className="my-1 inline-block px-4 text-center font-jekoSemibold text-black">
        {nutritionalInfo?.protein?.toFixed(0)}g
        <div className="pl-1 font-jeko text-xs text-rhubarb-dark">Protein</div>
      </span>
      <span className="my-1 inline-block px-4 text-center font-jekoSemibold text-black">
        {nutritionalInfo?.carbs?.toFixed(0)}g
        <div className="pl-1 font-jeko text-xs text-rhubarb-dark">Carbs</div>
      </span>
      <span className="my-1 inline-block px-4 text-center font-jekoSemibold text-black">
        {nutritionalInfo?.fats?.toFixed(0)}g
        <div className="pl-1 font-jeko text-xs text-rhubarb-dark">Fats</div>
      </span>
    </div>
  );
};
