import 'swiper/css/swiper.css';

import Image from 'next/image';
import Link from 'next/link';
import Swiper from 'react-id-swiper';

interface ImagesSwiperTypes {
  images: Array<any>;
}

export const ImagesSwiper: React.FC<ImagesSwiperTypes> = ({ images }) => {
  const pagination =
    images && images.length > 1
      ? {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        }
      : {};

  const params = {
    spaceBetween: 0,
    slidesPerView: 1,
    pagination,
    lazy: true,
  };

  return images ? (
    <Swiper {...params}>
      {images.map((image: any) => (
        <div
          key={image.public_id}
          className="relative w-full max-w-full bg-off-white"
        >
          <Image
            layout="responsive"
            className="mb-3 rounded-none md:rounded-xl"
            width="375"
            height="375"
            src={image.url}
            alt={''}
          />
          {/* Back Button */}
          <div className="absolute top-2 left-2 z-10 flex items-center">
            <Link href="/menu">
              <div className="flex h-8 w-20 cursor-pointer items-center justify-center rounded-32 bg-white p-2 font-jekoMedium text-black">
                <Image
                  width="12"
                  height="12"
                  src="/assets/images/png/arrow-back.png"
                  alt={''}
                />
                <span className="px-1">Back</span>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </Swiper>
  ) : (
    <div />
  );
};
