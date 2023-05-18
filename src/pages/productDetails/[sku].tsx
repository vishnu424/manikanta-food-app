import { observer } from 'mobx-react-lite';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import router from 'next/router';
import { useCallback } from 'react';
import { StructuredText } from 'react-datocms';

import Button from '@/components/common/Button/Button';
import { DiscountLabel } from '@/components/common/DiscountLabel/DiscountLabel';
import QuantityButton from '@/components/common/QuantityButton/QuantityButton';
import { BenefitTagsContainer } from '@/components/productDetails/BenefitTagsContainer/BenefitTagsContainer';
import { ImagesSwiper } from '@/components/productDetails/ImagesSwiper/ImagesSwiper';
import { NutritionInfoContainer } from '@/components/productDetails/NutritionInfoContainer/NutritionInfoContainer';
import { Price } from '@/components/productDetails/Price/Price';
import { ProductInfo } from '@/components/productDetails/ProductInfo/ProductInfo';
import { SubProductsContainer } from '@/components/productDetails/SubProductsContainer/SubProductsContainer';
import { PRODUCT_SELECTOR } from '@/graphql/selectors';
import { Meta } from '@/layouts/Meta';
import type { ProductModelType } from '@/models/api';
import { ProductStatus } from '@/models/api';
import { initializeStore, useStore } from '@/models/root-store';
import { Main } from '@/templates/Main';

type ProductDetailsProps = {
  product: ProductModelType;
};

