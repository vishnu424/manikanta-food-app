import type { ProductModelType } from '@/models/api';

interface NutritionalTableTypes {
  product: ProductModelType;
}

export const NutritionalTable: React.FC<NutritionalTableTypes> = ({
  product,
}) => {
  let { panelInfo } = product.nutritionalInfo;
  panelInfo = panelInfo.filter((info: any) => info.display === true);
  return (
    <table className="w-full">
      <thead>
        <tr className="font-jekoBold text-xs">
          <th className="py-2 text-left">1 Serving</th>
          <th className="text-right">
            per serving ({product.nutritionalInfo.size}
            {product.nutritionalInfo.unit})
          </th>
          <th className="text-right">pre 100g </th>
        </tr>
      </thead>
      <tbody className="font-light">
        {panelInfo &&
          panelInfo.map((info: any, index: number) => (
            <tr
              key={index}
              className={index % 2 ? 'text-sm' : 'bg-off-grey text-sm'}
            >
              <td className="p-2">{info.name}</td>
              <td className="text-right">
                {info.perServing}
                {info.unit}
              </td>
              <td className="p-1 text-right">
                {info.per100}
                {info.unit}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
