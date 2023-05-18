import { useState } from 'react';

import Accordion from '@/components/common/Accordion/Accordian';
import { NutritionalTable } from '@/components/productDetails/NutritionTableContainer/NutritionalTableContainer';
import type { ProductModelType } from '@/models/api';

interface ProductInfoTypes {
  product: ProductModelType;
}

export const ProductInfo: React.FC<ProductInfoTypes> = ({ product }) => {
  const [ingredientsTab, setIngredientsTab] = useState(1);
  const [nutritionTab, setNutritionTab] = useState(0);
  const [instructionsTab, setInstructionsTab] = useState(0);

  const { allergens } = product.nutritionalInfo;
  const instructions = product.cms?.productInstruction?.instructions;

  return (
    <>
      {/* Ingredients */}
      <Accordion
        title="Ingredients"
        activeIndex={1}
        indexVal={ingredientsTab}
        setActiveIndex={() => setIngredientsTab(ingredientsTab ? 0 : 1)}
      >
        <div className="text-xs md:text-sm">
          <div className="mb-3">{product.nutritionalInfo.ingredients}</div>
          {allergens && allergens.length > 0 && (
            <div className="mb-3 py-1 font-jekoBold">
              Contains: <span>{allergens}</span>
            </div>
          )}
          <div className="font-jekoSemibold">
            Food Allergy Notice: Our meals are prepared in a kitchen whose
            environment contains eggs, fish, milk, peanuts, sesame, crustaceans,
            soy, nuts, tree nuts, gluten, lupin and sulphites. Though best
            practices are used in preparing the meal, inadvertent
            cross-contamination may occur. We cannot guarantee the complete
            absence of these allergens. Our nutrition data includes all sauces,
            dressings, condiments, and garnishes included with a dish. Every
            reasonable effort has been made to ensure the accuracy of all
            information at time of publication. However, the information
            contained above is subject to change without prior notice.
          </div>
        </div>
      </Accordion>

      {/* Nutritional */}
      <Accordion
        title="Nutritional"
        activeIndex={1}
        indexVal={nutritionTab}
        setActiveIndex={() => setNutritionTab(nutritionTab ? 0 : 1)}
      >
        <NutritionalTable product={product} />
      </Accordion>

      {/* Instructions */}
      <Accordion
        title="Instructions"
        activeIndex={1}
        indexVal={instructionsTab}
        setActiveIndex={() => {
          setInstructionsTab(instructionsTab ? 0 : 1);
        }}
      >
        <div>
          {instructions &&
            instructions.map((instruction: any, index: number) => (
              <div key={index}>
                <div key={index} className="pb-1 font-jekoBold">
                  {instruction.title}
                </div>
                <div
                  key={index}
                  className="whitespace-pre-line pb-2 font-jeko"
                  dangerouslySetInnerHTML={{ __html: instruction.text }}
                ></div>
              </div>
            ))}
        </div>
      </Accordion>
    </>
  );
};