const ProductDetails: NextPage<ProductDetailsProps> = observer(
  ({ product }: ProductDetailsProps) => {
    const {
      cartStore: {
        cart: { menuBuilderPlan },
      },
      productStore: { productsLookup },
    } = useStore();

    const item = productsLookup[product.sku];
    const itemDiscount =
      item && item.getDiscountedPrice(menuBuilderPlan?.discount);
    const tags = product?.cms?.tags ? product.cms?.tags : [];
    const dietaryTags = product?.cms?.dietaryTags
      ? product.cms?.dietaryTags
      : [];
    const images = product?.cms?.displayPageImages;

    const { promotionTotal, grossPrice } = product;

    const quantity = menuBuilderPlan?.productQtyBySku[product.sku]?.qty || 0;

    const handleAddProduct = () => {
      if (!quantity) {
        router.push({
          pathname: '/menu',
          query: { addSku: product.sku },
          hash: `#${product ? product.sku : ''}`,
        });
      } else {
        menuBuilderPlan?.increaseLineItem(product);
      }
    };

    const handleDeleteProduct = useCallback(() => {
      menuBuilderPlan?.decreaseLineItem(product);
    }, [menuBuilderPlan]);

    // const reccomendProducts = mockReccomendedProducts.products;

    return (
      <Main
        meta={
          <Meta
            title={product.name || ''}
            description={product.name || ''}
            canonical={images[0]?.url || ''}
          />
        }
      >
        <div className="p-0 md:px-10 lg:px-28 lg:py-5">
          <div className="product-detail-page relative flex flex-col md:flex-row">
            <div className="w-full p-0 md:w-5/12 md:py-10 ">
              {images && <ImagesSwiper images={images} />}

              {/* DESKTOP - Others also bought */}
              {/* {!product.hasSubProducts && (
                <div className="hidden md:flex">
                  <OtherProductsContainer products={reccomendProducts} />
                </div>
              )} */}
            </div>

            <div className="w-full p-4 md:w-7/12 md:pl-16">
              <div className="pt-3 pb-5 font-jekoMedium text-3xl leading-7 md:font-jekoBold md:text-7xl md:leading-10">
                {product.name}
              </div>

              {/* Discount for bundles */}
              {product.hasSubProducts && promotionTotal && grossPrice && (
                <DiscountLabel
                  promotionTotal={promotionTotal}
                  grossPrice={grossPrice}
                />
              )}

              {/* DESKTOP - Add to Cart + Weight */}
              <div className="hidden justify-between py-1 md:mb-5 md:flex md:py-2">
                <Price
                  discount={menuBuilderPlan?.discount}
                  netPrice={product?.netPrice || 0}
                  discountedAmount={itemDiscount}
                  grossPrice={product.grossPrice || 0}
                  hasSubProducts={product.hasSubProducts || false}
                />

                {!product.hasSubProducts && (
                  <div className="px-2 font-jekoBold text-2xl text-grey-dark">
                    {product.nutritionalInfo?.size}
                    {product.nutritionalInfo?.unit}
                  </div>
                )}
              </div>

              <div className="hidden md:mb-4 md:flex">
                {quantity ? (
                  <QuantityButton
                    handleAddProduct={handleAddProduct}
                    handleDeleteProduct={handleDeleteProduct}
                    qty={quantity}
                    size="large"
                  />
                ) : (
                  <div className="flex justify-end">
                    <Button
                      theme="primary"
                      type="button"
                      onClick={handleAddProduct}
                    >
                      <span className="font-jekoMedium text-xl">
                        Add to Cart
                      </span>
                    </Button>
                  </div>
                )}
              </div>

              {/* MOBILE - Price & Weight */}
              <div className="flex justify-between p-0 md:hidden md:p-2">
                <Price
                  discount={menuBuilderPlan?.discount}
                  netPrice={product?.netPrice || 0}
                  discountedAmount={itemDiscount}
                  grossPrice={product.grossPrice || 0}
                  hasSubProducts={product.hasSubProducts || false}
                />

                {!product.hasSubProducts && (
                  <div className="font-jeko">
                    {product.nutritionalInfo?.size}
                    {product.nutritionalInfo?.unit}
                  </div>
                )}
              </div>

              <div className="flex flex-col-reverse md:flex-col">
                {/* Description */}
                <article className="py-3">
                  <StructuredText data={product?.cms?.description} />
                </article>

                {/* Nutrition Info */}
                {!product.hasSubProducts && (
                  <NutritionInfoContainer
                    nutritionalInfo={product.nutritionalInfo}
                  />
                )}
              </div>

              {/* Benefits */}
              {dietaryTags && tags && (
                <div className="mt-3 mb-6">
                  <BenefitTagsContainer tags={[...dietaryTags, ...tags]} />
                </div>
              )}

              {/* Nutrition Accordions */}
              {!product.hasSubProducts && <ProductInfo product={product} />}
            </div>
          </div>

          {/* SubProducts */}
          {product.hasSubProducts && (
            <div>
              <SubProductsContainer subProducts={product?.subProducts} />
              {/* <div className="hidden md:block">
                <OtherProductsContainer
                  products={reccomendProducts}
                  slidesPerView={3.5}
                />
              </div> */}
            </div>
          )}

          {/* MOBILE - Others also bought */}
          {/* <div className="block md:hidden">
            <OtherProductsContainer products={reccomendProducts} />
          </div> */}

          {/* MOBILE - Add to Cart */}
          <div className="sticky bottom-0 left-0 z-50 flex w-full bg-white p-4 shadow-3xl md:hidden">
            {quantity ? (
              <QuantityButton
                handleAddProduct={handleAddProduct}
                handleDeleteProduct={handleDeleteProduct}
                qty={quantity}
                size="large"
              />
            ) : (
              <div className="flex justify-end">
                <Button
                  theme="primary"
                  type="button"
                  onClick={handleAddProduct}
                >
                  <span className="px-10 font-jekoMedium text-xl">
                    Add to Cart
                  </span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Main>
    );
  }
);

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { sku } = context.params!;
  const store = initializeStore(null, true);

  const { products }: { products: ProductModelType[] } =
    await store.api.queryProducts(
      {
        where: {
          status: {
            _eq: ProductStatus.ACTIVE,
          },
          sku: {
            _eq: sku,
          },
        },
      },
      PRODUCT_SELECTOR
    );

  const product = products?.[0];

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const store = initializeStore(null, true);

  const { products }: { products: ProductModelType[] } =
    await store.api.queryProducts(
      {
        where: {
          status: {
            _eq: ProductStatus.ACTIVE,
          },
        },
      },
      PRODUCT_SELECTOR
    );

  const paths = products.map((product) => {
    return {
      params: { sku: product.sku },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default ProductDetails;
